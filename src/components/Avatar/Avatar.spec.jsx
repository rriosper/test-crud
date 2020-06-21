import React from "react";
import { render } from "@testing-library/react";

import Avatar, { getInitials } from "./Avatar";

// TODO dive deeper in test options as Color, ImgUrl ect.
describe("Avatar", () => {
  test("getInitials", () => {
    expect(getInitials()).toBe("");
    expect(getInitials(null)).toBe("");
    expect(getInitials(false)).toBe("");
    expect(getInitials(true)).toBe("");
    expect(getInitials(0)).toBe("");
    expect(getInitials(1)).toBe("");
    expect(getInitials([])).toBe("");
    expect(getInitials({})).toBe("");
    expect(getInitials("")).toBe("");
    expect(getInitials("Roman")).toBe("R");
    expect(getInitials("Roman test")).toBe("RT");
    expect(getInitials("Roman du test")).toBe("RT");
  });

  describe("Avatar", () => {
    test("Initials", () => {
      const { getByText } = render(<Avatar name="John Smith" />);
      expect(getByText("JS")).toBeInTheDocument();
    });

    test("Image", () => {
      const { getByAltText } = render(<Avatar image="image-avatar" />);
      expect(getByAltText("avatar")).toBeInTheDocument();
    });
  });
});
