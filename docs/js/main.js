const input = document.querySelector('.block-input')
const button = document.querySelector('button')

const addNewThing = (text) => {
    const blockLine = document.createElement('div');
    blockLine.classList.add('block-line');
    blockLine.innerHTML = ``
}



button.addEventListener("click", (e) => {
    e.preventDefault();
    addNewThing(input.value)
})

//потрібно зробити функціонал для добавлення завдання в список де текст буде братись з input-а




















//потрібто зробити функціонал для запису, і після відображення з памяті(local storage або ще щось ) усього списку задач і його стану( виконаний чи нє)