import React from "react";
import { shallow } from "enzyme";
import Search from "../Search";
import ShowCard from "../ShowCard";
import preload from "../../data.json";

describe("Search", () => {
  test("Search renders", () => {
    const component = shallow(<Search />);
    expect(component).toMatchSnapshot();
  });

  test("search should render correct number of shows", () => {
    const component = shallow(<Search />);
    expect(component.find(ShowCard).length).toEqual(preload.shows.length);
  });
});
