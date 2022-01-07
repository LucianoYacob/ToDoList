import Header from "./Header.js";
import Body from "./ModalBody.js";
import Footer from "./ModalFooter.js";

const Modal = () => {
    const $modal = document.createElement("div");

    $modal.classList.add("modal");

    $modal.appendChild(Header(true));
    $modal.appendChild(Body());
    $modal.appendChild(Footer());

    return $modal;
}

export default Modal;