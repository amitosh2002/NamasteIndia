import { createContext, useContext } from "react";
import data from "../Data/Data";
export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const myName = "Amitosh";

  // console.log(children);

  return (
    <ProductContext.Provider value={data}>{children}</ProductContext.Provider>
  );
};

export const useProductContext = () => {
  const context = useContext(ProductContext);
  return context;
};
