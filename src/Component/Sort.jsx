import React, { useContext, useState } from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import GridView from "./GridView";
import { FilterContext, useFilterContext } from "../Context/Filter_context";
import { ProductContext } from "../Context/Product_context";

const Sort = ({
  filterItems,
  allCategories,
  items,
  handleSearchChange,
  searchTerm,
  allLocation,
  filterLocation,
  sortData,
}) => {
  const { state, updateFilterValue, text } = useContext(FilterContext);
  const data = useContext(ProductContext);

  // ------for radio button state for change colour----------------------
  const [checkedValue, setCheckedValue] = useState(null);

  const handleRadioChange = (event) => {
    setCheckedValue(event.target.value);
  };

  // --------------------radio button end---------------
  return (
    <Wrapper>
      <div className="container-1">
        <div className="page-view">
          <div className="category">
            <div
              className="search-container"
              style={{ marginTop: "55px", marginBottom: "10px" }}
            >
              <label htmlFor="input" style={{ margin: "10px" }}>
                Search:
              </label>

              <input
                className="input"
                placeholder="SEARCH"
                type="text"
                value={searchTerm}
                onChange={handleSearchChange}
              />
            </div>
            <label htmlFor="input">Category</label>
            {allCategories.map((currELe, id) => {
              return (
                <>
                  <div className="container">
                    <form key={currELe}>
                      <label>
                        <input
                          type="radio"
                          name="radio"
                          value={currELe}
                          checked={checkedValue === currELe}
                          onChange={handleRadioChange}
                          onClick={() => filterItems(currELe)}
                          key={id}
                        />
                        <span>{currELe}</span>
                      </label>
                    </form>
                  </div>
                </>
              );
            })}
            <label htmlFor="Loc"> Locations:</label>

            <div className="loc">
              {allLocation.map((currELe) => {
                return (
                  <button
                    className="locat"
                    onClick={() => {
                      filterLocation(currELe);
                    }}
                    style={{
                      padding: "8px",
                      margin: "5px",
                      borderRadius: "10px",
                      backgroundColor: "white",
                    }}
                  >
                    {currELe}
                  </button>
                );
              })}
            </div>
            <label htmlFor="alphabetic"> Sort: A-Z</label>
            <button
              className="alphabetic"
              style={{
                padding: "8px",
                margin: "5px",
                borderRadius: "10px",
                backgroundColor: "white",
              }}
              onClick={sortData}
            >
              A-Z
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  .locat:hover,
  .alphabetic:hover {
    border: 2px solid #4a9dec;
    box-shadow: 0px 0px 0px 7px rgb(74, 157, 236, 20%);
    background-color: white;
  }
  /* From Uiverse.io by shadowmurphy */
  .input {
    border: 2px solid transparent;
    width: 15em;
    height: 2.5em;
    padding-left: 0.8em;
    outline: none;
    overflow: hidden;
    background-color: #f3f3f3;
    border-radius: 10px;
    transition: all 0.5s;
  }

  .input:hover,
  .input:focus {
    border: 2px solid #4a9dec;
    box-shadow: 0px 0px 0px 7px rgb(74, 157, 236, 20%);
    background-color: white;
  }

  /* From Uiverse.io by Pradeepsaranbishnoi */
  .container form {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
  }

  .container label {
    display: flex;
    cursor: pointer;
    font-weight: 500;
    position: relative;
    overflow: hidden;
    margin-bottom: 0.375em;
  }

  .container label input {
    position: absolute;
    left: -9999px;
  }

  .container label input:checked + span {
    background-color: #414181;
    color: white;
  }

  .container label input:checked + span:before {
    box-shadow: inset 0 0 0 0.4375em #00005c;
  }

  .container label span {
    display: flex;
    align-items: center;
    padding: 0.375em 0.75em 0.375em 0.375em;
    border-radius: 99em;
    transition: 0.25s ease;
    color: #414181;
  }

  .container label span:hover {
    background-color: #d6d6e5;
  }

  .container label span:before {
    display: flex;
    flex-shrink: 0;
    content: "";
    background-color: #20d3cd;
    width: 1.5em;
    height: 1.5em;
    border-radius: 50%;
    margin-right: 0.375em;
    transition: 0.25s ease;
    box-shadow: inset 0 0 0 0.125em #00005c;
  }

  .container-1 {
    width: 320px;
    /* background-color: grey; */
    border-top-right-radius: 30px;
    border-bottom-left-radius: 45px;
    display: flex; /* Set the container to flexbox layout */
    flex-direction: column; /* Align items vertically */
    align-items: center;
    height: 100vh;
    /* border: 1px solid black; */
  }
  .category {
    display: flex;
    flex-direction: column;
    gap: 15px;
    /* border: 1px solid black; */
    padding: 35px;

    /* align-content: center; */
    /* flex-wrap: wrap; */
  }
  .page-view {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    /* align-items: center; */
    margin: 0 70px 70px;
    gap: 150px;
    align-items: flex-start;
    height: 100vh;
  }

  .products {
    display: inline-block;
    width: 100%;
    height: auto;
  }
`;
export default Sort;
