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

  //fetch json data

  const previous = () => {
    if (backgroundChange < 3) {
      setBackgroundChange(backgroundChange++);
    } else {
      setBackgroundChange(0);
    }

    console.log(backgroundChange);
  };

  const next = () => {
    if (backgroundChange <= 0) {
      setBackgroundChange(backgroundChange--);
    } else {
      setBackgroundChange(3);
    }
  };

  const fecthData = async () => {
    setisLoading(true);
    const res = await fetch("./data.json");
    const data = await res.json();
    setbgData(data);
    setisLoading(false);
  };

  useEffect(() => {
    setisLoading(true);
    fecthData();
    setisLoading(false);
  }, []);

  if (bgData.length !== 0) {
    console.log(bgData);
  }

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
        <h1>{!isLoading && bgData[0].title}</h1>
        <p>
          We Provide unmatched quality, comfort, and style for property owners
          across the country. Our experts combinee form and function in bringing
          your vision to life. Create a room in your own style with our
          collection and make your property a reflection of you and what you
          love.
        </p>
        <div>
          <button onClick={() => previous()}>+</button>
          <button onClick={() => next()}>-</button>
        </div>
      </HeaderRight>
    </HeaderStyled>
  );
};

export default Header;
