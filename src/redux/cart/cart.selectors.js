import { createSelector } from "reselect";

const cartSelector = state => state.cart;

export const cartItemsSelector = createSelector(
  [cartSelector],
  cart => cart.cartItems
);

export const cartItemsCountSelector = createSelector(
  [cartItemsSelector],
  cartIems =>
    cartIems.reduce(
      (accumulatedQuantity, currentCartItem) =>
        accumulatedQuantity + currentCartItem.quantity,
      0
    )
);
