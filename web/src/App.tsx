import 'react-toastify/dist/ReactToastify.css';

import React, { FC } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import styled from 'styled-components';

import { colors } from './colors';
import { GlobalStyle } from './components/GlobalStyles';
import Landing from './pages/Landing';
import OrphanagesMap from './pages/OrphanagesMap';
import CreateOrphanage from './pages/CreateOrphanage';
import OrphanageDetails from './pages/OrphanageDetails';

const StyledToastContainer = styled(ToastContainer)`
  .Toastify__toast {
    font-size: 16px;
    border-radius: 10px;
  }

  .Toastify__toast--success {
    background: ${colors.green};
  }

  .Toastify__toast--error {
    background: ${colors.pink};
  }
`;

const App: FC = () => {
  return (
    <>
      <GlobalStyle />
      <StyledToastContainer />
      <BrowserRouter>
        <Switch>
          <Route component={Landing} path="/" exact />
          <Route component={OrphanagesMap} path="/app" />
          <Route component={CreateOrphanage} path="/orphanages/create" />
          <Route component={OrphanageDetails} path="/orphanages/:orphanageId" />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
