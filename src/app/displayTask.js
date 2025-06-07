import {data} from "./tasks";


function displayTask() {
    console.log('displayed');
    const listContainer = document.querySelector('.list-container');
    listContainer.innerHTML = '';

    for (let i = 0; i < data.length; i++) {
        const card = document.createElement('div');
        card.classList.add('card');

        const status = document.createElement('input');
        status.type = 'checkbox';
        status.classList.add('status');
        if (data[i].status === true) {
            status.checked = true;
        } else {
            status.checked = false;
        }

        const content = document.createElement('p');
        content.classList.add('content');
        content.textContent = data[i].content;

        card.appendChild(status);
        card.appendChild(content);
        listContainer.appendChild(card);
    }
}

export default displayTask;