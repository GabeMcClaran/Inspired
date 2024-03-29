import TodoService from "../services/todo-service.js";
import store from "../store.js";

//TODO Create the render function
function _drawTodos() {
  let template = "";
  let todos = store.State.todos;
  console.log("from the drawfunction", store.State.todos);

  todos.forEach(t => (template += t.Template));
  document.getElementById("todos").innerHTML = template;
}

export default class TodoController {
  constructor() {
    store.subscribe("todos", _drawTodos);
    console.log("subscribers data", store.State.todos);
    TodoService.getTodos();

    //TODO Remember to register your subscribers
  }

  async addTodo(e) {
    e.preventDefault();
    var form = e.target;
    console.log("todo controller", form);

    var todo = {
      description: form.tasks.value
      //TODO build the todo object from the data that comes into this method
    };
    try {
      await TodoService.addTodoAsync(todo);
    } catch (error) {
      console.error("[ERROR]:", error);
    }
  }

  // //NOTE This method will pass an Id to your service for the TODO that will need to be toggled
  async toggleTodoStatus(todoId) {
    try {
      await TodoService.toggleTodoStatusAsync(todoId);
    } catch (error) {
      console.error("[ERROR]:", error);
    }
  }

  //NOTE This method will pass an Id to your service for the TODO that will need to be deleted
  async removeTodo(todoId) {
    try {
      await TodoService.removeTodoAsync(todoId);
    } catch (error) {
      console.error("[ERROR]:", error);
    }
  }
}
