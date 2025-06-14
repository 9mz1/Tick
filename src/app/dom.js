import addTask from "./addTask";

function renderDOM() {
    const container = document.querySelector('.container');

    const leftContainer = document.createElement('div');
    leftContainer.classList.add('left-container');

    const rightContainer = document.createElement('div');
    rightContainer.classList.add('right-container');

    const title = document.createElement('h1');
    title.textContent = 'Tick';
    title.classList.add('title');

    const header = document.createElement('div');
    header.classList.add('header');

    const heading = document.createElement('h1');
    heading.textContent = 'Basic Todo\'s';
    heading.classList.add('heading');

    const addBtn = document.createElement('button');
    addBtn.textContent = '+';
    addBtn.classList.add('add-btn');
    addBtn.addEventListener('click', addTask);

    const listContainer = document.createElement('div');
    listContainer.classList.add('list-container');

    header.appendChild(heading);
    header.appendChild(addBtn);
    leftContainer.appendChild(title);
    rightContainer.appendChild(header);
    rightContainer.appendChild(listContainer);
    container.appendChild(leftContainer);
    container.appendChild(rightContainer);
}

export default renderDOM;