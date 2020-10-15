import React, { FC } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { GlobalStyle } from '@/components/GlobalStyles';
import Landing from '@/pages/Landing';
import OrphanagesMap from '@/pages/OrphanagesMap';

const App: FC = () => {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Switch>
          <Route component={Landing} path="/" exact />
          <Route component={OrphanagesMap} path="/app" />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
