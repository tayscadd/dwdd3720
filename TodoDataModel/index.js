class todo {
    constructor(title, info, completed=false) {
        this.title = title
        this.info = info
        this.completed = (completed===true) ? true : false
    }
}

const todos = [
    new todo('Creating a Todo App', 'An assignment for DWDD3720'),
    new todo('Example 2', 'This is the second example.'),
    new todo('Example 3', 'This is the third example.'),
    new todo('Example 4', 'This is the fourth example.'),
    new todo('Example 5', 'This is the fifth example.')
]

function addTodoToList(todo) {
    
}
function addTodoToHTML(todo) {
    let div 
}

console.log(todos)

todos.push(new todo('Example 6', 'This is the sixth example.'))

console.log(todos)