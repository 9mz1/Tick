import addTask from "./addTask";

function renderDOM() {
    const container = document.querySelector('.container');

    const leftContainer = document.createElement('div');
    leftContainer.classList.add('left-container');

    const rightContainer = document.createElement('div');
    rightContainer.classList.add('right-container');

    const header = document.createElement('div');
    header.classList.add('header');

    const heading = document.createElement('h1');
    heading.textContent = 'Default Todo\'s';
    heading.classList.add('heading');

    const addBtn = document.createElement('button');
    addBtn.textContent = '+';
    addBtn.classList.add('add-btn');
    addBtn.addEventListener('click', addTask);

    const listContainer = document.createElement('div');
    listContainer.classList.add('list-container');

    header.appendChild(heading);
    header.appendChild(addBtn);
    rightContainer.appendChild(header);
    rightContainer.appendChild(listContainer);
    container.appendChild(leftContainer);
    container.appendChild(rightContainer);
}

export default renderDOM;