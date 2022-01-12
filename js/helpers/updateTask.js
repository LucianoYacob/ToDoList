import { UpdateTask, ReadObjectStore } from "../helpers/useIDB.js"
import { handleModal } from "../helpers/handleModal.js";

const d = document;

const updateTask = () => {
    const $title = d.getElementById("input-title"),
     $task = d.getElementById("input-task"),
     $deadline = d.getElementById("deadline-input"),
     key = parseInt(d.getElementById("list").querySelector(".active").id);

    let title = $title.value.trim(),
        task = $task.value.trim(),
        lDate = $deadline.value !== "" ? new Date($deadline.value.replace(/-/g, '\/')).toLocaleDateString() : "none";

    if(title === "" || task === ""){
        alert("You need to write a title and a task");
        return;
    }

    const newData = {
        title,
        lDate,
        task,
    }

    UpdateTask(key, newData);
    ReadObjectStore();
    
    handleModal(false);
}

export default updateTask;