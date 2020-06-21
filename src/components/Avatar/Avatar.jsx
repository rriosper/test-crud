import React, { useMemo } from "react";
import { path } from "ramda";

import { SAvatar } from "./styles";

/**
 * Get 2 initial letters from a name
 *
 * @param {String} name - Name to extract the initials.
 */
export const getInitials = (name = "") => {
  if (!name || typeof name !== "string") {
    return "";
  }

  const splitedName = name.trim().split(" ");
  let output = null;

  if (splitedName.length > 1) {
    output = `${splitedName[0][0]}${splitedName[splitedName.length - 1][0]}`;
  } else {
    output = path([0, 0], splitedName);
  }
  return output.toUpperCase();
};

const Avatar = ({ name, image }) => {
  const initials = useMemo(() => getInitials(name), [name]);
  return (
    <SAvatar>{image ? <img alt="avatar" src={image} /> : initials}</SAvatar>
  );
};

Avatar.defaultProps = {
  name: "o o",
};

export default Avatar;
