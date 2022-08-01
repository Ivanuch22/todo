
const input = document.querySelector('.block-input');
const button = document.querySelector('button');
const block = document.querySelector('.block-top');
let id = 0;
let arrayGlobal = [];

//////
button.addEventListener("click", (e) => {
    e.preventDefault();
    if (input.value) {
        id++
        addNewTask(input.value, id);
        setLocalStorageInput(input.value, id)
        chageLocalValue()
        input.value = '';
    }

});

addNewTask = (text, id = 0, value = false) => {
    const blockLine = document.createElement('div');
    blockLine.classList.add('block-line');

    blockLine.innerHTML = `
    <div class="block-checkbox">
        ${value ? `<input  type="checkbox" checked id = "${id}">` : `<input  type="checkbox" id = "${id}">`}
    </div>
    <p class="block-title">${text} </p>
    `;
    block.append(blockLine);



};


setLocalStorageInput = (text, id, boolean = false) => {
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
            const { name, id, value } = e;
            addNewTask(name, id, value)
        })
    } else {
        arrayGlobal = [];
    };
    return array;
};
getLocalStorageInput();


chageLocalValue = () => {
    const checkboxs = document.querySelectorAll('input[type= checkbox]');
    checkboxs.forEach((element, id) => {
        element.addEventListener("click", (e) => {
            console.log("Hello")
            if (e.target.checked) {
                changeValue(id)
            } else {
                changeValue(id)

            }
        })
    })
    changeValue = (id) => {
        let array = localStorage.getItem('task');
        array = JSON.parse(array);
        array[id].value = !array[id].value;
        localStorage.setItem("task", JSON.stringify(array))
    }

}
chageLocalValue()








