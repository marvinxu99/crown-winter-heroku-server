import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

//import { ReactComponent as Logo } from '../../assets/crown.svg';
//import { ReactComponent as Logo } from '../../assets/images/winter-resized.svg';
//import winter2 from '../../assets/images/winter-winter.jpeg';
import winter2 from '../../assets/images/winter_logo.png';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectUserCurrentUser } from '../../redux/user/user.selectors';
import { signOutStart } from '../../redux/user/user.actions';

//import './header.styles.scss';
import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
  OptionDiv,
  LogoImg
} from './header.styles';


const Header = ({ currentUser, hidden, signOutStart }) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <LogoImg src={winter2} />
      <span>WinnPy Software</span>
    </LogoContainer>

    <OptionsContainer>
      <OptionLink to='/crypto'>
        CRYPTOGRAPHY
      </OptionLink>
      <OptionLink to='/python'>
        PYTHON
      </OptionLink>
      <OptionLink to='/admin'>
        ADMIN
      </OptionLink>
      <OptionLink to='/home'>
        HOME
      </OptionLink>
      <OptionLink to='/contact'>
        CONTACT
      </OptionLink>
      { /* Logic for displaying SIGN OUT or SIGN IN */
        currentUser ?
          <OptionDiv onClick={signOutStart}>
            SIGN OUT
          </OptionDiv>
          :
          <OptionLink to='/signin'>
            SIGN IN
          </OptionLink>
      }
      <OptionLink to='/shop'>
        SHOP
      </OptionLink>
      <OptionLink to='/orders'>
        ORDERS
      </OptionLink>
      <CartIcon />
    </OptionsContainer>

    {
      hidden ? null : <CartDropdown />
    }
  </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectUserCurrentUser,
  hidden: selectCartHidden
});

const mapDispatchToProps = dispatch => ({
  signOutStart: () => dispatch(signOutStart())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);