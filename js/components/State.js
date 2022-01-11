export default function State(...iconClass){
    const $container = document.createElement("div"),
        $icon = document.createElement("i");


    $icon.id = "icon-state";
    $icon.classList.add(...iconClass);

    $container.appendChild($icon);

    return $container;
}