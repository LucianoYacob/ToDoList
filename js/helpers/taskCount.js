const taskCount = (dataToModify = "") => {
    if(!localStorage.getItem("taskCounter")){
        localStorage.setItem("taskCounter", JSON.stringify({inProgress: 0, completed: 0}));
    }

    const oldCounter = JSON.parse(localStorage.getItem("taskCounter"));
    localStorage.setItem("taskCounter", JSON.stringify({inProgress: oldCounter.inProgress++, completed: oldCounter.completed++}));

    oldCounter.inProgress++;
    oldCounter.completed++;

    console.log(oldCounter);
}

export default taskCount;