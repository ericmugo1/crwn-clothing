import React from 'react'
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { createStructuredSelector } from 'reselect';
import { cartItemsCountSelector } from "../../redux/cart/cart.selectors";
import {
    CartContainer,
    ShoppingIcon,
    ItemCountContainer
} from './cart-icon.styles';

const CartIcon = ({ toggleCartHidden,itemCount }) => (
    <CartContainer onClick={ toggleCartHidden }>
        <ShoppingIcon className='shopping-icon' />
        <ItemCountContainer>{ itemCount }</ItemCountContainer>
    </CartContainer>
);
const mapStateToProps = createStructuredSelector({
    itemCount: cartItemsCountSelector
});

const mapDispatchToProps = (dispatch) => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps)
    (CartIcon);