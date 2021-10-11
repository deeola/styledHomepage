import React, { useState, useEffect } from "react";
import {
  HeaderLeft,
  HeaderRight,
  HeaderStyled,
  Logo,
  NavStyled,
  UnorderedList,
} from "./styled/Header.styled";

import { HeaderData } from "./HeaderData";

const Header = () => {
  let [backgroundChange, setBackgroundChange] = useState(0);
  let [isLoading, setisLoading] = useState(false);
  const [bgData, setbgData] = useState([]);

  useEffect(() => {
    fecthData();
  }, []);

  //fetch json data

  let [index, setIndex] = useState(1);

  //Next Image Function
  const next = () => {
    console.log(index);
    if (bgData.length !== undefined) {
      if (index < bgData.length - 1) {
        setIndex(index++);
      } else {
        setIndex(0);
      }
    }
  };

  const previous = () => {
    console.log(`index before: ${index}`);
    if (bgData.length !== 0) {
      if (index <= 0) {
        setIndex(bgData.length - 1);
      } else {
        setIndex(index--);
      }
    }
    console.log(`index after: ${index}`);
  };

  const fecthData = async () => {
    setisLoading(!isLoading);
    const res = await fetch("./data.json");
    const data = await res.json();
    setbgData(data);
    setisLoading(!isLoading);
  };

  return (
    <HeaderStyled>
      <HeaderLeft>
        <NavStyled>
          <Logo>room</Logo>
          <UnorderedList>
            <li>
              <p>home</p>
            </li>
            <li>
              <p>shop</p>
            </li>
            <li>
              <p>about</p>
            </li>
            <li>
              <p>contact</p>
            </li>
          </UnorderedList>
        </NavStyled>
      </HeaderLeft>
      <HeaderRight>
        <h1>hello</h1>
        <p>
          We Provide unmatched quality, comfort, and style for property owners
          across the country. Our experts combinee form and function in bringing
          your vision to life. Create a room in your own style with our
          collection and make your property a reflection of you and what you
          love.
        </p>
        <div>
          <button onClick={previous}>previous</button>
          <button onClick={next}>next</button>
        </div>
      </HeaderRight>
    </HeaderStyled>
  );
};

export default Header;
