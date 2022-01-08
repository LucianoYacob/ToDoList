import State from "./State.js";
import Container from "./GenericContainer.js";

const d = document;

export default function Item() {
    const $li = d.createElement("li"),
        $title = d.createElement("span"),
        $startD = d.createElement("span"),
        $limitD= d.createElement("span"),
        $fisnishedD = d.createElement("input"),
        $btnUpdate = d.createElement("button");

    $li.classList.add("item");
    $title.classList.add("title");
    $startD.classList.add("startD");
    $limitD.classList.add("limitD");
    $fisnishedD.classList.add("finishedD");
    $btnUpdate.classList.add("btn-open-task");

    const $cont0 = Container(State("far", "fa-clipboard"));
    const $cont1 = Container($title);
    const $cont2 = Container($startD);
    const $cont3 = Container($limitD);
    const $cont4 = Container($fisnishedD);

    $title.id = "sp-title";
    $startD.id = "sp-started";
    $limitD.id = "sp-limit";
    $fisnishedD.id = "sp-finished";
    $btnUpdate.id = "btn-open-task";

    $btnUpdate.textContent = "↑";
    $fisnishedD.type = "date";

    $cont1.appendChild($btnUpdate);
    $li.appendChild($cont0);
    $li.appendChild($cont1);
    $li.appendChild($cont2);
    $li.appendChild($cont3);
    $li.appendChild($cont4);

    return $li;
}