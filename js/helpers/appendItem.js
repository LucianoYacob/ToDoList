import Item from "../components/Item.js";
const d = document;

// this method is responsible of append a item to ul list
const appendNote = () => {
    const $list = d.getElementById("list");
   
    $list.appendChild(Item());
}

export default appendNote;