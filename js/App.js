import Modal from "./components/Modal.js";
import ToDoMainContainer from "./components/ToDoMainContainer.js";

const App = () => {
    const $root = document.getElementById("root");
    
    $root.innerHTML = null;

    $root.appendChild(ToDoMainContainer());
    $root.appendChild(Modal());
}

export default App;