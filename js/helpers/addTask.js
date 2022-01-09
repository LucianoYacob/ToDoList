import { AddNoteDB, ReadObjectStore } from "../helpers/useIDB.js"
import { handleModal } from "../helpers/handleModal.js";

const d = document;

const addNote = () => {
    const $title = d.getElementById("input-title"),
     $task = d.getElementById("input-task"),
     $deadline = d.getElementById("deadline-input"),
     $activeElement = d.querySelector(".active");

    let title = $title.value.trim(),
        task = $task.value.trim(),
        lDate= new Date($deadline.value.replace(/-/g, '\/')).toLocaleDateString();

    if(title === "" || task === ""){
        alert("You need to write a title and a task");
        return;
    }

    const data = {
        state: undefined,
        title,
        sDate: new Date().toLocaleDateString(),
        lDate,
        cDate: undefined,
        task,
    }

    AddNoteDB(data);
    ReadObjectStore();
    
    handleModal(false);
}

export default addNote;