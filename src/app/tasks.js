var data = [];

function Task(status, content) {
    this.status = status;
    this.content = content;
    this.getInfo = function() {
        console.log(`Status: ${this.status}, Content: ${this.content}`);
    };
}

function addTaskToDatabase() {
    // const status = document.querySelector('.status').value;
    // const content = document.querySelector('.content').value;
    const status = 'done';
    const content = 'Eat food';

    const task = new Task(status, content);
    data.push(task);
    console.table(data);
}

