import store from "../store.js";
import Todo from "../models/todo.js";

// @ts-ignore
const todoApi = axios.create({
  baseURL: "https://bcw-sandbox.herokuapp.com/api/Gabe/todos/",
  timeout: 8000
});

class TodoService {
  async getTodos() {
    let res = await todoApi.get();
    let results = res.data.data.map(rawData => new Todo(rawData));
    store.commit("todos", results);
  }

  async addTodoAsync(todos) {
    await todoApi.post("", todos);
    this.getTodos();
  }

  async toggleTodoStatusAsync(todoId) {
    let todo = store.State.todos.find(todo => todo.id == todoId);

    //TODO Make sure that you found a todo,
    //		and if you did find one
    //		change its completed status to whatever it is not (ex: false => true or true => false)

    let res = await todoApi.put(todoId, todo);
    //TODO do you care about this data? or should you go get something else?
  }

  async removeTodoAsync(todoId) {
    console.log("what is this todoId", todoId);
    let res = await todoApi.delete(todoId);
    this.getTodos();
    console.log("remove todo", res);
  }
}

//TODO Work through this one on your own
//		what is the request type
//		once the response comes back, what do you need to insure happens?

const todoService = new TodoService();
export default todoService;
