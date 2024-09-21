import React from "react";

import { useState } from "react";
import styled from "styled-components";
import { BsGrid1X2Fill } from "react-icons/bs";
import { FaThList } from "react-icons/fa";
import ProductList from "./ProductList";
import Explore from "./Explore";
import { useFilterContext } from "../Context/Filter_context";
const ViewButtons = () => {
  const { setGridView, setListView, grid_View } = useFilterContext();
  return (
    <Wrapper>
      <div className="container">
        <div className="view">
          <div
            className={grid_View ? "active grid-view" : "grid-view"}
            onClick={setGridView}
          >
            <BsGrid1X2Fill
              size={18}
              style={{
                margin: "5px",
                // backgroundColor: "#2ec4b5f4",
                padding: "4.8px",
              }}
            />
          </div>
          <div
            className={grid_View ? " grid-view" : " active grid-view"}
            onClick={setListView}
          >
            <FaThList
              size={18}
              style={{
                margin: "5px",
                padding: "4.8px",
              }}
            />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  /*  */
  .view {
    display: flex;
    flex-direction: row;
    /* justify-content: end; */
    right: 0;
  }
  .grid-view {
    margin: 5px;
    padding: 4.8px;
    display: flex;
    align-items: center;
  }
  .list-view {
    margin: 5px;
    padding: 3.8px;
    display: flex;
    align-items: center;
  }
  .active {
    background-color: #2ec4b5f4;
    height: auto;
  }
`;
export default ViewButtons;
