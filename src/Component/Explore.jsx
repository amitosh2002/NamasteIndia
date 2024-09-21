import React, { useContext, useState } from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import Sort from "./Sort";
import ViewButtons from "./ViewButtons";
import { ProductContext, useProductContext } from "../Context/Product_context";

import expbg from "../picture/explore.png";
import { FilterContext, useFilterContext } from "../Context/Filter_context";
import GridView from "./GridView";
import ProductList from "./ProductList";
import Categories from "./Exotic";

const Explore = () => {
  const data = useProductContext();
  // const { updateFilterValue, search, setSearchValue } = useFilterContext();
  // const updateFilterValue = useContext(FilterContext);
  const [items, setItems] = useState(data);

  //======================Set categories for sorting===================
  const filterItems = (category) => {
    if (category != "All") {
      const updatedItems = data.filter((currELe) => {
        return currELe.category === category;
      });
      setItems(updatedItems);
      // console.log(updatedItems);
    } else {
      setItems([...data]);
    }
  };
  // ===========================Set location for sorting===============
  const filterLocation = (location) => {
    if (location != "All") {
      const updatedLoc = data.filter((currELe) => {
        return currELe.location === location;
      });
      setItems(updatedLoc);
    } else {
      setItems([...data]);
    }
  };

  const allCategories = [
    "All",
    ...new Set(
      data.map((currELe) => {
        return currELe.category;
      })
    ),
  ];
  const allLocation = [
    "All",
    ...new Set(
      data.map((currELe) => {
        return currELe.location;
      })
    ),
    ,
  ];

  // ****************************************************************search finctionaliy implement *************************************************************************

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    const newSearchTerm = event.target.value;
    setSearchTerm(newSearchTerm);

    const filteredResults = [...data].filter((item) =>
      item.name.toLowerCase().includes(newSearchTerm.toLowerCase())
    );
    setItems(filteredResults);
  };

  // ****************************************************************search finctionaliy implement *************************************************************************
  //**************IMPLEMENT SORTING IN ALPHABETIC ORDER******************************************** */
  const sortData = () => {
    const sortedData = [...items].sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      } else if (a.name > b.name) {
        return 1;
      } else {
        return 0;
      }
    });

    setItems(sortedData);
  };
  //***************************************END SORTING IN ALPHABETIC ORDER*********************************** */
  return (
    <Wrapper>
      {/* <div
        className={grid_View ? "product-view-container " : "product_view_list "}
      > */}
      <div className="product-view-container ">
        <div className="sort-view" style={{ width: "10px" }}>
          <Sort
            allCategories={allCategories}
            items={items}
            filterItems={filterItems}
            searchTerm={searchTerm}
            handleSearchChange={handleSearchChange}
            allLocation={allLocation}
            filterLocation={filterLocation}
            sortData={sortData}
          />
        </div>
        <div className="product-view">
          <ViewButtons />

          <ProductList items={items} />
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  .sort-view {
    position: relative;
    width: 60px;
  }
  .product-view-container {
    /* display: flex;
    flex-direction: row;
    flex-wrap: wrap; */
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    /* justify-content: space-between; */
    gap: 23.3rem;
    /* flex-direction: row; */
  }
  .product_view_list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }

  .container-full {
    display: flex;
    flex-direction: row;
    /* justify-content: center; */
    /* align-items: center; */
    background-image: url(${expbg});
    background-size: contain;
    background-repeat: no-repeats;
    /* position: relative; */
    background-position: center;
  }
  /* .product-view {
    width: 100%;
  } */
`;

export default Explore;
