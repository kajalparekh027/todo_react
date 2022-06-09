import logo from './logo.svg';
import './App.css';
import TodoForm from './Component/TodoForm';
import TodoList from './Component/TodoList';



function App (props) {
  return (
    <div className='todo-app'>
      <TodoList/>
      
    </div>
  );
}

export default App;
