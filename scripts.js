const inputBox = document.getElementById("inputBox")
const listContainer = document.getElementById("listContainer")

function addTask(){
    if(inputBox.value === ""){
        alert("Type in a task you wish to save.");
    }

    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveTasks();
}

function saveTasks(){
    localStorage.setItem("taskData", listContainer.innerHTML);
}

function showTasks(){
    listContainer.innerHTML = localStorage.getItem("taskData")
}


listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveTasks();
    }

    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveTasks();
    }
}, false)

showTasks();

window.addEventListener('load', function() {
    const mainApp = document.querySelector('.mainApp');
    mainApp.classList.add('loaded');
});

