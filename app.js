//Elements
const todoInput = document.getElementById("todo-input");
const addBtn = document.querySelector("#todo-button");
const todoUl = document.querySelector("#todo-ul");

let todoList = JSON.parse(localStorage.getItem("todoList")) || [];

//load event vs. DomContentLoaded
window.addEventListener("load", () => {
    getTodoListFromLocalStorage();
});

const getTodoListFromLocalStorage = () => {
    //get TodoList from localStorage and load to UI
}

//form => submit event vs. button => click event
// form.addEventListener("submit", ()=>{})
addBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if(todoInput.value.trim() === ""){
        alert("Please, enter new todo text!");
        return;
    }
    // else{
    //     alert("continue");
    // }
    //continue func.
    const newTodo = {
        id : new Date().getTime(), //unique id with ms of now
        completed : false, //status
        text : todoInput.value //userInput
    }
})
