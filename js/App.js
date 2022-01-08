import Modal from "./components/Modal.js";
import ToDoMainContainer from "./components/ToDoMainContainer.js";
import { IDBRequest, ReadObjectStore } from "./helpers/useIDB.js";

const App = () => {
    const $root = document.getElementById("root");
    
    $root.innerHTML = null;

    $root.appendChild(ToDoMainContainer());
    $root.appendChild(Modal());

    IDBRequest.addEventListener("success", () => ReadObjectStore());
}

export default App;