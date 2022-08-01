const input = document.querySelector('.block-input');
const button = document.querySelector('button');
const block = document.querySelector('.block-top');
let id = 0;
let arrayGlobal = [];

button.addEventListener("click", (e) => {
    e.preventDefault();
    if (input.value) {
        id++
        setLocalStorageInput(input.value, id, false)
        addNewTask(input.value, false);
        input.value = '';
    }
});

addNewTask = (text, value) => {
    const blockLine = document.createElement('div');
    blockLine.classList.add('block-line');
    blockLine.innerHTML = `
    <div class="block-checkbox">
    ${value ? `<input  type="checkbox" checked >` : `<input  type="checkbox" >`}
    </div>
    <p class="block-title">${text} </p>
    `;
    block.append(blockLine);

};
setLocalStorageInput = (text, id, boolean) => {
    arrayGlobal.push({ name: text, id: id, value: boolean })
    localStorage.setItem('task', JSON.stringify(arrayGlobal));
}

getLocalStorageInput = () => {
    let array = localStorage.getItem('task');
    array = JSON.parse(array);
    if (array) {
        //запис ід в глабальну константу
        array.forEach(e => { id = e.id; })
        // добавлення данних з storage в константу
        arrayGlobal.push(...array);
        // відображення tasks
        arrayGlobal.forEach(e => {
            const { name, value } = e;
            addNewTask(name, value)
        })
    } else {
        arrayGlobal = [];
    };
};
getLocalStorageInput()

block.addEventListener('click', (e) => {
    const child = document.querySelectorAll('input[type=checkbox]')
    child.forEach((element, id) => {
        if (e.target === element) {
            changeValue(id)
        }
    })
})

changeValue = (id) => {
    let array = localStorage.getItem('task');
    array = JSON.parse(array);
    if (array[id].value) {
        array[id].value = false;
    } else {
        array[id].value = true;
    }
    localStorage.setItem("task", JSON.stringify(array));
}


