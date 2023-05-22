const { createSelector } = require('@reduxjs/toolkit');

const cartItemsSelector = (state) => state.cart.cartItems;

export const cartItemsCountSelector = createSelector(
  cartItemsSelector,
  (cartItems) =>
    cartItems.reduce((count, item) => {
      return count + item.quantity;
    }, 0)
);

export const cartItemsTotalSelector = createSelector(
  cartItemsSelector,
  (cartItems) =>
    cartItems.reduce((total, item) => {
      return total + item.quantity * item.product.salePrice;
    }, 0)
);
