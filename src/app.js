import React from 'react';
import GlobalStyles from './themes/common';
import { ThemeProvider } from 'styled-components';
import original from './themes/original';
import Layout from './components/layout/Layout';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import * as routes from './routes';
import Home from './pages/Home';

const App = () => {
  return (
    <ThemeProvider theme={original}>
      <GlobalStyles />
      <BrowserRouter basename={routes.base}>
        <Layout>
          <Switch>
            <Route exact path={routes.base}>
              <Home />
            </Route>
            <Route path={routes.blog}>
              <h1>blog</h1>
            </Route>
            <Route path={routes.work}>
              <h1>work</h1>
            </Route>
            <Route path={routes.talks}>
              <h1>Talks</h1>
            </Route>
            <Route path={routes.about}>
              <h1>About</h1>
            </Route>
            <Route>
              <h1>Not Found</h1>
            </Route>
          </Switch>
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
