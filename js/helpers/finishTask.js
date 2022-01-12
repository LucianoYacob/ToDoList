import taskCount from "./taskCount.js";
import { UpdateTask, GetIDBData, ReadObjectStore } from "./useIDB.js";

const finishTask = (target) => {
    const $item = target.parentNode.parentNode;
    const key = parseInt($item.id);

    let finishTask = confirm("Are you sure that finished this task?");

    if(finishTask){
        let dateFinished = target.value;

        const IDBData = GetIDBData("readonly");
        const cursor = IDBData[0].openCursor();
    
        cursor.addEventListener("success", () => {
            if(cursor.result){
                if(cursor.result.key === key){
                    UpdateTask(key, { state: ["far", "fa-thumbs-up"], cDate: dateFinished });
                    target.disabled = true;
                    $item.classList.replace("pend-task", "completed-task");
                    taskCount({dataToModify:"completed", deletTask:false});
                    taskCount({dataToModify:"progress", deletTask:true});
                    ReadObjectStore();
                }  
                else{
                    cursor.result.continue();
                }
            }
        });
    }
    else{
        target.value = undefined;
    }
}

export default finishTask;