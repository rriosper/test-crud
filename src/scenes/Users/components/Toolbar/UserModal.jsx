import styled, { Box } from "@xstyled/styled-components";
import { Field, Form, Formik } from "formik";
import PropTypes from "prop-types";
import { defaultTo, pick, pipe, prop, isNil } from "ramda";
import React, { useCallback } from "react";
import { useDispatch, useSelector, batch } from "react-redux";
import { DeleteForever, Save } from "styled-icons/material";

import { MODALS } from "#constants";
import { actions, selectors } from "#store";
import { usersService } from "#services";
import { Avatar, Button, Input, useModal } from "#components";

const defaultValues = {
  name: "",
  surname: "",
  age: 0,
  connectedUsers: 0,
};

const getInitialValues = pipe(
  defaultTo(defaultValues),
  pick(["image", "name", "surname", "age", "connectedUsers", "id"])
);

const SLabel = styled.span`
  font-weight: bold;
  margin-right: xs;
  text-transform: capitalize;
`;

const Property = ({ name, ...props }) => (
  <Box display="flex" alignItems="center" marginBottom="xs">
    <SLabel>{`${name}:`}</SLabel>
    <Field as={Input} name={name} {...props} />
  </Box>
);

Property.propTypes = {
  name: PropTypes.string.isRequired,
};

const UserModal = () => {
  const { toggle } = useModal(MODALS.user);
  const user = useSelector(selectors.users.selected) || {};
  const initialValues = getInitialValues(user);
  const dispatch = useDispatch();
  const id = prop("id", user);
  const isNewUser = isNil(id);
  const remove = useCallback(() => {
    batch(() => {
      dispatch(actions.creators.user.remove(id));
      toggle();
    });
  }, [id]);

  const edit = useCallback((values) => {
    batch(() => {
      dispatch(actions.creators.user.edit(values));
      toggle();
    });
  });

  const add = useCallback((values) => {
    batch(() => {
      dispatch(
        actions.creators.user.add({
          ...values,
          connectedUsers: usersService.getNewConnectedId(),
        })
      );
      toggle();
    });
  });

  return (
    <Formik initialValues={initialValues} onSubmit={isNewUser ? add : edit}>
      {({ values: { image, name, surname } }) => {
        return (
          <Form>
            <Box maxWidth="320px">
              <Box
                marginBottom="sm"
                display="grid"
                gridTemplateColumns="auto 1fr"
                gridGap="sm"
                alignItems="center"
              >
                <Avatar image={image} name={`${name} ${surname}`} />
                <Box
                  height="100%"
                  display="flex"
                  flexDirection="column"
                  justifyContent="space-around"
                >
                  <Property name="name" />
                  <Property name="surname" />
                </Box>
              </Box>
              <Box
                display="grid"
                gridTemplateColumns="repeat(2, auto)"
                gridGap="sm"
              >
                <Property name="age" />
                <Property name="connectedUsers" disabled fancy />
              </Box>
              <Box
                display="grid"
                gridTemplateColumns="repeat(2, auto)"
                gridGap="sm"
                marginBottom="sm"
                justifyContent="end"
                marginTop="sm"
              >
                <Button type="submit" backgroundColor="ok">
                  <Save />
                  Save
                </Button>
                {!isNewUser && (
                  <Button onClick={remove} backgroundColor="ko">
                    <DeleteForever />
                    Remove
                  </Button>
                )}
              </Box>
            </Box>
          </Form>
        );
      }}
    </Formik>
  );
};

export default UserModal;
