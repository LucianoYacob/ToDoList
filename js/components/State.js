export default function State(...iconClass){
    const $container = document.createElement("div"),
        $icon = document.createElement("i");

    $icon.classList.add("icon-state", ...iconClass);

    $container.appendChild($icon);

    return $container;
}