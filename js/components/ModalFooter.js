import Button from "./GenericButton.js"

const ModalFooter = () => {
    const $container = document.createElement("div"),
        $btnContainer = document.createElement("div");

    $container.classList.add("footer");
    $btnContainer.classList.add("btn-container");

    $btnContainer.appendChild(Button("Update Task", "btn-modal-update", "btn-footer"));
    $btnContainer.appendChild(Button("Save Task", "btn-modal-save", "btn-footer"));
    $btnContainer.appendChild(Button("Cancel", "btn-modal-cancel", "btn-footer"));

    $container.appendChild($btnContainer);

    return $container
}

export default ModalFooter;