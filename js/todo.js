const TODOLIST="toDoList";
const TODOS_KEY="toDos";
const toDoForm=document.querySelector("#todo-form");
const toDoInput=toDoForm.querySelector("input");
const toDoList=document.querySelector("#todo-list");
const savedToDos=localStorage.getItem(TODOS_KEY);
let toDos=[];

function saveToDos(){
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
}

function deleteToDo(event){
    const li=event.target.parentElement;
    const id=li.id;
    toDos=toDos.filter((todo) => todo.id!==parseInt(id));
    li.remove();
    saveToDos();
}

function paintToDo(newTodoObj){
    const toDo=document.createElement("li");
    const toDoText=document.createElement("span");
    const toDoBtn=document.createElement("button");
    toDo.classList.add("toDo");
    toDoText.innerText=newTodoObj.text;
    toDo.id=newTodoObj.id;
    toDoBtn.innerText="X";
    toDoBtn.addEventListener("click",deleteToDo);
    toDo.appendChild(toDoText);
    toDo.appendChild(toDoBtn);
    toDoList.appendChild(toDo);
}

function addToDo(event){
    event.preventDefault();
    const newToDo=toDoInput.value;
    toDoInput.value="";
    const newTodoObj={text:newToDo,id:Date.now()};
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit",addToDo);

if (savedToDos){
    const parsedToDos=JSON.parse(savedToDos);
    // parsedToDos.forEach((item)=>paintToDo(item));
    parsedToDos.forEach(paintToDo);
    parsedToDos.forEach((item)=>toDos.push(item));
}
