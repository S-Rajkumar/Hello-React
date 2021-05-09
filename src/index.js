import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'

import {Learn, TinyProjects, Home, NotFound} from './App';
import Headers from './components/header.js';
import reportWebVitals from './reportWebVitals';
import {UDMNXPDU} from './udmnxpdu.js';

function App() {
  const appContainer = () => {
    return(
    <div>
      <Headers />
    <Switch>
      <Redirect exact from="/" to="/Hello-React/" />
      <Route path = "/Hello-React/" exact component = {Home} />
      <Route path = "/Hello-React/learn" exact component = {Learn} />
      <Route path = "/Hello-React/projects" exact component = {TinyProjects} />
      <Route path = "/Hello-React/404" component = {NotFound} />
      <Redirect to = "/Hello-React/404" />
    </Switch>
    </div>
    )
  };

  return(
    <BrowserRouter>
      <Switch>
        <Route path = "/udmnxpdu" exact sensitive = {true} component = {UDMNXPDU} />
        <Route component = {appContainer} />
      </Switch>
    </BrowserRouter>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
