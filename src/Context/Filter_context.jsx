import { createContext, useContext, useState } from "react";
import { ProductContext, useProductContext } from "./Product_context";
import { useReducer } from "react";
export const FilterContext = createContext();
// import filterReducer from "../Reducer/Filter_reducer";
import reducer from "../Reducer/Filter_reducer";
export const FilterProvider = ({ children }) => {
  const data = useProductContext();
  const initialState = {
    grid_View: true,
    filters: {
      text: "",
      items: [...data],
      allCategories: [],
      filteredItems: [],
    },
  };
  const setListView = () => {
    return dispatch({ type: "SET_LIST_VIEW" });
  };
  const setGridView = () => {
    return dispatch({ type: "SET_GRID_VIEW" });
  };
  //-- search function
  const updateFilterValue = (event) => {
    return dispatch({
      type: "UPDATE_FILTERS_VALUE",
      payload: event.target.value,
    });
  };

  // const filterItems = (category) => {
  //   dispatch({ type: "FILTER_ITEMS", payload: category });
  // };

  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <FilterContext.Provider
      value={{
        ...state,
        setGridView,
        setListView,
        updateFilterValue,
      }}
      // value={initialState}
    >
      {children}
    </FilterContext.Provider>
  );
};
export const useFilterContext = () => {
  return useContext(FilterContext);
};

/*



JavaScript
import React, { useState } from 'react';

function MyComponent() {
  const [data, setData] = useState([
    { id: 1, name: 'Banana' },
    { id: 2, name: 'Apple' },
    { id: 3, name: 'Orange' },
  ]);

  const sortDataAlphabeticallyByName = (data) => {
    return data.sort((a, b) => {
      const nameA = a.name.toUpperCase();
      const nameB = b.name.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;   

    });
  };

  const handleSort = () => {
    const sortedData = sortDataAlphabeticallyByName(data);
    setData(sortedData);
  };

  return (
    <div>
      <button onClick={handleSort}>Sort Alphabetically by Name</button>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default MyComponent;







*/
