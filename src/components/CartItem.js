import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { removeItem, updateQuantity } from "../actions";

const CartItem = ({ name, quantity, id, price, title }) => {
  const dispatch = useDispatch();

  const handleChangeQuantity = (e) => {
    !isNaN(e.target.value) &&
      dispatch(
        updateQuantity({ id, title, price, quantity: Number(e.target.value) })
      );
  };

  return (
    <Wrapper>
      <div>{name}</div>
      <QuantityContainer>
        <label htmlFor="quantity">Quantity:</label>
        <QuantityNum
          name="quantity"
          id="quantity"
          type="text"
          value={quantity}
          onChange={(e) => handleChangeQuantity(e)}
        />
      </QuantityContainer>
      <button onClick={() => dispatch(removeItem({ id }))}>X</button>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const QuantityContainer = styled.div``;

const QuantityNum = styled.input``;
export default CartItem;
