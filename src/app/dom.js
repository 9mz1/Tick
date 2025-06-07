import addTask from "./addTask";

function renderDOM() {
    const container = document.querySelector('.container');

    const heading = document.createElement('h1');
    heading.textContent = 'Tick';
    heading.classList.add('heading');

    const addBtn = document.createElement('button');
    addBtn.textContent = '+';
    addBtn.classList.add('add-btn');
    addBtn.addEventListener('click', addTask);

    const listContainer = document.createElement('div');
    listContainer.classList.add('list-container');

    container.appendChild(heading);
    container.appendChild(addBtn);
    container.appendChild(listContainer);
}

export default renderDOM;