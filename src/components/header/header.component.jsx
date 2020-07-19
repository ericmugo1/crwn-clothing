import React from 'react';
import { ReactComponent as Logo } from '../../assets/crwn.svg';
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { currentUserSelector } from "../../redux/user/user.selectors";
import { cartHiddenSelector } from "../../redux/cart/cart.selectors";
import { signOutStart } from "../../redux/user/user.actions";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { HeaderContainer,LogoContainer,OptionsContainer,OptionLink } from "./header.styles";

const Header = ({ currentUser,hidden,signOutStart }) =>
    (
        <HeaderContainer>
            <LogoContainer to='/'>
                <Logo></Logo>
            </LogoContainer>
            <OptionsContainer>
                <OptionLink to='/shop'> SHOP</OptionLink>
                <OptionLink to='/contact'> CONTACT</OptionLink>
                { currentUser ?
                    <OptionLink as='div' onClick={ signOutStart }>
                        SIGN OUT
                </OptionLink>
                    : <OptionLink to='/signin'> SIGN IN</OptionLink> }
                <CartIcon />
            </OptionsContainer>
            {
                hidden ? null : <CartDropdown />
            }

        </HeaderContainer>
    );

const mapStateToProps = createStructuredSelector({
    currentUser: currentUserSelector,
    hidden: cartHiddenSelector
});

const mapDispatchToProps = dispatch => ({
    signOutStart: () => dispatch(signOutStart())
})

export default connect(mapStateToProps,mapDispatchToProps)(Header);
