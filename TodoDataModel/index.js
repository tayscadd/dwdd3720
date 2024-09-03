// Instead of using a function to create a todo, I'm just going to use a class since I can also add functions to it.

class todo {
    constructor(name, id, category, dueDate, status=false) {
        this.name = name
        this.id = id
        this.category = category
        this.dueDate = dueDate
        this.status = (status===true) ? true : false
    }

    // Toggles the status. If it was true, than make it false. If it was false, make it true.
    complete() {
        this.status = (this.status===true) ? false : true
    }

    // Removes the todo from the todos array. 
        // NOTE: WILL also need to have it delete it's match on the HTML side.
    delete() {
        const thisIndex = todos.indexOf(this)
        // If the value is bigger than 0 (it was found), than remove it.
        if (thisIndex > -1) {todos.splice(thisIndex, 1)}
    }
}
 
const todos = [
    new todo('Example 1', 1, 'An assignment for DWDD3720'),
    new todo('Example 2', 2, 'This is the second example.'),
]
// Set an ID counter to be used when making new todos
let todoIdCounter = todos.length

function newTodo(title, category, dueDate) {
    todoIdCounter += 1
    let newTodo = new todo(title, todoIdCounter, category, dueDate)
    todos.push(newTodo)
    addTodoToHTML(newTodo)
}

function addTodoToHTML(todo) {
    function createElement (el, clsList, txt="") {
        let newElement = document.createElement(el)
        newElement.classList.add(...clsList)
        if (txt !== "") {
            newElement.innerHTML = txt
        }
        return newElement
    }
    let container = createElement('div', ['todoItem'])
    let newTodoTitle = createElement('p', ['todoItemHeader'], todo.title)
    let newTodoInfo = createElement('p', ['todoItemInfo'], todo.info)
    
    container.append(newTodoTitle, newTodoInfo)
}

todos[0].delete()