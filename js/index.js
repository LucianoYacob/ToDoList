import App from "../js/App.js";
import { handleModal } from "./helpers/handleModal.js";
import appendItem  from "./helpers/appendItem.js";
import addTask  from "./helpers/addTask.js";
import updateTask from "./helpers/updateTask.js";
import deleteTask, { selecItem } from "./helpers/deletTask.js";

const d = document;

d.addEventListener("DOMContentLoaded", App);

d.addEventListener("click", e => {
    let target = e.target;


    // Main View
    if(target.matches("#btn-add")){
        appendItem();
    }
    if(target.matches("#btn-open-task")){
        target.parentNode.parentNode.classList.add("active");
        handleModal(true);
    }
    if(target.matches("#delete-task")){
        deleteTask();
    }
    if(target.matches(".icon-cont")){
        selecItem(target);
    }

    //Modal Window
    if(target.matches("#close-modal") || target.matches("#btn-save-task") || target.matches("#btn-update-task"))
    {
        if(target.matches("#btn-save-task")){
            addTask();
        }
        else if(target.matches("#btn-update-task")){
            updateTask();
        }
        else if(target.matches("#close-modal")) handleModal(false);
    }
});
