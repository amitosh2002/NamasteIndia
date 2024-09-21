import React, { useContext, useState, useEffect } from "react";
import CircularCard from "./CircularCard";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { useProductContext } from "../Context/Product_context";
const WildCenturies = () => {
  const data = useProductContext();
  //   console.log(centuries);
  const [centuries, setCenturies] = useState(data);
  useEffect(() => {
    const updatedItems = [...data].filter((currELe) => {
      return currELe.category === "centuries";
    });
    setCenturies(updatedItems);
  }, []);
  return (
    <Wrapper>
      <div className="cardBody" style={{ margin: "25px" }}>
        {centuries.map((wild, key) => {
          const { id, name, image, location } = wild;
          return (
            <div>
              <NavLink to={`/detail/${id}`}>
                <CircularCard
                  name={name}
                  image={image}
                  id={id}
                  loc={location}
                  style={{ margin: "25px" }}
                />
                ;
              </NavLink>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  .cardBody {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
`;
export default WildCenturies;
