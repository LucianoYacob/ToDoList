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

    $input.type = "text";
    $textArea.rows = 4;

    $input.id = "input-title";
    $textArea.id = "input-task";
   
    $input.classList.add("title-input");
    $textArea.classList.add("task-input");
    
    $titleDiv.append($titleLabel, $input);
    $noteDiv.append($taskLabel, $textArea);
    $container.append($titleDiv, $noteDiv);

    $container.classList.add("inputs-container");

    return $container;
}