const input = document.querySelector('.block-input')
const button = document.querySelector('button')
const block = document.querySelector('.block-top')

const addNewTask = (text) => {
    const blockLine = document.createElement('div');
    blockLine.classList.add('block-line');
    blockLine.innerHTML = `
    <div class="block-checkbox">
        <input checked type="checkbox">
    </div>
    <p class="block-title">${text} </p>
    `
    block.append(blockLine)
}

button.addEventListener("click", (e) => {
    e.preventDefault();
    addNewTask(input.value)
    input.value = ''
})

//потрібно зробити функціонал для добавлення завдання в список де текст буде братись з input-а




















//потрібто зробити функціонал для запису, і після відображення з памяті(local storage або ще щось ) усього списку задач і його стану( виконаний чи нє)