import state from "./ModalState.js";
import TasksInputs from "./ModalTasks.js";
import StartDate from "./ModalStartDate.js";
import ModalDeadline from "./ModalDeadLine.js";

const ModalBody = () => {
    const $form = document.createElement("div");

    $form.classList.add("task-form");

    $form.appendChild(state("far", "fa-clipboard"));
    $form.appendChild(TasksInputs());
    $form.appendChild(StartDate());
    $form.appendChild(ModalDeadline());

    return $form;
}

export default ModalBody;