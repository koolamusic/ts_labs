let myTodo = {title: "Trash", item: "Clean up the Trash"};

// hacking with interfaces
function showTodo( todo: {title: string, item: string}) : string {
    return `Title : ${todo.title} Todo : ${todo.item}`;

}
console.log(showTodo(myTodo));

//  Though the example above may work, using interfaces allow for cleaner expressions in our code
// Convert the Todo Function to an Interface

interface Todo {
  title : string;
  item : string;
}

let todoItem = (todo : Todo) => {
  return `${todo.title} : ${todo.item}`;
}

console.log(todoItem(myTodo));