import Btn from "./GenericButton.js";

const ToDoFooter = () => {
    const $footer = document.createElement("div"),
        $flexFooter = document.createElement("div"),
        $textContainer = document.createElement("div"),
        $btnContainer = document.createElement("div"),
        $txtCTask = document.createElement("span"),
        $bCTasks = document.createElement("b"),
        $txtPTask = document.createElement("span"),
        $bPTasks = document.createElement("b");
    
    $footer.classList.add("footer");
    $flexFooter.classList.add("flex-footer");
    
    $bCTasks.id = "succes-tasks";
    $bPTasks.id = "pend-tasks";
    $bCTasks.textContent = "0";
    $bPTasks.textContent = "0";
    
    $txtCTask.textContent = `Completed Tasks: `;
    $txtCTask.appendChild($bCTasks);

    $txtPTask.textContent = `In Progress Tasks: `;
    $txtPTask.appendChild($bPTasks);

    $textContainer.appendChild($txtCTask);
    $textContainer.appendChild($txtPTask);
    $flexFooter.appendChild($textContainer);

    $btnContainer.appendChild(Btn("Add Task", "add-task", "btn"));
    $btnContainer.appendChild(Btn("Delete Task", "delete-task", "btn"));
    $flexFooter.appendChild($btnContainer);

    $footer.appendChild($flexFooter);
            
    return $footer;
}

export default ToDoFooter;