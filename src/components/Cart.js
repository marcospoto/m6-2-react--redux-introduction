import React from "react";
import styled from "styled-components";
import { getStoreItemArray } from "../reducers/index";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";

const Cart = () => {
  const storeItems = useSelector(getStoreItemArray);
  console.log(storeItems);
  const store = useSelector((state) => {
    return state;
  });
  console.log(store);

  const handleQuantity = () => {
    const currentQuantity = 0;
  };

  return (
    <Wrapper>
      <div>Your Cart</div>
      <div>{storeItems.quantity} items</div>
      <ItemGridWrapper>
        <>
          {storeItems.map((item) => {
            return (
              <CartItem
                key={item.id}
                id={item?.id}
                name={item?.title}
                price={item?.price}
                quantity={item?.quantity}
              />
            );
          })}
        </>
        <div>Quantity:</div>
      </ItemGridWrapper>
      <div>
        Total: <button>Purchase</button>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div``;

const ItemGridWrapper = styled.div``;

export default Cart;
