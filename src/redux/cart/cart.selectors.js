import { createSelector } from "reselect";

const cartSelector = state => state.cart;

export const cartItemsSelector = createSelector(
  [cartSelector],
  cart => cart.cartItems
);
export const cartHiddenSelector = createSelector(
  [cartSelector],
  cart => cart.hidden
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

export const cartTotalSelector = createSelector(
  [cartItemsSelector],
  cartItems =>
    cartItems.reduce(
      (accumulatedTotal, currentCartItem) =>
        accumulatedTotal + currentCartItem.quantity * currentCartItem.price,
      0
    )
);
