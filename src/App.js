import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from './actions';
import './App.css';

function App() {
  const counter = useSelector(state => state.counter);   // <= mi consente di accedere ed estrarre gli state da redux
  const isLogged = useSelector(state => state.sLogged);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Counter {counter}</h1>
      {/* <button onClick={() => dispatch(increment())}>+</button> */}
      <button onClick={() => dispatch(increment(5))}>+</button> {/* <= continua su actions */}
      <button onClick={() => dispatch(decrement())}>-</button>
      {/* mi sposto su action per la funzionalità dei buttons */}

      {isLogged ? <h3>posso visualizzarlo solo se loggata</h3> : ''}
    </div>
  );
}

export default App;
