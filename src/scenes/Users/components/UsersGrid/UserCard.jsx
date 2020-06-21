import styled, { Box, css } from "@xstyled/styled-components";
import { breakpoints } from "@xstyled/system";
import PropTypes from "prop-types";
import { ellipsize } from "ramdu";
import React, { useCallback } from "react";
import { useInView } from "react-intersection-observer";
import { batch, useDispatch } from "react-redux";

import { actions } from "#store";
import { MODALS } from "#constants";
import { Avatar, Card, useModal } from "#components";

const SUserCard = styled(Card)`
  cursor: pointer;
  transition: default;
  width: 100%;
  height: 100%;

  ${breakpoints({
    lg: css`
      width: 265px;
      :hover {
        transform: scale(1.1);
      }
    `,
  })}
`;

const SLabel = styled.span`
  font-weight: bold;
  margin-right: xs;
  text-transform: capitalize;
`;

const Property = ({ label, children }) => (
  <div>
    <SLabel>{`${label}:`}</SLabel>
    {children}
  </div>
);

Property.propTypes = {
  label: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.node,
  ]).isRequired,
};

const Ghost = styled.div`
  width: 100%;
  height: 100%;
  background-color: bg;
`;

const UserCard = ({
  id,

  connectedUsers,
  description,
  image,
  age,
  name,
  surname,
}) => {
  const fullName = `${name} ${surname}`;
  const [ref, inView] = useInView({
    rootMargin: "2000px",
  });

  const { toggle } = useModal(MODALS.user);

  const dispatch = useDispatch();

  const setSelectedUser = useCallback(() => {
    dispatch(actions.creators.user.set(id));
  }, [dispatch, id]);

  const editUser = () => {
    batch(() => {
      toggle();
      setSelectedUser();
    });
  };

  const ellipsizedDescription = ellipsize(52, description);
  return (
    <div ref={ref}>
      {inView ? (
        <SUserCard onClick={editUser}>
          <Box
            marginBottom="sm"
            display="grid"
            gridTemplateColumns="auto 1fr"
            gridGap="sm"
            alignItems="center"
          >
            <Avatar name={fullName} image={image} />
            <Box
              height="100%"
              display="flex"
              flexDirection="column"
              justifyContent="space-around"
            >
              <Property label="name">{name}</Property>
              <Property label="surname">{surname}</Property>
            </Box>
          </Box>
          <Box
            display="grid"
            gridTemplateColumns="repeat(2, auto)"
            gridGap="sm"
            marginBottom="sm"
          >
            <Property label="age">{age}</Property>
            <Property label="c.users">{connectedUsers}</Property>
          </Box>
          <Property label="description">{ellipsizedDescription}</Property>
        </SUserCard>
      ) : (
        <Ghost />
      )}
    </div>
  );
};

UserCard.defaultProps = {
  image: null,
};

UserCard.propTypes = {
  id: PropTypes.number.isRequired,
  connectedUsers: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string,
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  surname: PropTypes.string.isRequired,
};

export default UserCard;
