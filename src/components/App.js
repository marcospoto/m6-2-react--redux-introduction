import React from "react";
import styled from "styled-components";

import Logo from "./Logo";
import ItemGrid from "./ItemGrid";
import GlobalStyles from "./GlobalStyles";
import Cart from "./Cart";

const App = () => {
  return (
    <Wrapper>
      <Header>
        <Logo />
      </Header>
      <ItemGridWrapper>
        <ItemGrid />
      </ItemGridWrapper>
      <CartWrapper>
        <Cart />
      </CartWrapper>
      <GlobalStyles />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: grid;
  height: 100vh;
  grid-template-rows: 80px;
  grid-template-areas:
    "header header sidebar"
    "main main sidebar";
`;

const Header = styled.header`
  grid-area: header;
  justify-self: center;
  padding: 32px 64px;
`;

const ItemGridWrapper = styled.main`
  grid-area: main;
  padding: 16px 64px;
`;

const CartWrapper = styled.div`
  border-left: 3px dashed #ff406e;
  padding-left: 8px;
  grid-area: sidebar;

  background-color: white;
`;

export default App;
