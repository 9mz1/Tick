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
        status.checked = data[i].status;
        status.addEventListener('change', () => {
            data[i].status = status.checked;
            displayTask();
        });


        let content= document.createElement('input');
        content.type = 'text';
        if (data[i].content === '') {
            content.placeholder = 'Enter task...';
            content.classList.add('content-edit');

            content.addEventListener('blur', () => {
                data[i].content = content.value;
                displayTask();
            });

            content.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') {
                    content.blur();
                }
            });

            setTimeout(() => content.focus(), 0);
        } else {
            content = document.createElement('input');
            content.type = 'text';
            content.classList.add('content');
            content.value = data[i].content;
        }

        if (data[i].status) {
            content.classList.add('checked');
        } else {
            content.classList.remove('checked');
        }

        card.appendChild(status);
        card.appendChild(content);
        listContainer.appendChild(card);
    }
}

export default displayTask;