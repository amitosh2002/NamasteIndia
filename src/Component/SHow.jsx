import React, { useState } from "react";
import data from "../Data/Data";
import styled from "styled-components";
import heroSectionImage from "../picture/hero-section-img.png";
import heartOfIndia from "../picture/heart-of-india.png";
import taxi from "../picture/taxi-1.png";
import namste from "../picture/namaste_painting.jpg";
import namste2 from "../picture/namaste_1.png";
import bg from "../picture/Home.png";
import { NavLink } from "react-router-dom";
import Card from "./Card";
const SHow = () => {
  const itemsPerPage = 4;
  const visibleItems = [...data].slice(0, itemsPerPage);
  return (
    <Wrapper>
      <div className="wrap">
        {/* --------------------------------------hero setion----------------------------------------- */}
        <div className="hero-section " style={{ backgroundImage: { bg } }}>
          <img className=" hero-section-img" src={heroSectionImage} alt="" />
          <div className="para">
            {/* <p>
              Pack your senses for a wild ride! India awaits with vibrant
              colors, aromatic spices,
              <br /> and the clanging rhythm of a bustling life. Embrace the
              unexpected, wander ancient temples,
              <br /> and get swept up in the warm hospitality. This adventure
              will leave its mark on your soul.
            </p> */}
          </div>
        </div>

        {/* --------------------------------------hero setion----------------------------------------- */}
        {/* -----------------------------------------------------card---------------------------------  */}
        <h2>Must Visit</h2>

        <div className="container">
          <div
            className="card-body"
            style={{ placeContent: "center", placeItems: "center" }}
          >
            {visibleItems.map((place, id) => {
              const { name, image } = place;
              return (
                <div className="gap" key={id}>
                  <div className="card ">
                    <NavLink to={`/detail/${id}`}>
                      <img className="img-card" src={image} alt="" />
                    </NavLink>
                    <ul>
                      <li>
                        <p>{name}</p>
                      </li>
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  p {
    word-break: break-all;
    margin: 10px;
    font-size: large;
    /* font-weight: 70; */
    font-family: "Sevillana", cursive;
    /* font-family: cursive; */
    font-weight: 400;
    font-style: normal;
  }
  .hero-section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 35px;
    margin-right: 35px;
    max-width: fit-content;
    max-height: fit-content;
  }
  .wrap {
    background-image: url(${bg});
    background-position: center;
    /* background-size: contain; */
    background-size: cover;

    background-repeat: no-repeat;
  }

  .hero-section-img {
    height: 400px;
    width: auto;
  }

  .carousel-inner {
    height: 350px;
    width: 650px;
  }
  #carouselExampleInterval {
    /* display: flex;
    align-items: center; */
    width: 650px;
    height: 350px;
  }
  .caresol {
    display: flex;
    justify-content: center;
  }

  .d-block {
    object-fit: cover;
    border-radius: 12px;
  }
  .container {
    display: flex;
    justify-content: center;
    /* margin-top: 15px; */
  }
  .card-body {
    display: flex;
    flex-direction: row;
    justify-content: center;
    /* gap: 0.5rem; */
    margin: 5rem;
    /* background-color: white; */
  }
  .gap {
    /* display: flex;
    justify-content: center; */
    margin: 1.8;
  }

  li {
    text-decoration: none;
    /* padding: 5px; */
    /* margin: 1.2rem; */
    /* gap: 2; */
    border-radius: 5px;
    list-style-type: none;
  }

  .card {
    /* height: 300px;
    width: 300px; */
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    background-color: #2ec4b51a;

    margin: 15px;
    /* position: relative; */
  }
  .card:hover {
    transform: scale(1.1);
    row-gap: 2rem;
    color: black;
  }

  .img-card {
    width: 88%;
    height: 91%;
    margin: 1.2rem;
    border-radius: 10px;
  }
`;

export default SHow;
