export default function ModalDeadline(){
    const $container = document.createElement("div"),
        $input = document.createElement("input");

    $input.classList.add("deadline-input");
    $input.type = "date"
    $input.id = "deadline-input";
    $input.disabled = true;


    $container.appendChild($input);

    return $container;
}