const loginForm=document.querySelector("#login-form")
const loginInput=loginForm.querySelector("input");
const greeting=document.querySelector("#greeting");
const HIDDEN_CLASSNAME="hidden";
const USERNAME="username"
const savedUsername=localStorage.getItem("username");
const toDoForm_1=document.querySelector("#todo-form");
const toDoList_1=document.querySelector("#todo-list");

function paintGreeings(username){
    // greeting.innerText="Hello "+username;
    greeting.innerText=`💕Hello, ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    toDoForm_1.classList.remove(HIDDEN_CLASSNAME);
    toDoList_1.classList.remove(HIDDEN_CLASSNAME);
    loginForm.classList.remove("login-form__display");
    loginForm.classList.add("hidden");
}

function onLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username=loginInput.value;
    localStorage.setItem("username",username);
    paintGreeings(username)
    toDoForm_1.classList.remove(HIDDEN_CLASSNAME);
    toDoList_1.classList.remove(HIDDEN_CLASSNAME);
}

if (savedUsername===null){
    console.log(savedUsername);
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",onLoginSubmit);
}
else{
    paintGreeings(savedUsername)
}



