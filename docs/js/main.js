const input = document.querySelector('.block-input');
const button = document.querySelector('button');
const block = document.querySelector('.block-top');

const arrayTasks = [];


//set localstorage with text from input 
const updateLocalStorage = (text) => {
    // беремо данні з сховку до того як ми їх змінили 
    const before = JSON.parse(localStorage.getItem('tasks'));

    // змінюємо їх 
    arrayTasks.push({ text: text });

    // данні, масив який містить нову інформацію без старої 
    const after = JSON.parse(JSON.stringify(arrayTasks));

    // до купи і старі данні і нові
    let newArrayTasks = []
    if (before) {
        newArrayTasks = [...before, ...after]
    } else {
        newArrayTasks = [...after]

    }
    // відправляєм у сховок набір з старих і нових данних
    localStorage.setItem("tasks", JSON.stringify(newArrayTasks));
};

const renderTasks = () => {
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    tasks.forEach(element => {
        addNewTask(element.text);
    });
};


////
const addNewTask = (text) => {
    const blockLine = document.createElement('div');
    blockLine.classList.add('block-line');
    blockLine.innerHTML = `
    <div class="block-checkbox">
        <input  type="checkbox">
    </div>
    <p class="block-title">${text} </p>
    `;
    block.append(blockLine);
};

//////
button.addEventListener("click", (e) => {
    const inputValue = input.value;
    e.preventDefault();
    addNewTask(inputValue);
    updateLocalStorage(inputValue);
    input.value = '';
});

renderTasks();



//потрібно зробити функціонал для добавлення завдання в список де текст буде братись з input-а




















//потрібто зробити функціонал для запису, і після відображення з памяті(local storage або ще щось ) усього списку задач і його стану( виконаний чи нє)