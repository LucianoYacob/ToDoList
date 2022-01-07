import Header from "./Header.js";
import ModalBody from "./ModalBody.js";

const Modal = () => {
    const $modal = document.createElement("div");

    $modal.classList.add("modal");

    $modal.appendChild(Header());
    $modal.appendChild(ModalBody());

    return $modal;
}

export default Modal;