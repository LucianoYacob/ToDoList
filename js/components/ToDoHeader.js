const ToDoHeader = () => {
    const $header = document.createElement("div"),
        $flexContainer = document.createElement("div");

    const titles = ["State", "Tasks", "Start Date", "Deadline", "Completed Date"];
        
    $header.classList.add("main-header");
    $flexContainer.classList.add("flex-row");

    titles.forEach((title) => {
        const $title = document.createElement("h3");
        const $titleContainer = document.createElement("div");

        $title.classList.add("title");
        $titleContainer.classList.add("title-container");

        $title.textContent = title;
        $titleContainer.appendChild($title);


        $flexContainer.appendChild($titleContainer);
    });

    $header.appendChild($flexContainer);

    return $header;
}

export default ToDoHeader;