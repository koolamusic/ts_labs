import React, {useState, ChangeEvent} from 'react';
import './App.css';

// TS interface for our todo list
interface TodoInterface {
  text: string,
  complete: boolean
}

const App: React.FC = () => {
  const [value, setValue] = useState<string>('');

  // Submit event to state for form
  let handleSubmit = (e: React.FormEvent<HTMLFormElement>) : void => {
    e.preventDefault()
    setValue('');
  }

  // Change event for input form
  let handleChange = (e: ChangeEvent<HTMLInputElement>): void => setValue(e.target.value);

  // Event to Complete Todo


  return (
    <div className="App">
      <header className="App-header">
        <h1>Todo List</h1>
        <form onSubmit={handleSubmit}>
        <input type="text" value={value} placeholder="input todo" onChange={ e => handleChange(e)} />
        <button type="submit">Add Todo</button>
        </form>
      </header>
    </div>
  );
}

export default App;
