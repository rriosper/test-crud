import { useCallback } from "react";
import { useDispatch } from "react-redux";

import { actions } from "#store";

const useModal = (id) => {
  const dispatch = useDispatch();

  const toggle = useCallback(() => {
    dispatch(actions.creators.modal.toggle(id));
  }, [dispatch, id]);

  const set = useCallback(
    (active) => {
      dispatch(actions.creators.modal.set({ id, active }));
    },
    [dispatch, id]
  );

  return {
    toggle,
    set,
  };
};

export default useModal;
