import styled from "styled-components";

export const HeaderStyled = styled.header`
  display: flex;
  height: 100vh;
`;

export const HeaderLeft = styled.div`
  background-color: red;
  width: 50%;
`;

export const HeaderRight = styled.div`
  width: 50%;
  background-color: green;
`;

export const NavStyled = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 50%;
  margin: 20px 0px 20px 20px;
`;

export const Logo = styled.p`
  color: white;
`;

export const UnorderedList = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 70%;
  li {
    list-style: none;
    p {
      color: green;
    }
  }
`;
