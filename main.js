import { getTodosFromApi } from './test.js';

class TodoStore {
    store = {
        todos: [],
        user: []
    };

    callbacks = [];
    nextFn = [];
    constructor() {
        this.callbacks = [];
    }

    next() {
        if (this.callbacks.length === 0) {
            this.nextFn.push(store);
        }
        this.runCallbacks(store);
    }

    runCallbacks(value) {
        if (this.callbacks.length !== 0) {
            this.callbacks.forEach(callback => {
                console.log("value", value)
                callback(value)
            })
        }
    }

    subscribe(cb) {
        this.callbacks.push(cb);
        if (this.nextFn.length !== 0) {
            this.nextFn.forEach(val => {
                this.next()
            })
        }
    }


    setTodo(todos) {
        this.store.todos = todos;
        this.next()
    }




}




const store = new TodoStore();


store.subscribe(storeData => {

    console.log("RUN")
    console.log("value emitted", storeData.store.todos)
})


getTodosFromApi(store);
