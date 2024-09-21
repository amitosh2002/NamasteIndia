import React from "react";
import GridView from "./GridView";
import ListView from "./ListView";
import styled from "styled-components";
import { useFilterContext } from "../Context/Filter_context";
const ProductList = ({ items }) => {
  const { grid_View } = useFilterContext();
  // console.log(items);

  if (grid_View === true) {
    return <GridView items={items} />;
  }

  if (grid_View === false) {
    return <ListView items={items} />;
  }
};
const Wrapper = styled.section``;
export default ProductList;
