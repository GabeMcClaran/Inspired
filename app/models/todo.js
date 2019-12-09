export default class Todo {
  constructor(data) {
    this.id = data.id || data._id;
    this.completed = data.completed;
    this.description = data.description || "";
  }

  get Template() {
    return `
    <input  name="toggler" type="checkbox" onclick="app.TodoController.toggleTodoStatus('${this.id}')"<p>${this.description}  <button class="btn btn-danger"onclick="app.TodoController.removeTodo('${this.id}')"> X</button></p></div>
        `;
  }
}
