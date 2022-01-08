const d = document;

export const handleModal = (target) => {
    if(target.matches("#btn-open-task")){
        d.getElementById("input-title").value = "";
        d.getElementById("input-task").value = "";
        d.getElementById("deadline-input").disabled = false;

        ChangeVisibility(3, 1, false)
    }
    else if(target.matches("#close-modal") || target.matches("#btn-save-task")){
        ChangeVisibility(0, 0, true)

        // Remove class "active" of the clicked element
        const $list = d.getElementById("list").children;
        for (const li of $list) {
            if(li.classList.contains("active")){
                li.classList.remove("active");
            }
        }
    }
    else if(e.target.matches(".update")){
        ChangeVisibility(3, 1, false)
    }
}


export function ChangeVisibility(blurAmount, opacity, shutDown){
    const $modal = d.getElementById("modal"),
        $main = d.getElementById("main");
    
    let visibility = shutDown ? "hidden" : "visible";

    $main.style.filter = `blur(${blurAmount}px)`;
    $modal.style.opacity = `${opacity}`;
    
    if(shutDown){
        d.getElementById("deadline-input").disabled = true;
        setTimeout(
            () => $modal.style.visibility = visibility,
            900
        );
    }
    else
        $modal.style.visibility = visibility;
}