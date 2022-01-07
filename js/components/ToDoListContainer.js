const ToDoListContainer = () => {
    const $listContainer = document.createElement("div"),
        $listUl = document.createElement("ul");

    $listContainer.classList.add("list-container");
    $listUl.classList.add("flex-list");

    $listContainer.appendChild($listUl);

    return $listContainer;
}

export default ToDoListContainer;