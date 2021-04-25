import React from 'react';
import Header from './components/header.js';
import PersonTable from './components/tableDataLoad.js';
import StateAndPropsDemo from './components/stateAndProps.js';
import ForceUpdateDemo from './components/forceUpdate.js';
import SetStateDemo from './components/setState.js';
import FindDOMNodeDemo from './components/findDOMNode.js';
import ComponentLifeCycle from './components/componentLifeCycle.js';

class App extends React.Component {
  render(){
    return(
      <div>
        <Header />
        <PersonTable />
        <StateAndPropsDemo title = "props" />
        <SetStateDemo />
        <ForceUpdateDemo />
        <FindDOMNodeDemo />
        <ComponentLifeCycle />
      </div>
    );
  }
}

export default App;