import React, { useEffect } from "react";
import { useProductContext } from "../Context/Product_context";
import { useState } from "react";
import Card from "./Card";

const Exotic = () => {
  const data = useProductContext();
  const [ecoCat, setEcoCat] = useState(data);
  useEffect(() => {
    const updatedItems = [...data].filter((currELe) => {
      return currELe.category === "eco-tourism";
    });
    setEcoCat(updatedItems);
  }, []);

  // console.log(ecoCat);
  return (
    <div
      className="cardBody"
      style={{
        margin: "25px",
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      {ecoCat.map((currEle) => {
        const { name, category, location, id, description, image } = currEle;
        return (
          <Card
            name={name}
            category={category}
            description={description}
            id={id}
            image={image}
          />
        );
      })}
    </div>
  );
};

export default Exotic;
