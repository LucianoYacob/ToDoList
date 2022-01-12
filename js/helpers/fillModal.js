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
                
                let dateStartParts = cursor.result.value.sDate.split("/");

                $deadlineinput.min = new Date(+dateStartParts[2], dateStartParts[1] - 1, +dateStartParts[0]).toISOString().substring(0, 10);
                
                if(cursor.result.value.lDate !== "none"){
                    let dateLimParts = cursor.result.value.lDate.split("/");
                    $deadlineinput.value = new Date(+dateLimParts[2], dateLimParts[1] - 1, +dateLimParts[0]).toISOString().substring(0, 10);
                }

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
            $deadlineinput.min = new Date().toISOString().split("T")[0]; 

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