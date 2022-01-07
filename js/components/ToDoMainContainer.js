import Footer from "./ToDoFooter.js";
import Header from "./Header.js";
import List from "./ToDoListContainer.js";

const ToDoMainContainer = () => {
    const $container = document.createElement("main");

    $container.classList.add("main");

    $container.appendChild(Header());
    $container.appendChild(List());
    $container.appendChild(Footer(false));

    return $container;
}

export default ToDoMainContainer;