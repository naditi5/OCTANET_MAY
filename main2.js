const input = document.getElementById("input-task");
const todolist = document.getElementById("tasks");

function addTask(){
    if(input.value === "")
        alert("You must write Something !!");
    else{
        let li = document.createElement("li");
        li.innerHTML = input.value;
        todolist.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    input.value = "";
    saveData();
}

todolist.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

input.addEventListener("keyup", function(event){
    if(event.key == "Enter"){
        addTask();
    }
});

function saveData(){
    localStorage.setItem("data", todolist.innerHTML);
}

function showTasks(){
    todolist.innerHTML = localStorage.getItem("data");
}
showTasks();