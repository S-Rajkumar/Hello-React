import React from 'react';
import Header from './components/header.js';
import PersonTable from './components/tableDataLoad.js';
import StateAndPropsDemo from './components/stateAndProps.js';
import ForceUpdateDemo from './components/forceUpdate.js';
import SetStateDemo from './components/setState.js';
import FindDOMNodeDemo from './components/findDOMNode.js';
import ComponentLifeCycle from './components/componentLifeCycle.js';
import FormFields from './components/formFields.js';

class Learn extends React.Component {
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
        <FormFields />
      </div>
    );
  }
}

class TinyProjects extends React.Component {
  render() {
    return(
      <div>
        <Header />
        <p>comming soon...</p>
      </div>
    );
  }
}

export default Learn;
export {TinyProjects};