import PropTypes from "prop-types";
import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import { useDispatch, useSelector } from "react-redux";

import { actions, selectors } from "#store";
import { SDialog, SDialogBackdrop } from "./styles";
import useModal from "./useModal";

const Modal = ({ id, children }) => {
  const { set } = useModal(id);
  const data = useSelector(selectors.modals.byId(id));
  const dispatch = useDispatch();

  useEffect(() => {
    if (!data) {
      dispatch(
        actions.creators.modals.add({
          id,
          active: false,
        })
      );
    }
  });

  if (!data) {
    return null;
  }

  if (data.active) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  return createPortal(
    data.active ? (
      <SDialogBackdrop onClick={() => set(false)}>
        <SDialog onClick={(e) => e.stopPropagation()}>{children}</SDialog>
      </SDialogBackdrop>
    ) : null,
    document.querySelector("div#modals")
  );
};

Modal.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Modal;
