import React, { useContext } from "react";
// import data from "../Data/Data";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import SingleProduct from "./SingleProduct";
import { ProductContext } from "../Context/Product_context";
const ListView = ({ items }) => {
  const data = useContext(ProductContext);
  return (
    <Wrapper>
      <div className="container">
        {items.map((place, id2) => {
          const { name, image, time, id } = place;
          return (
            <div className="" key={id2}>
              <div className="card" key={id2}>
                <img src={image} alt="" />
                <div className="info">
                  <ul>
                    <li>
                      <h3>{name}</h3>
                    </li>
                    <li>{time}</li>
                  </ul>
                  <NavLink to={`/detail/${id}`}>
                    <button
                      href="#"
                      className="button"
                      style={{ color: " #f8f6fa" }}
                    >
                      <span className="button__icon-wrapper">
                        <svg
                          viewBox="0 0 14 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="button__icon-svg"
                          width="10"
                        >
                          <path
                            d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                            fill="currentColor"
                          ></path>
                        </svg>

                        <svg
                          viewBox="0 0 14 15"
                          fill="none"
                          width="10"
                          xmlns="http://www.w3.org/2000/svg"
                          className="button__icon-svg button__icon-svg--copy"
                        >
                          <path
                            d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </span>
                      Explore
                    </button>
                  </NavLink>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* From Uiverse.io by Creatlydev */
  .button {
    line-height: 1;
    text-decoration: none;
    display: inline-flex;
    border: none;
    cursor: pointer;
    align-items: center;
    gap: 0.75rem;
    background-color: #ff9933;

    color: #f5f3f3;
    border-radius: 10rem;
    font-weight: 600;
    padding: 0.75rem 1.5rem;
    padding-left: 20px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    transition: background-color 0.3s;
  }

  .button__icon-wrapper {
    flex-shrink: 0;
    width: 25px;
    height: 25px;
    position: relative;
    color: #fbfafc;
    background-color: #ff9933;
    border-radius: 50%;
    display: grid;
    place-items: center;
    overflow: hidden;
  }

  .button:hover {
    background-color: #006600;
  }

  .button:hover .button__icon-wrapper {
    color: #f7f9f7;
  }

  .button__icon-svg--copy {
    position: absolute;
    transform: translate(-150%, 150%);
  }

  .button:hover .button__icon-svg:first-child {
    transition: transform 0.3s ease-in-out;
    transform: translate(150%, -150%);
  }

  .button:hover .button__icon-svg--copy {
    transition: transform 0.3s ease-in-out 0.1s;
    transform: translate(0);
  }

  /* ----------------------------------btn */
  .container {
    display: flex;
    flex-direction: column;
    position: relative;
    left: 0;
    width: 300%;
  }
  .card {
    display: flex;
    flex-direction: row;
    /* justify-content: space-bet; */
    width: 70%;
    /* background-color: #edf2f4; */
    /* background-color: #cbf3f0d5; */
    background-color: rgba(46, 196, 181, 0.682);
    border-radius: 20px;
    margin-bottom: 12px;
  }
  img {
    height: 185px;
    width: 250px;
  }
  .info {
    position: relative;
    margin-left: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* align-items: end; */
    left: 20%;
  }
`;
export default ListView;
