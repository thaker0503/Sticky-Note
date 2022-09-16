const todos = [
    {
        id:`1`
    },
    {
        id: `2`
    },
    {
        id: `3`
    },
]
export function getTodosFromApi(store) {
    store.setTodo(todos);
}
