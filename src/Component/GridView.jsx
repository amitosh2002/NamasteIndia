import React from "react";
// import data from "../Data/Data";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { ProductContext, useProductContext } from "../Context/Product_context";
import Card from "./Card";
import { useFilterContext } from "../Context/Filter_context";
import reducer from "../Reducer/Filter_reducer";
const GridView = ({ items }) => {
  const data = useProductContext();

  return (
    <Wrapper>
      <div className="container-card">
        {/* {filteredData.map((place, id) => { */}
        {items.map((place) => {
          const { name, image, description, time, reach, ideal, category, id } =
            place;
          return (
            <div className="container">
              <Card
                id={id}
                name={name}
                image={image}
                description={description}
                category={category}
                key={name}
              />
            </div>
          );
        })}
        {/* {
          data.filter = data.filter || {
        
          };  
        } */}
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .container {
    /* display: flex;
    flex: 0 0 33.33%;
    flex-wrap: wrap;
    margin-top: 10px; */
    /* max-width: 1224px; */
    margin: 0 auto;
  }
  .container-card {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem 3rem;
    grid-template-rows: masonry;
  }
`;
export default GridView;
