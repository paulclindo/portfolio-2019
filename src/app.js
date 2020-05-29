import React from 'react';
import GlobalStyles from './themes/common';
import { ThemeProvider } from 'styled-components';
import original from './themes/original';
import Layout from './components/layout/Layout';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import * as routes from './routes';
import Home from './pages/Home';

const App = () => {
  console.log('App is working');
  return (
    <ThemeProvider theme={original}>
      <GlobalStyles />
      <BrowserRouter basename={routes.root}>
        <Layout>
          <Switch>
            <Route exact path={routes.root}>
              <Home />
            </Route>
            <Route exact path={routes.blog}>
              <h1>blog</h1>
            </Route>
            <Route exact path={routes.work}>
              <h1>work</h1>
            </Route>
            <Route exact path={routes.contact}>
              <h1>Talks</h1>
            </Route>
            <Route exact path={routes.about}>
              <h1>About</h1>
            </Route>
            <Redirect to={routes.root}/>
            {/* <Route>
              <h1>Not Found</h1>
            </Route> */}
          </Switch>
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
