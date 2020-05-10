import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crwn.svg';
import { auth } from '../../firebase/firebase.utils';
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { currentUserSelector } from "../../redux/user/user.selectors";
import { cartHiddenSelector } from "../../redux/cart/cart.selectors";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import './header.styles.scss';

const Header = ({ currentUser,hidden }) => (
    <div className='header'>
        <Link className='logo-container' to='/'>
            <Logo className='logo'></Logo>
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'> SHOP</Link>
            <Link className='option' to='/contact'> CONTACT</Link>
            { currentUser ?
                <div className='option' onClick={ () => auth.signOut() }>
                    SIGN OUT
                </div>
                : <Link className='option' to='/signin'> SIGN IN</Link> }
            <CartIcon />
        </div>
        {
            hidden ? null : <CartDropdown />
        }

    </div>
);

const mapStateToProps = createStructuredSelector({
    currentUser: currentUserSelector,
    hidden: cartHiddenSelector
});

export default connect(mapStateToProps)(Header);
