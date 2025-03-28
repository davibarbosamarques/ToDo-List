/* Estudar: 
   - oq é appendChild
   - preventDefault
   - target
*/

// Seleção de elementos
const todoForm = document.querySelector("#todo-form")
const todoList = document.querySelector("#todo-list")
const todoInput = document.querySelector("#todo-input")
const editForm = document.querySelector("#edit-form")
const editInput = document.querySelector("#edit-input")
const cancelEditBtn = document.querySelector("#cancel-edit-btn")

//Funções

const saveTodo = (text) => {
    const todo = document.createElement("div")
    todo.classList.add("todo")

    const todoTitle = document.createElement("h3")
    todoTitle.innerText = text;
    todo.appendChild(todoTitle)

    const feitoBtn = document.createElement("button")
    feitoBtn.classList.add("finish-todo")
    feitoBtn.innerHTML = '<i class="fa-solid fa-check"></i>'
    todo.appendChild(feitoBtn)

    const editaBtn = document.createElement("button")
    editaBtn.classList.add("edit-todo")
    editaBtn.innerHTML = '<i class="fa-solid fa-pen"></i>'
    todo.appendChild(editaBtn)

    const removeBtn = document.createElement("button")
    removeBtn.classList.add("remove-todo")
    removeBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>'
    todo.appendChild(removeBtn)

    todoList.appendChild(todo)

    todoInput.value = ""
    todoInput.focus()
}
const toggleForm = () => {
    editForm.classList.toggle("hide");
    todoForm.classList.toggle("hide");
    todoList.classList.toggle("hide");
}
//Eventos

todoForm.addEventListener("submit", (a) =>{
    a.preventDefault()

    const valorInput = todoInput.value

    if(valorInput){
        saveTodo(valorInput)
    }

})

document.addEventListener("click", (e) => {
    const targetEl = e.target
    const parentEl = targetEl.closest("div")

    if(targetEl.classList.contains("finish-todo")){
        parentEl.classList.toggle("done")

        /*
        toggle = alternar

        if(parentEl.classList.contains("done")){
            parentEl.classList.remove("done")
        }else{
            parentEl.classList.add("done")
        }
        */
    }

    if(targetEl.classList.contains("remove-todo")){
        parentEl.remove()
    }

    if(targetEl.classList.contains("edit-todo")){
        toggleForm()
    }
})

cancelEditBtn.addEventListener("click", (e) =>{
    e.preventDefault()

    toggleForm()
})

editForm.addEventListener("click", (e) => {
    e.preventDefault()

    const editInputValue = editInput

    if(editInputValue){
        updatetodo(editInputValue)
    }

    toggleForm()
})