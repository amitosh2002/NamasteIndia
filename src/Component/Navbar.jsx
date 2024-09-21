import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
// import logo from "../picture/india_logo.png";
import logo from "../picture/namaste_circular.png";
const Navbar = () => {
  return (
    <Wrapper>
      <div className="nav">
        <ul>
          <li>
            <NavLink
              to="/home"
              style={{ textDecoration: "none", color: "#ffffff" }}
            >
              <img
                src="https://png.pngtree.com/png-vector/20210924/ourlarge/pngtree-namaste-lettering-png-image_3954961.png"
                alt=""
                height={50}
                width={70}
              />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/home"
              style={{ textDecoration: "none", color: "#ffffff" }}
            >
              <span>Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/explore"
              style={{ textDecoration: "none", color: "#fdfdfd" }}
            >
              <span>Explore</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/exotic"
              style={{ textDecoration: "none", color: "#fdfdfd" }}
            >
              <span>Exotic</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/centuries"
              style={{ textDecoration: "none", color: "#fdfdfd" }}
            >
              Wildlife Centuries
            </NavLink>
          </li>
        </ul>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .nav {
    /* background-image: url("../picture/namaste_1.png");
    object-fit: contain; */
    background-color: #0d0c0cc8;
    color: white;
    position: sticky;
    top: 0;
    /* height: 150px; */
  }
  ul {
    display: flex;
    flex-direction: column-reverses;
    text-decoration: none;
    flex-wrap: wrap;
    /* background-color: black; */
    color: #fffafa;
  }
  li {
    display: flex;
    align-items: center;
    text-decoration: none;
    margin: 1.2rem;
    padding: 3px;
    gap: 2;
    border-radius: 5px;
    list-style-type: none;
    color: #fefbfb;
    font-size: larger;
    font-weight: 70;
  }
  li:hover {
    background-color: #2ec4b5ae;
    color: #f9f7f7;
    transform: scale(1.3);
  }
`;

export default Navbar;
