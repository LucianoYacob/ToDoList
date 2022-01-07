export default function ModalStartDate(){
    const $container = document.createElement("div"),
        $spanDate = document.createElement("span");

    const date = new Date().toLocaleDateString();

    $spanDate.classList.add("dateNow");

    $spanDate.textContent = date;
    $container.appendChild($spanDate);

    return $container;
}