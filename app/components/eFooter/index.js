import React from 'react';
import { FormattedMessage } from 'react-intl';

import A from 'components/A';
import LocaleToggle from 'containers/LocaleToggle';
import messages from './messages';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import styled from 'styled-components';

function Footer() {
  return (
      <NavBar>
        <HeaderLink to="/danhsach">
        </HeaderLink>
        <HeaderLink to="/goimon">
        </HeaderLink>
        <HeaderLink to="/thanhToan">
        </HeaderLink>
      </NavBar>
  );
}

export default Footer;
