import React from 'react';
import PersonTable from './components/tableDataLoad.js';
import StateAndPropsDemo from './components/stateAndProps.js';
import ForceUpdateDemo from './components/forceUpdate.js';
import SetStateDemo from './components/setState.js';
import FindDOMNodeDemo from './components/findDOMNode.js';
import ComponentLifeCycle from './components/componentLifeCycle.js';
import FormFields from './components/formFields.js';
import TicTacToe from './projects/tic-tac-toe/index.js';
import HomeChild from './components/home.js';
import NotFoundComponent from './components/404.js';

function Learn() {
    return(
      <div>
        <PersonTable />
        <StateAndPropsDemo title = "props" />
        <SetStateDemo />
        <ForceUpdateDemo />
        <FindDOMNodeDemo />
        <ComponentLifeCycle />
        <FormFields />
      </div>
    );
}

function Home() {
  return(
    <div>
      <HomeChild />
    </div>
  )
}

function NotFound() {
  return(
    <div>
      <NotFoundComponent />
    </div>
  )
}

function TinyProjects() {
    return(
      <div>
        <h1>Tic Tac Toe</h1>
        <TicTacToe />
      </div>
    );
}

export {Learn, TinyProjects, Home, NotFound};