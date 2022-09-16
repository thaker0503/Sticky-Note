export class TodoStore {
    store = {
        todos: [],
        user: []
    };

    setTodo(todos) {
        this.store.todos = todos;

    }

    onStoreChange(callback) {
        callback(this.store);
    }
}
