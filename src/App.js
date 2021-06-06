import React from 'react';
import PersonTable from './components/tableDataLoad.js';
import StateAndPropsDemo from './components/stateAndProps.js';
import ForceUpdateDemo from './components/forceUpdate.js';
import SetStateDemo from './components/setState.js';
import FindDOMNodeDemo from './components/findDOMNode.js';
import ComponentLifeCycle from './components/componentLifeCycle.js';
import FormFields from './components/formFields.js';
import HomeChild from './components/home.js';
import NotFoundComponent from './components/404.js';

import TicTacToe from './projects/tic-tac-toe/index.js';
import ApiUseEffect from './projects/practiceAPI/index.js';

import {UseStateDemo, UseStateExample, UseStateAddUser} from './fn_components/useStateDemo';
import {UseEffectDemo, UseEffectExample} from './fn_components/useEffectDemo';
import { UseContextDemo } from './fn_components/useContextDemo.js';
import {ReduxCounter} from './fn_components/reduxReactLearn.js';

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
        <UseStateDemo title = "useState"/>
        <UseStateExample/>
        <UseStateAddUser />
        <UseEffectDemo />
        <UseEffectExample />
        <UseContextDemo />
        <ReduxCounter />
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
        <h1>API Practice</h1>
        <ApiUseEffect />
      </div>
    );
}

export {Learn, TinyProjects, Home, NotFound};