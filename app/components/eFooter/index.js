import React from 'react';
import { FormattedMessage } from 'react-intl';

import A from 'components/A';
import LocaleToggle from 'containers/LocaleToggle';
import Wrapper from './Wrapper';
import messages from './messages';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import styled from 'styled-components';

const myDiv = styled.div`
  text-align: center;

`

function Footer() {
  return (
    <Wrapper>
      <NavBar>
        <HeaderLink to="/danhsach">
          <FormattedMessage {...messages.danhSach} />
        </HeaderLink>
        <HeaderLink to="/goimon">
          <FormattedMessage {...messages.goiMon} />
        </HeaderLink>
        <HeaderLink to="/thanhToan">
          <FormattedMessage {...messages.thanhToan} />
        </HeaderLink>
      </NavBar>
    </Wrapper>
  );
}

export default Footer;
