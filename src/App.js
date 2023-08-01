
import './App.css';

import { useSelector, useDispatch } from 'react-redux';
import { actions } from './store/index';
function App() {
  const counter = useSelector((state) => state.counter );
  const dispatch = useDispatch();

  const increment = () => {
    dispatch(actions.increment());
    // console.log(counter)
  };

  const decrement = () => {
    dispatch(actions.decrement());
    // console.log(counter)
  };

  const add = () => {
    dispatch(actions.addBy(10));
    // console.log(counter)
  }
  return (
    <div>
      <h1> Counter App </h1>
      <h2> {counter} </h2>
      <button onClick={() => increment()}> Increment </button>
      <button onClick={() => decrement()}> Decrement </button>
      <button onClick={() => add()}> Add 10 </button>
    </div>
  );
}

export default App;
