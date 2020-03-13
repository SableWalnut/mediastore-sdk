import React from 'react';
import PropTypes from 'prop-types';
import Logout from 'components/Logout/Logout';
import { HeaderStyled, LogoStyled } from './HeaderStyled';
import headerLogo from './img/logo.svg';
import Button from '../Button/Button';

const Header = ({ showBackIcon, isMyAccount, showLogOutButton }) => (
  <HeaderStyled>
    {showBackIcon && (
      <nav>
        <Button
          isLink
          to={{
            pathname: isMyAccount ? '/my-account/login' : '/login'
          }}
          variant="back"
        >
          Back
        </Button>
      </nav>
    )}
    {showLogOutButton && (
      <nav>
        <Logout />
      </nav>
    )}
    <LogoStyled>
      <img src={headerLogo} alt="Sport stream" />
    </LogoStyled>
  </HeaderStyled>
);

Header.propTypes = {
  showBackIcon: PropTypes.bool,
  isMyAccount: PropTypes.bool,
  showLogOutButton: PropTypes.bool
};
Header.defaultProps = {
  showBackIcon: false,
  isMyAccount: false,
  showLogOutButton: false
};

export default Header;
