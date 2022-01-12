const Header = (onModal = false) => {
    const $header = document.createElement("div"),
        $flexContainer = document.createElement("div");

    const titles = onModal
        ? ["State", "Tasks", "Start Date", "Deadline"] 
        : ["State", "Tasks", "Start Date", "Deadline", "Completed Date"];
        
    $header.classList.add("header");
    $flexContainer.classList.add("flex-row");

    const $fragment = document.createDocumentFragment();
    titles.forEach((title) => {
        const $title = document.createElement("h3");
        const $titleContainer = document.createElement("div");

        $title.classList.add("title");
        $titleContainer.classList.add("title-item");

        $title.textContent = title;
        $titleContainer.appendChild($title);


        $fragment.appendChild($titleContainer);
    });
    
    $flexContainer.appendChild($fragment);
    $header.appendChild($flexContainer);

    return $header;
}

export default Header;