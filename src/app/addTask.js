import {addTaskToDatabase} from "./tasks"
import displayTask  from "./displayTask";


function addTask() {
    console.log('added')
    addTaskToDatabase();
    displayTask();
}

export default addTask;