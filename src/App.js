import React from 'react';
import Header from './components/header.js';
import PersonTable from './components/tableDataLoad.js';
import StateAndPropsDemo from './components/stateAndProps.js';

class App extends React.Component {
  render(){
    return(
      <div>
        <Header />
        <PersonTable />
        <StateAndPropsDemo title = "props" />
      </div>
    );
  }
}

export default App;