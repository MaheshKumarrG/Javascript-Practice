let addedTask = [{task:"",dueDate:""}];

let taskDisplayed = '';
let displayElem = document.querySelector('.js-display-list');

function onWebPage() {
    taskDisplayed='';

    addedTask.forEach(function(listObj,index){
        const task = listObj.task;
        const dueDate = listObj.dueDate;
        taskDisplayed += `
        <p>
            ${task} ${dueDate} 
            <button onclick="
                addedTask.splice(${index},1);
                onWebPage();
            ">
                Delete
            </button> 
        </p>`;
    });
    displayElem.innerHTML = taskDisplayed;
    console.log(taskDisplayed);
}


function addTask() {
    let inputElem = document.querySelector('.js-input-task');
    let buttonElem = document.querySelector('.js-add-button');
    let dateElem = document.querySelector('.js-input-date');
    let dueDate = dateElem.value;

    addedTask.push({
        task:inputElem.value,
        dueDate:dueDate
    });
    console.log(addedTask);

    inputElem.value = ' ';
    onWebPage();
}

