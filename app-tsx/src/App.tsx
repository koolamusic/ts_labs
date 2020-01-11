import React, {useState, ChangeEvent} from 'react';
import './App.css';

// TS interface for our todo list
interface TodoInterface {
  text: string,
  complete: boolean
}

const App: React.FC = () => {
  const [value, setValue] = useState<string>('');
  const [todos, setTodos] = useState<TodoInterface[]>([]);

  // Submit event to state for form
  let handleSubmit = (e: React.FormEvent<HTMLFormElement>) : void => {
    // now create a todo object with the value from useState and a boolean for complete
    // value is defined from handleChange event
    const todoDictionary: TodoInterface = {text:value, complete:false};
    e.preventDefault()
    addTodo(todoDictionary)
    setValue('');
  }

  // Change event for input form
  let handleChange = (e: ChangeEvent<HTMLInputElement>): void => setValue(e.target.value);

  /**
   * Event handler to delete a Todolist from the todos in app state
   */
  let deleteTodo = (index : number) : void => {
    // Method One
    // const listItems : TodoInterface[] = [...todos]
    // listItems.splice(index, 1);
    // setTodos(listItems)
    
    // Method Two
    const value = todos[index]
    const todoItems : TodoInterface[] = todos.filter( item => item !== value)
    // debugger
    setTodos(todoItems)
  }

  // Event to Add Todo
  let addTodo = (todoList : TodoInterface) : void => {
    const newList : TodoInterface[] = [...todos, todoList]
    // call setTodo from usestate
    setTodos(newList)
  }

  /**
   *Event to Complete Todo : We want to get the current index of the clicked element and 
   set the complete todo boolean to true or false
   */
  let completeTodo = (index: number) => {
    const todoList: TodoInterface[] = [...todos];
    todoList[index].complete = !todoList[index].complete;
    setTodos(todoList)
  }


  return (
    <div className="App">
      <header className="App-header">
        <h1>Todo List</h1>
        <form onSubmit={handleSubmit}>
        <input type="text" value={value} placeholder="input todo" onChange={ e => handleChange(e)} />
        <button type="submit">Add Todo</button>
        </form>
      </header>

      {todos.map((todo : TodoInterface, index) => (
          <section key={index} className="todoSection">
            <div className="todoElement">
            <input type="checkbox" onChange={() => completeTodo(index)} />
            <p style={{textDecoration: todo.complete ? 'line-through' : ''}}>{todo.text}</p>
            </div>
            <button type="button" onClick={() => deleteTodo(index)}>&times;</button>
          </section>   
      ))}

    </div>
  );
}

export default App;
