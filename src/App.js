
import { useSelector,useDispatch } from 'react-redux';
import react from 'react';
import './App.css';
import {actions} from './store';
import Create from './components/Create';
import Navbar from './components/Navbar';

function App() {



return (

  <>
  <Navbar />
  <div className="calling my-3">
  <Create />
  </div>
 
  </>
  
  
  );





  // const counter = useSelector((state) => state.counter);

  // const dispatch = useDispatch();


  // const increment = () => {
  //   dispatch(actions.increment());
  // };

  // const decrement = () => {
  //   dispatch(actions.decrement());
  // };

  // const addBy = () => {
  //   dispatch(actions.addBy(10));
  // };




//<........simple way to write code........>


  // const increment = () => {
  //   dispatch({type:'INC'});
  // };

  // const decrement = () => {
  //   dispatch({type:'DEC'});
  // };

  // const addBy = () => {
  //   dispatch({type:'ADD',payload:10});
  // };

  //</....simple way to write code.....>



  // return (
  //   <div>
  //    {/* <h1>To Do App</h1>
  //    <h2>{counter}</h2>
  //    <button onClick={increment}>Increment</button>
  //    <button onClick={decrement}>Decrement</button>
  //    <button onClick={addBy}>Add By 10</button> */}
  //   </div>
  // );
}

export default App;
