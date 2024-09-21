import React from "react";
import { useParams } from "react-router-dom";
import data from "../Data/Data";
import styled from "styled-components";
import { CiTimer } from "react-icons/ci";
import { CiCalendarDate } from "react-icons/ci";
import { FaChildReaching } from "react-icons/fa6";
import PageNavigation from "./PageNavigation";
const SingleProduct = (props) => {
  const params = useParams();

  const pid = params.id;
  const productDetail = data.find((p) => p.id == pid);

  const { name, description, ideal, image, reach, time } = productDetail;
  return (
    <Wrapper>
      <PageNavigation name={name} />
      <div className="top-view" style={{ color: "black" }}>
        <img className="product-image" src={image} alt="" />

        <div className="ict">
          <h1>Name: {name}</h1>
          <hr style={{ color: "black", backgroundColor: "black" }} />
          <h2>Description:</h2>
          {description}
        </div>
      </div>

      <div className="bottom-view">
        <div className="bottom-content-icon">
          <CiTimer size={40} color="white" width={10} />
        </div>
        <div className="bottom-content-icon">
          <FaChildReaching size={40} color="white" width={10} />
        </div>
        <div className="bottom-content-icon">
          <CiCalendarDate size={40} color="white" width={10} />
        </div>
      </div>
      <div className="bottom-view">
        <div className="bottom-content">
          <span>{ideal}</span>
        </div>
        <div className="bottom-content">
          <span>{reach}</span>
        </div>
        <div className="bottom-content">
          <span>{time}</span>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .top-view {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    /* height: 550px; */
    justify-content: space-between;
    align-items: center;
    /* margin-top: 5px; */
    margin-left: 75px;
    margin-right: 75px;
    color: white;
  }
  .bottom-view {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    /* gap: 2rem;
    
    width: 600px; */
    color: white;
  }
  .bottom-view-icon {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    /* gap: 2rem;
    width: 600px; */
  }
  .ict {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    /* justify-content: center; */
    width: 600px;
  }
  .product-image {
    width: 550px;
    height: 550px;
    border-radius: 25px;
    object-fit: contain;
  }
  .bottom-content {
    display: flex;
    justify-content: center;
    align-items: center;
    /* gap: 2.5rem; */
    /* width: 450px; */
    width: 100%;
    height: 150px;
    /* margin: 2rem; */
    background-color: #373232;
    flex-wrap: wrap;
  }
  .bottom-content-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    /* gap: 2.5rem; */
    /* width: 450px; */
    width: 100%;

    height: 95px;
    /* margin: 2rem; */
    background-color: #373232;
  }
`;

export default SingleProduct;
