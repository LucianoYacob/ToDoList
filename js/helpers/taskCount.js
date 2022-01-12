const taskCount = ({dataToModify = "", deletTask, deleteAll}) => {
    const $completedTasks = document.getElementById("succes-tasks"),
        $pendTasks = document.getElementById("pend-tasks");

    if(!localStorage.getItem("taskCounter")){
        localStorage.setItem("taskCounter", JSON.stringify({inProgress:0, completed: 0}));
    }

    const countData = JSON.parse(localStorage.getItem("taskCounter"));

    if(dataToModify === "progress"){
        if(deletTask) {
            countData.inProgress--;
            +$pendTasks.textContent--;
        }
        else{ 
            countData.inProgress++;
            +$pendTasks.textContent++;
        }
        localStorage.setItem("taskCounter", JSON.stringify(countData));
    }
    else if(dataToModify === "completed"){
        if(deletTask) {
            countData.completed--;
            +$completedTasks.textContent--;    
        }
        else{
            countData.completed++;
            +$completedTasks.textContent++;
        }
        localStorage.setItem("taskCounter", JSON.stringify(countData));
    }

    if(deleteAll){
        countData.inProgress = 0;
        countData.completed = 0;
        $pendTasks.textContent = 0;
        $completedTasks.textContent = 0;

        localStorage.setItem("taskCounter", JSON.stringify(countData));
    }
}

export default taskCount;