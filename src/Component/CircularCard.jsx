import React from "react";
import styled from "styled-components";
import test from "../picture/taxi-1.png";
const CircularCard = ({ name, image, id, loc }) => {
  //   console.log(name);

  return (
    <Wrapper>
      {/* <div className="circulsr">
        <div className="img">
          <img src={image} alt="" />
        </div>
        <div className="name">
          <h2 className="h2-name">{name}</h2>
        </div>
      </div> */}
      <div className="flip-card">
        <div className="flip-card-inner" key={id}>
          <div className="flip-card-front">
            <img
              src={image}
              alt="Avatar"
              style={{
                width: "300px",
                height: "200px",
                background: "contain",
                objectFit: "fill",
              }}
            />
          </div>
          <div className="flip-card-back">
            <h1>{name}</h1>
            <p>{loc}</p>
            <p>We love that guy</p>
          </div>
        </div>
      </div>
      {/* ----------------------uiverse------------------- */}
    </Wrapper>
  );
};

const Wrapper = styled.div`


/* From Uiverse.io by ElSombrero2 */ 
/* From Uiverse.io by Smit-Prajapati */ 
.card {
  width: 230px;
  border-radius: 20px;
  background: #1b233d;
  padding: 5px;
  overflow: hidden;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 20px 0px;
  transition: transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.card:hover {
  transform: scale(1.05);
}

.card .top-section {
  height: 150px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  background: linear-gradient(45deg, rgb(4, 159, 187) 0%, rgb(80, 246, 255) 100%);
  position: relative;
}

.card .top-section .border {
  border-bottom-right-radius: 10px;
  height: 30px;
  width: 130px;
  background: white;
  background: #0836cf;
  position: relative;
  transform: skew(-40deg);
  box-shadow: -10px -10px 0 0 #1b233d;
}

.card .top-section .border::before {
  content: "";
  position: absolute;
  width: 15px;
  height: 15px;
  top: 0;
  right: -15px;
  /* background: rgba(255, 255, 255, 0); */
  background-image: url(${test});
  border-top-left-radius: 10px;
  box-shadow: -5px -5px 0 2px #1b233d;
}

.card .top-section::before {
  content: "";
  position: absolute;
  top: 30px;
  left: 0;
  background: rgba(255, 255, 255, 0);
  height: 15px;
  width: 15px;
  border-top-left-radius: 15px;
  box-shadow: -5px -5px 0 2px #1b233d;
}

.card .top-section .icons {
  position: absolute;
  top: 0;
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: space-between;
}

.card .top-section .icons .logo {
  height: 100%;
  aspect-ratio: 1;
  padding: 7px 0 7px 15px;
}

.card .top-section .icons .logo .top-section {
  height: 100%;
}

.card .top-section .icons .social-media {
  height: 100%;
  padding: 8px 15px;
  display: flex;
  gap: 7px;
}

.card .top-section .icons .social-media .svg {
  height: 100%;
  fill: #1b233d;
}

.card .top-section .icons .social-media .svg:hover {
  fill: white;
}

.card .bottom-section {
  margin-top: 15px;
  padding: 10px 5px;
}

.card .bottom-section .title {
  display: block;
  font-size: 17px;
  font-weight: bolder;
  color: white;
  text-align: center;
  letter-spacing: 2px;
}

.card .bottom-section .row {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.card .bottom-section .row .item {
  flex: 30%;
  text-align: center;
  padding: 5px;
  color: rgba(170, 222, 243, 0.721);
}

.card .bottom-section .row .item .big-text {
  font-size: 12px;
  display: block;
}

.card .bottom-section .row .item .regular-text {
  font-size: 9px;
}

.card .bottom-section .row .item:nth-child(2) {
  border-left: 1px solid rgba(255, 255, 255, 0.126);
  border-right: 1px solid rgba(255, 255, 255, 0.126);
}








/* --------------------uiverse card --------- */
  /* The flip card container - set the width and height to whatever you want. We have added the border property to demonstrate that the flip itself goes out of the box on hover (remove perspective if you don't want the 3D effect */
  .flip-card {
    background-color: transparent;
    width: 300px;
    height: 200px;
    border: 1px solid #f1f1f1;
    perspective: 1000px; /* Remove this if you don't want the 3D effect */
    margin-bottom: 1.3rem;

  }

  /* This container is needed to position the front and back side */
  .flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
  }

  /* Do an horizontal flip when you move the mouse over the flip box container */
  .flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
  }

  /* Position the front and back side */
  .flip-card-front,
  .flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden; /* Safari */
    backface-visibility: hidden;
  }

  /* Style the front side (fallback if image is missing) */
  .flip-card-front {
    background-color: #bbb;
    color: black;
  }

  /* Style the back side */
  .flip-card-back {
    background-color: dodgerblue;
    color: white;
    transform: rotateY(180deg);
  }
  /* .circular {
    margin: 10px;
  }
  .name {
    position: absolute;
    z-index: 1;
    /* position: absolute; */
    left: 120;
  }
  .h2-name {
    /* position: absolute; */
    background-color: #45ab45;
    border-radius: 15px;
    left: 120;
    /* position: absolute; */
    top: 60%;
    left: 4%;
    /* transform: translate(-50%,   -50%); */
    color: #d2c8c8;
    font-size: 24px;
    text-align: center; */
  }
  /* .img {
    position: relative;
    width: 350px;
    height: 350px;
    background-image: url(${test});
    border-radius: 50%;
    border-color: #0a0ad2;
    margin: 20px;
  } */
`;
export default CircularCard;
