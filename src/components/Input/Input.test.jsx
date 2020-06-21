import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";

import Input from "./Input";

afterEach(cleanup);

describe("Input", () => {
  test("Default type", () => {
    let value = "";
    const onChange = jest.fn(({ target: { value: newValue } }) => {
      value = newValue;
    });
    const { getByPlaceholderText, asFragment } = render(
      <Input placeholder="Placehoder text" onChange={onChange} value={value} />
    );

    expect(onChange).toHaveBeenCalledTimes(0);
    fireEvent.change(getByPlaceholderText("Placehoder text"), {
      target: {
        value: "Updated text!",
      },
    });
    expect(onChange).toHaveBeenCalledTimes(1);

    expect(value).toBe("Updated text!");
    expect(asFragment()).toMatchSnapshot();
  });
});
