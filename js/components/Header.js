const Header = (isModal = false) => {
    const $header = document.createElement("div"),
        $flexContainer = document.createElement("div");

    const titles = isModal
        ? ["State", "Tasks", "Start Date", "Deadline"] 
        : ["State", "Tasks", "Start Date", "Deadline", "Completed Date"]
        
    $header.classList.add("header");
    $flexContainer.classList.add("flex-row");

    titles.forEach((title) => {
        const $title = document.createElement("h3");
        const $titleContainer = document.createElement("div");

        $title.classList.add("title");
        $titleContainer.classList.add("title-item");

        $title.textContent = title;
        $titleContainer.appendChild($title);


        $flexContainer.appendChild($titleContainer);
    });

    $header.appendChild($flexContainer);

    return $header;
}

export default Header;