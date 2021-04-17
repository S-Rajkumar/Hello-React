import React from 'react';

class App extends React.Component {
  render(){
    return(
      <div>
        <center><Title /></center>
        <Description />
      </div>
    );
  }
}

class Title extends React.Component {
  render() {
    return(
      <h1>Hello React</h1>
    )
  }
}

class Description extends React.Component {
  render() {
    var pStyle = {
      marginLeft: 50
    }
    return(
      <p style={pStyle}>This is React Hello World Application</p>
    )
  }
}

export default App;