const d = document;

export default function ModalTasks(){
    const $container = d.createElement("div"),
        $titleDiv = d.createElement("div"),
        $noteDiv = d.createElement("div"),
        $titleLabel = d.createElement("label"),
        $taskLabel = d.createElement("label"),
        $input = d.createElement("input"),
        $textArea = d.createElement("textarea");

    $titleLabel.textContent = "Title";
    $taskLabel.textContent = "Task";

    $input.id = "title-input";
    $textArea.id = "task-input";
   
    $input.classList.add("title-input");
    $textArea.classList.add("task-input");
    
    $titleDiv.append($titleLabel, $input);
    $noteDiv.append($taskLabel, $textArea);
    $container.append($titleDiv, $noteDiv);

    $container.classList.add("inputs-container");

    return $container;
}