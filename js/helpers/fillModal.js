import { GetIDBData } from "../helpers/useIDB.js";

const d = document;

export const fillModal = () => {
    let id = d.querySelector(".active").id;
    const $inputTitle = d.getElementById("input-title"),
     $inputTask = d.getElementById("input-task"),
     $startDate = d.querySelector(".dateNow"),
     $deadlineinput = d.getElementById("deadline-input");


    const IDBData = GetIDBData("readonly");
    const cursor = IDBData[0].openCursor();

    cursor.addEventListener("success", () => {
        if(cursor.result){
            if(cursor.result.key == id){
                $inputTitle.value = cursor.result.value.title; 
                $inputTask.value = cursor.result.value.task; 
                $startDate.textContent = cursor.result.value.sDate; 
                $deadlineinput.value = cursor.result.value.lDate; 
            }
            else{
                cursor.result.continue();
            }
        }
    });
}


export default fillModal;