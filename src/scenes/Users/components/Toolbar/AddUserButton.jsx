import { useUp } from "@xstyled/styled-components";
import React, { useCallback } from "react";
import { PersonAdd } from "styled-icons/material";
import { useDispatch, batch } from "react-redux";
import { MODALS } from "#constants";
import { Button, Modal, useModal } from "#components";
import { actions } from "#store";

import UserModal from "./UserModal";

const AddUserButton = () => {
  const dispatch = useDispatch();
  const isDektop = useUp("md");
  const { toggle } = useModal(MODALS.user);

  const openAddUserModal = useCallback(() => {
    batch(() => {
      toggle();
      dispatch(actions.creators.user.set(null));
    });
  });
  return (
    <>
      <Button onClick={openAddUserModal}>
        <PersonAdd />
        {isDektop && "Add User"}
      </Button>
      <Modal id={MODALS.user}>
        <UserModal />
      </Modal>
    </>
  );
};

export default AddUserButton;
