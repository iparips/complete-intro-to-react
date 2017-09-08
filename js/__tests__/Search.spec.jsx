import React from "react";
import renderer from "react-test-renderer";
import Search from "../Search";

test("Search renders", () => {
  const component = renderer.create(<Search />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
