import state from "./ModalState.js";
import Tasks from "./ModalTasks.js";

const ModalBody = () => {
    const $form = document.createElement("div");

    $form.classList.add("task-form");

    $form.appendChild(state("far", "fa-clipboard"));
    $form.appendChild(TaskInfo());

    return $form;
}

export default ModalBody;