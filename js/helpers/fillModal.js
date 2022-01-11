import { GetIDBData } from "../helpers/useIDB.js";

const d = document;

export const fillModal = () => {
    let id = d.querySelector(".active").id;
    const $modal = d.getElementById("modal"),
     $inputTitle = d.getElementById("input-title"),
     $iconState = $modal.querySelector("#icon-state"),
     $inputTask = d.getElementById("input-task"),
     $startDate = d.querySelector(".dateNow"),
     $deadlineinput = d.getElementById("deadline-input"),
     $btnSave = d.getElementById("btn-save-task"),
     $btnUpdate = d.getElementById("btn-update-task");


    const IDBData = GetIDBData("readonly");
    const cursor = IDBData[0].openCursor();

    cursor.addEventListener("success", () => {
        if(cursor.result){
            if(cursor.result.key == id){
                let iconClass = cursor.result.value.state.toString().replace(",", " ");
                $iconState.className = iconClass;
                $inputTitle.value = cursor.result.value.title; 
                $inputTask.value = cursor.result.value.task; 
                $startDate.textContent = cursor.result.value.sDate; 
                let dateParts = cursor.result.value.lDate.split("/");
                $deadlineinput.value = new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0]).toISOString().substring(0, 10);

                $btnSave.disabled = true;
                $btnSave.classList.add("disabled");
                $btnSave.classList.remove("actived");

                $btnUpdate.disabled = false;
                $btnUpdate.classList.remove("disabled");
                $btnUpdate.classList.add("actived");
            }
            else{
                cursor.result.continue();
            }
        }
        else{
            let iconClass = ["far", "fa-clipboard"].toString().replace(",", " ");
            $iconState.className = iconClass;
            $inputTitle.value = ""; 
            $inputTask.value = ""; 
            $startDate.textContent = new Date().toLocaleDateString(); 
            $deadlineinput.value = null; 

            $btnSave.disabled = false;
            $btnSave.classList.remove("disabled");
            $btnSave.classList.add("actived");
            
            $btnUpdate.disabled = true;
            $btnUpdate.classList.remove("actived");
            $btnUpdate.classList.add("disabled");
        }
    });
}


export default fillModal;