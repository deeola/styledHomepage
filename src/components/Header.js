import React from "react";
import {
  HeaderLeft,
  HeaderRight,
  HeaderStyled,
  Logo,
  NavStyled,
  UnorderedList,
} from "./styled/Header.styled";

function Header() {
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
      <HeaderRight></HeaderRight>
    </HeaderStyled>
  );
}

export default Header;
