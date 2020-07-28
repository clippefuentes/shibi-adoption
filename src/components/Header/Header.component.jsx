import React from 'react';
import { auth } from '../../firebase/firebase.utils';

import {
  HeaderContainer,
  OptionLink
} from './Header.styles';

const Header = ({ currentUser }) => (
  <HeaderContainer>
    <OptionLink to='/'>Home</OptionLink>
    {currentUser ? (
      <OptionLink as='div' onClick={() => auth.signOut()}>
        SIGN OUT
      </OptionLink>
    ) : (
        <OptionLink to='/login'>SIGN IN</OptionLink>
      )}
  </HeaderContainer>
);

export default Header;
