import React from "react";
import CardList from "./CardList";
import { shallow, mount, render } from "enzyme";
import "../setupTests";

it("expect to render Card component", () => {
  const mockRobots = [
    {
      id: 1,
      name: "Jon Snow",
      username: "JonSnow",
      email: "jon@gmail.com",
    },
  ];
  expect(shallow(<CardList robots={mockRobots} />).debug()).toMatchSnapshot();
});
