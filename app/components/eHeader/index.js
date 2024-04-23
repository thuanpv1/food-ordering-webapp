import React from 'react';
import { FormattedMessage } from 'react-intl';

import A from './A';
import Img from './Img';
import Banner from './banner.jpg';
import messages from './messages';

function Header() {
  return (
    <div>
      <A href="https://www.reactboilerplate.com/">
        <Img src={Banner} alt="react-boilerplate - Logo" />
      </A>

    </div>
  );
}

export default Header;
