import React from "react";
import MainPage from "./MainPage";
import { shallow, mount, render } from "enzyme";
import { Provider } from "react-redux";
import "../setupTests";

let wrapper;
beforeEach(() => {
  const mockProps = {
    onRequestRobots: jest.fn(),
    robots: [],
    searchField: "",
    isPending: false,
  };
  wrapper = shallow(<MainPage />);
});

it("renders MainPage without crashing", () => {});

it("expect to render App component", () => {
  const mockStore = {
    robots: [],
    searchField: "",
  };
  expect(
    shallow(
      <Provider store={mockStore}>
        <MainPage />
      </Provider>
    ).toMatchSnapshot()
  );
});
