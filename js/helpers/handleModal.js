import fillModal from "../helpers/fillModal.js";

const d = document;

export const handleModal = (open) => {
    if(open){
        ChangeVisibility(3, 1, false);
        fillModal();
    }
    else if(!open){
        ChangeVisibility(0, 0, true)

        // Remove class "active" of the clicked element
        const $list = d.getElementById("list").children;
        for (const li of $list) {
            if(li.classList.contains("active")){
                li.classList.remove("active");
            }
        }
    }
}

function ChangeVisibility(blurAmount, opacity, shutDown){
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
    else{
        d.getElementById("deadline-input").disabled = false;
        $modal.style.visibility = visibility;
    }
}