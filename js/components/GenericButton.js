export default function GenericButton(valueText, id, ...classNames) {
    const $btn = document.createElement("button");

    $btn.id = id;
    $btn.classList.add('btn', ...classNames);
    $btn.textContent = valueText;

    return $btn;
}