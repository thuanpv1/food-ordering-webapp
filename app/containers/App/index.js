/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import eDanhSachPage from 'containers/eDanhSachPage/Loadable';
import eGoiMonPage from 'containers/eGoiMonPage/Loadable';
import eThanhToanPage from 'containers/eThanhToanPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/eHeader';
import Footer from 'components/eFooter';

import GlobalStyle from '../../global-styles';

const AppWrapper = styled.div`
  max-width: calc(768px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
`;

export default function App() {
  return (
    <AppWrapper>
      <Header />
      <Switch>
        <Route exact path="/danhsach" component={eDanhSachPage} />
        <Route path="/goimon" component={eGoiMonPage} />
        <Route path="/thanhtoan" component={eThanhToanPage} />
        <Route path="" component={NotFoundPage} />
      </Switch>
      <Footer />
      <GlobalStyle />
    </AppWrapper>
  );
}
