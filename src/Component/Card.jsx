import React from "react";
// import image from "../picture/Work.png";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
const Card = ({ id, image, name, description, category }) => {
  return (
    <Wrapper>
      <div className="card">
        <div className="card__corner"></div>
        <div className="card__img">
          <span className="card__span">{category}</span>
          <NavLink
            to={`/detail/${id}`}
            style={{ textDecoration: "none", color: "black" }}
          >
            <img
              src={image}
              alt=""
              style={{ width: "300px", height: "175px" }}
            />
          </NavLink>
        </div>
        <div className="card-int">
          <p className="card-int__title">{name}</p>
          <p className="excerpt">{description}</p>
          <NavLink to={`/detail/${id}`}>
            <button className="card-int__button">Show</button>
          </NavLink>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  /* From Uiverse.io by Rodrypaladin */
  .card {
    width: 300px;
    position: relative;
    background: rgb(255, 255, 255);
    padding: 20px;
  }

  .card::after {
    z-index: -1;
    content: "";
    position: absolute;
    width: 50%;
    height: 10px;
    bottom: 15px;
    right: 0;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.4);
    transform: rotate(5deg);
    transition: all 0.1s ease-in;
  }

  .card::before {
    z-index: -1;
    content: "";
    position: absolute;
    width: 50%;
    height: 10px;
    bottom: 15px;
    left: 0;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.4);
    transform: rotate(-5deg);
    transition: all 0.1s ease-in;
  }

  .card:hover:before,
  .card:hover:after {
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.6);
  }

  .card:hover:before {
    transform: rotate(-8deg);
  }

  .card:hover:after {
    transform: rotate(8deg);
  }

  .card__img {
    position: relative;
    background: #a62a00;
    background: linear-gradient(315deg, #ff7d7d, #a62a00);
    width: 300px;
    height: 175px;
  }

  .card__span {
    cursor: pointer;
    font-size: 11px;
    position: absolute;
    background-color: white;
    top: 10px;
    left: 10px;
    padding: 3px 7px;
    box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.2);
    transition: transform 0.1s ease-in;
    user-select: none;
  }

  .card__span:hover {
    transform: translateX(5px);
  }

  .card-int {
    padding: 20px 0 0 0;
  }

  .card-int__title {
    font-weight: bold;
    font-size: 1.2rem;
    font-family: Arial, Helvetica, sans-serif;
    margin-bottom: 10px;
  }

  .card-int__button {
    cursor: pointer;
    margin: 20px 0 0 0;
    padding: 7px 20px;
    width: 100%;
    background-color: rgb(255, 239, 238);
    border: none;
    color: black;
    position: relative;
    overflow: hidden;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0);
    transition: box-shadow 0.1s ease-in;
    user-select: none;
  }

  .card-int__button:active {
    box-shadow: 0px 0px 15px rgba(0, 119, 255, 0.5);
  }

  .card-int__button:hover::before {
    animation: effect_two 0.4s 1;
  }

  .card-int__button::before {
    content: "More for this article";
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    background: #a62a00;
    background: linear-gradient(315deg, #ff7d7d, #a62a00);
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    transform: translateX(-99%);
    z-index: 1;
    animation: effect_one 10s infinite;
  }

  .card-int__button:hover::before {
    transform: translateX(0%);
  }

  .excerpt {
    font-size: 14px;
  }

  @keyframes effect_one {
    0% {
      transform: translateX(-99%);
    }

    25% {
      transform: translateX(-90%);
    }

    50% {
      transform: translateX(-80%);
    }

    75% {
      transform: translateX(-95%);
    }

    100% {
      transform: translateX(-99%);
    }
  }

  @keyframes effect_two {
    to {
      transform: translateX(-1%);
    }

    from {
      transform: translateX(-99%);
    }
  }

  /* img {
    height: 270px;
    width: 270px;
    margin: 5px;
    border-top-right-radius: 30px;
  }
  .name {
    font-weight: 70px;
    font-size: large;
    font-style: italic;
    font-family: monospace;
    position: relative;
    margin: 30px;
    margin-bottom: 30px;
  }
  .card-view {
    background-color: grey;
    height: max-content;
    width: fit-content;
    border-top-right-radius: 30px;
    border-bottom-left-radius: 30px;
    margin: 5px;
  } */
`;
export default Card;
