var data = [];

function Task(status, content) {
    this.status = status;
    this.content = content;
    this.getInfo = function() {
        console.log(`Status: ${this.status}, Content: ${this.content}`);
    };
}

function addTaskToDatabase() {
    console.log('added to database');
    // const status = document.querySelector('.status').value;
    // const content = document.querySelector('.content').value;
    const status = true;
    const content = 'Eat food';

    const task = new Task(status, content);
    data.push(task);
    console.table(data);
}

export {data, addTaskToDatabase};

