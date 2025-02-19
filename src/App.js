import Counter from './components/Counter.js';
import TextField from './components/TextField.js';
import Todo from './components/Todo.js'; 

function App() {
  return (
    <div>
      <Counter />
      <TextField />
      <h1>To-Do list</h1>
      <Todo />
    </div>
  );
}

export default App;