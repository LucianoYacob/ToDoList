import App from "../js/App.js";
import { handleModal } from "./helpers/handleModal.js";
import addNote  from "./helpers/appendNote.js";

const d = document;

d.addEventListener("DOMContentLoaded", App);

d.addEventListener("click", e => {
    let target = e.target;

    if(target.matches("#btn-open-task") || target.matches("#close-modal") || target.matches("#btn-save-task")){
        if(target.matches("#btn-open-task")){
            target.parentNode.parentNode.classList.add("active");
        }

        handleModal(target);
    }

    if(target.matches("#btn-add")){
        addNote();
    }
});
