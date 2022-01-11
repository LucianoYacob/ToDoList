import taskCount from "./taskCount.js";
import { AddNoteDB, ReadObjectStore } from "../helpers/useIDB.js"
import { handleModal } from "../helpers/handleModal.js";

const d = document;

const addNote = () => {
    const $title = d.getElementById("input-title"),
     $task = d.getElementById("input-task"),
     $deadline = d.getElementById("deadline-input");

    let state = ["fas", "fa-spinner"],
        title = $title.value.trim(),
        task = $task.value.trim(),
        lDate = $deadline.value !== "" ? new Date($deadline.value.replace(/-/g, '\/')).toLocaleDateString() : "none";

    if(title === "" || task === ""){
        alert("You need to write a title and a task");
        return;
    }
    const data = {
        state,
        title,
        sDate: new Date().toLocaleDateString(),
        lDate,
        cDate: undefined,
        task,
    }

    AddNoteDB(data);
    ReadObjectStore();
    taskCount("progress");
    
    handleModal(false);
}

export default addNote;