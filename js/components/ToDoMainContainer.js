import Footer from "./ToDoFooter.js";
import Header from "./ToDoHeader.js";


const ToDoMainContainer = () => {
    const $container = document.createElement("main");

    $container.classList.add("main");

    $container.appendChild(Header());
    $container.appendChild(Footer());

    return $container;
}

export default ToDoMainContainer;