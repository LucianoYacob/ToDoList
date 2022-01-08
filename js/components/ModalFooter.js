import Button from "./GenericButton.js"

const ModalFooter = () => {
    const $container = document.createElement("div"),
        $btnContainer = document.createElement("div");

    $container.classList.add("footer");
    $btnContainer.classList.add("btn-container");

    $btnContainer.appendChild(Button("Update Task", "btn-update-task", "btn-footer"));
    $btnContainer.appendChild(Button("Save Task", "btn-save-task", "btn-footer"));
    $btnContainer.appendChild(Button("Cancel", "close-modal", "btn-footer"));

    $container.appendChild($btnContainer);

    return $container
}

export default ModalFooter;