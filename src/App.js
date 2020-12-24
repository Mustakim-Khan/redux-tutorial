import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import { increment, decrement } from './store/actions';

function App() {
  const counter = useSelector(state => state.counter)
  const dispatch = useDispatch()
  return (
    <div className="App">
      <button onClick={() => dispatch(increment())}>+</button>
      <h1>Counter : {counter}</h1>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
}

export default App;
