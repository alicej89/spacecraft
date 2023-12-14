import React from "react";
import { render, screen } from "@testing-library/react-native";

import { CardItem } from "./CardItem";

describe("CardItem", () => {
  it("renders correctly", () => {
    render(<CardItem title={""} crew={""} model={""} hyperdrive={""} cost={""} />);
    screen.debug();
  });
});
