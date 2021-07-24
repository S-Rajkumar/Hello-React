import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {decrement, increment, sing_in} from './actions';


function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Hello React Redux</h1>
      <h3>counter : {counter}</h3> {'\u00A0'}
      <button onClick = { () => dispatch(increment(3))} >+</button> {'\u00A0'}
      <button onClick = { () => dispatch(decrement(2))} >-</button> {'\u00A0'}
      <button onClick = { () => dispatch(sing_in(counter))}>Try Sing In</button>
      {isLogged ? <h2>!!! Thank You !!!</h2> : ''}
    </div>
  );
}

export default App;
