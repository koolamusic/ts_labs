// hacking with interfaces
var myTodo = { title: "Trash", item: "Clean up the Trash" };

function showTodo(todo) {
    return "Title : " + todo.title + " Todo : " + todo.item;
}
console.log(showTodo(myTodo));


var todoItem = function (todo) {
    return todo.title + " : " + todo.item;
};
console.log(todoItem(myTodo));
