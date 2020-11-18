export const addItem = (item) => {
  return {
    type: "ADD_ITEM",
    item,
  };
};

export const updateQuantity = (item) => ({
  type: "UPDATE_QUANTITY",
  item,
});

export const removeItem = (item) => ({
  type: "REMOVE_ITEM",
  item,
});
