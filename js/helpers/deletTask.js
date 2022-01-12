import { deleteData, GetIDBData } from "./useIDB.js";
import taskCount from "./taskCount.js";

const deleteTask = () => {
    const $list = document.getElementById("list"),
        $elmentsToDelete = $list.querySelectorAll(".selected");



    if($elmentsToDelete.length === 0){
        let deleteTs = confirm("are you sure to delete all tasks?");

        if(deleteTs){
            const $allItems = $list.querySelectorAll("li");
            for(let $item of $allItems) {
                let key = parseInt($item.id);
               
                isNaN(key) 
                ? $list.removeChild($item)
                : (
                    deleteTasks(key),
                    $list.removeChild($item),
                    taskCount({deleteAll: true})
                )
            }
            alert("Tasks removed")  
        }
    }
    else{
        let deleteTs = confirm("are you sure to delete that task/s?");

        if(deleteTs){ 
            $elmentsToDelete.forEach($item => {
                let key = parseInt($item.id);
                isNaN(key) 
                ? $list.removeChild($item) 
                : (
                    deleteTasks(key),
                    $item.classList.contains("completed-task") && taskCount({dataToModify:"completed", deletTask:true}),
                    $item.classList.contains("pend-task") && taskCount({dataToModify:"progress", deletTask:true}),
                    $list.removeChild($item)
                )
            });
            alert("Task removed")
        }
    }
}

export const selecItem = (element) => {
    const $selectedElement = element.parentNode;

    if($selectedElement.classList.contains("selected")){
        $selectedElement.classList.remove("selected")
    }
    else{
        element.parentNode.classList.add("selected");
    }
}

const deleteTasks = (key) => {
    const IDBData = GetIDBData("readonly");
    const cursor = IDBData[0].openCursor();

    cursor.addEventListener("success", () => {
        if(cursor.result){
            if(cursor.result.key == key){
                deleteData(key);
            }  
            else{
                cursor.result.continue();
            }
        }
    });
}

export default deleteTask;