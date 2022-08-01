
const input = document.querySelector('.block-input');
const button = document.querySelector('button');
const block = document.querySelector('.block-top');
let id = 0;
let arrayGlobal = [];
// event на створеному таску а саме на checkbox
// getCheckboxs = () => {
//     const checkboxs = document.querySelectorAll('input[type=checkbox]')
//     checkboxs.forEach(element => {
//         element.addEventListener("click", (e) => {
//             console.log(e.target.id)
//         })
//     });
// }

//////
button.addEventListener("click", (e) => {
    e.preventDefault();
    id++
    addNewTask(input.value, id);
    setLocalStorageInput(input.value, id)

    input.value = '';
});

addNewTask = (text, id = 0) => {
    const blockLine = document.createElement('div');
    blockLine.classList.add('block-line');
    // blockLine.setAttribute('id', id);

    blockLine.innerHTML = `
    <div class="block-checkbox">
        <input  type="checkbox" id = "${id}">
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
        arrayGlobal.push(...array);
        arrayGlobal.forEach(e => {
            const { name, id } = e;
            addNewTask(name, id)
        })
    } else {
        arrayGlobal = [];
    };
    return array;
};
getLocalStorageInput();
















