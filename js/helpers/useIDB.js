import Item from "../components/Item.js";

const d = document;

export const IDBRequest = indexedDB.open("db", 1);

IDBRequest.addEventListener("upgradeneeded", () => {
    const DB = IDBRequest.result;
    DB.createObjectStore("Tasks", { autoIncrement: true });
});

export const GetIDBData = (readMode) => {
    const DB = IDBRequest.result;
    const IDBTransaction = DB.transaction("Tasks", readMode);
    const objectstore = IDBTransaction.objectStore("Tasks");
    
    return [objectstore, IDBTransaction];
}

export const ReadObjectStore = () => {
    const $list = d.getElementById("list");

    const IDBData = GetIDBData("readonly");
    const cursor = IDBData[0].openCursor();

    const documentFragment = document.createDocumentFragment();

    $list.innerHTML = "";

    cursor.addEventListener("success", () => {
        let res = cursor.result;

        if(res){
            let liElemen = Item(res.key, res.value.state, res.value.title, res.value.sDate, res.value.lDate, res.value.cDate);
            documentFragment.appendChild(liElemen);
            cursor.result.continue();
        }
        $list.appendChild(documentFragment);
    });
}


export const AddNoteDB = objectNote => {
    const IDBData = GetIDBData("readwrite");
    IDBData[0].add(objectNote);
    IDBData[1].addEventListener("complete", () => {
        alert("Task added successfully");
    });
}

export const deleteData  = key => {
    const IDBData = GetIDBData("readwrite");
    IDBData[0].delete(key);
    IDBData[1].addEventListener("complete", () => {
        alert("Task removed");
    });
}

// Poner a todos los metodos data en vez de task
export const UpdateTask = async (key, newData) => {
    const IDBData = GetIDBData("readwrite");
    const cursor = IDBData[0].openCursor();

    cursor.onsuccess = await function(e){
        let cursor = e.target.result;
        if(cursor){
            if(cursor.primaryKey === key){
                const oldData = cursor.value;
                
                IDBData[0].put({...oldData, ...newData}, key);
                IDBData[1].addEventListener("success", alert("Task updated"));
            }

            cursor.continue();
        }
    };
}