import React from "react";
import Card from "./Card";
import { shallow, mount, render } from "enzyme";
import "../setupTests";

it("expect to render Card component", () => {
  expect(shallow(<Card />).debug()).toMatchSnapshot();
});
