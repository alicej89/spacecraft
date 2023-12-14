import React from "react";
import { render, screen } from "@testing-library/react-native";

import { Header } from "./Header";

describe("Header", () => {
  it("renders correctly", () => {
    render(<Header titleLabel={"Hello"} />);
    screen.getByText("Hello for React Native");
  });
});
