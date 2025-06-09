let data = [];

function Task(status, content) {
    this.status = status;
    this.content = content;
    this.getInfo = function() {
        console.log(`Status: ${this.status}, Content: ${this.content}`);
    };
}

function addTaskToDatabase() {
    console.log('added to database');
    const status = false;
    const content = '';

    const task = new Task(status, content);
    data.push(task);
    console.table(data);
}

export {data, addTaskToDatabase};

