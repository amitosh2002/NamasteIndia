import { useState } from "react";

const filterReducer = (state, action) => {
  switch (action.type) {
    case "SET_GRID_VIEW":
      return {
        ...state,
        grid_View: true,
      };

    case "SET_LIST_VIEW":
      return {
        ...state,
        grid_View: false,
      };
    case "UPDATE_FILTERS_VALUE":
      return {
        ...state,
        text: action.payload,
        items: initialState.items.filter((item) =>
          item.toLowerCase().includes(action.payload.toLowerCase())
        ),
      };

    // // const [search, setSearchValue] = useState(" ");
    // // setSearchValue(name);
    // const [filterVal, setFilterVal] = useState(data);
    // setFilterVal(name);
    // // console.log(setSearchValue(name));
    // console.log(filterVal);

    // let filterValue = filterVal.filter((currEle) => {
    //   return currEle.name.toLowerCase().includes(data);
    // });
    // return {
    //   ...state,
    //   // search,
    //   filterValue,
    // };

    case "SET_DATA":
      return {
        ...state,
        items: action.payload,
        allCategories: [
          ...new Set(action.payload.map((item) => item.category)),
        ],
        filteredItems: action.payload,
      };
    case "FILTER_ITEMS":
      const filteredItems = state.items.filter((item) =>
        action.payload === "all" ? true : item.category === action.payload
      );
      console.log(filteredItems);
      return {
        ...state,
        filteredItems,
      };
    case "FILTERS_VALUE":
    // const [items, setItems] = useState(data);
    // console.log(items);

    // const [allCat, setAllCat] = useState(data);
    // const updatedItems = data.filter((currELe) => {
    //   if (category === "all") {
    //     setAllCat(data);
    //   }
    //   return currELe.category === category;
    // });
    // setItems(updatedItems);
    // // console.log(updatedItems);

    // const allCategories = [
    //   ...new Set(
    //     data.map((currELe) => {
    //       return currELe.category;
    //     })
    //   ),
    //   ,
    //   "all",
    // ];
    // return {
    //   ...state,

    //   allCategories,
    //   items,
    // };
    default:
      return state;
  }
};

export default filterReducer;
