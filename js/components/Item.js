const d = document;

export default function Item(id, state, title, sDate, lDate, cDate) {
    const $template = d.getElementById("item-template").content;
    let $tClone = document.importNode($template, true)

    $tClone.getElementById("sp-title").textContent = title || "";
    $tClone.getElementById("sp-started").textContent = sDate || "";
    $tClone.getElementById("sp-limit").textContent = lDate || "";
    $tClone.getElementById("sp-finished").value = cDate || "";
    $tClone.getElementById("sp-finished").value !== "" && ($tClone.getElementById("sp-finished").disabled = "true");
    $tClone.getElementById("sp-finished").min = new Date().toISOString().split("T")[0];

    $tClone.getElementById("icon-state").classList.add(...state || ["far", "fa-clipboard"]);

    id && ($tClone.querySelector(".item").id = id);

    let $childrenClone = document.importNode($tClone, true).firstElementChild;

    return $childrenClone;
}