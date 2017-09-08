import React from "react";
import { shallow } from "enzyme";
import Search from "../Search";
import ShowCard from "../ShowCard";
import preload from "../../data.json";

describe("Search", () => {
  test("search renders", () => {
    const component = shallow(<Search />);
    expect(component).toMatchSnapshot();
  });

  test("search should render correct number of shows", () => {
    const component = shallow(<Search />);
    expect(component.find(ShowCard).length).toEqual(15);
  });

  test("should render two shows given term 'black'", () => {
    const component = shallow(<Search />);
    const searchTerm = "black";

    component
      .find("input")
      .simulate("change", { target: { value: searchTerm } });

    expect(component.find(ShowCard).length).toEqual(2);
  });
});
