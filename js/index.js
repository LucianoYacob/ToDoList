import App from "../js/App.js";
import { handleModal } from "./helpers/handleModal.js";
import appendItem  from "./helpers/appendItem.js";
import addTask  from "./helpers/addTask.js";

const d = document;

d.addEventListener("DOMContentLoaded", App);

d.addEventListener("click", e => {
    let target = e.target;

    if(target.matches("#btn-add")){
        appendItem();
    }

    if(target.matches("#btn-open-task")){
        target.parentNode.parentNode.classList.add("active");
        handleModal(true);
    }
    else if(target.matches("#close-modal") || target.matches("#btn-save-task") || target.matches("#btn-update-task"))
    {
        if(target.matches("#btn-save-task")){
            addTask();
        }
        else if(target.matches("#close-modal")) handleModal(false);
    }
});
