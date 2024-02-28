let list=document.querySelector(".todo-list");
let items =list.children;
let emptyListMessage=document.querySelector(".empty-tasks");
let newItemForm=document.querySelector(".add-form");
let newItemTitle=document.querySelector(".add-form-input");
let taskTemplate=document.querySelector("#task-template").content;
let newItemTemplate=taskTemplate.querySelector('.todo-list-item');

let ToDoList=JSON.parse(localStorage.getItem('todo')) || [];

function toggleEmptyListMessage(){
    if(items.length===0){
        emptyListMessage.classList.remove("hidden");
    }else{
        emptyListMessage.classList.add("hidden");
    }
}
let addCheckHandler=function(item, taskText){
    let checkbox=item.querySelector('.todo-list-input');
    checkbox.addEventListener('change', function(){
        ToDoList=ToDoList.filter((element)=>element!==taskText);
        updateLocalStorage()
        item.remove();
        toggleEmptyListMessage();
    })
}
for(let i=0; i<ToDoList.length; i++){
    let task=newItemTemplate.cloneNode(true);
    let taskDescription=task.querySelector('span');
    taskDescription.textContent=ToDoList[i];
    addCheckHandler(task, ToDoList[i]);
    list.appendChild(task);
}
//
let add=document.querySelector(".modal-content");
let open=document.querySelector('.open-modal');
let close =document.querySelector('.close-modal');
let modal=document.querySelector('.modal');
add.addEventListener('submit', handleSubmit);
function handleSubmit(evt){
        evt.preventDefault();
        let form=evt.target;
        let task=newItemTemplate.cloneNode(true);
        let taskDescription=task.querySelector('span');
        let taskText = form.elements.text.value;
        taskDescription.textContent=taskText;
        addCheckHandler(task, taskText);
        list.appendChild(task);
        toggleEmptyListMessage();
    ToDoList.push(taskText);
    updateLocalStorage();
    closemodal();
    form.reset()
}

open.addEventListener('click', openmodal)
function openmodal(){
    modal.style.display='block';
}

close.addEventListener('click', closemodal)
function closemodal(){
    modal.style.display='none';
}
function updateLocalStorage(){
    localStorage.setItem('todo', JSON.stringify(ToDoList))
}
//старий код
// newItemForm.addEventListener('submit', newItem);
// function newItem(evt){
//     evt.preventDefault();
//     let taskTex=newItemTitle.value;
//     let newItemTemplate=document.querySelector('.todo-list-item');
//     let task=newItemTemplate.cloneNode(true);
//     let taskDescription=task.querySelector('span');
//     taskDescription.textContent=taskTex;
//     addCheckHandler(task);
//     list.append(task);
//     toggleEmptyListMessage();
//     newItemTitle.value = '';
// }