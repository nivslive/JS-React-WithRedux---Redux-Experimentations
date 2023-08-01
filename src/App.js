import logo from './logo.svg';
import './App.css';

import { useSelector, useDispatch } from 'react-redux';
function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const increment = () => {
    dispatch({type: "INCREMENT"});
  };

  const decrement = () => {
    dispatch({type: "DECREMENT"});
  };

  const add = (quantify) => {
    dispatch({type: "ADD", payload: quantify});
  }
  return (
    <div>
      <h1> Counter App </h1>
      <h2> {counter} </h2>
      <button onClick={increment}> Increment </button>
      <button onClick={decrement}> Decrement </button>
      <button onClick={add(25)}> Add 25 </button>
      <button onClick={add(50)}> Add 25 </button>
      <button onClick={add(100)}> Add 25 </button>
    </div>
  );
}

export default App;
