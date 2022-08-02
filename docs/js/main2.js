const input = document.querySelector('.block-input');
const button = document.querySelector('button');
const block = document.querySelector('.block-top');
const data = [];

class Task {
    constructor(text) {
        this.text = text;
        this.completed = false
    }
    addNewTask = (completed = false) => {
        if (this.text) {
            const blockLine = document.createElement('div');
            blockLine.classList.add('block-line');
            blockLine.innerHTML = `
    <div class="block-checkbox">
        <input  type="checkbox" ${completed ? "checked" : ""}>

    </div>
    <p class="block-title">${this.text} <div  class="block-button">Удалить</div> </p>
    `;
            block.append(blockLine);
        }
    };
    addNewTaskLocal = () => {
        data.push({ text: this.text, completed: this.completed })
        localStorage.setItem('tasks', JSON.stringify(data))
    };
    changeValue = () => {
        block.addEventListener('click', (e) => {
            const child = document.querySelectorAll('input[type=checkbox]')
            child.forEach((element, id) => {
                if (e.target === element) {
                    console.log(element)
                    if (element.checked) {
                        data[id].completed = true;
                        this.completed = true
                    } else {
                        this.completed = false
                        data[id].completed = false;
                    }
                    localStorage.setItem("tasks", JSON.stringify(data))
                }
            })
        })
    }
    deleteTask = (id) => {
        data.splice(id, 1);
        localStorage.setItem("tasks", JSON.stringify(data))
        this.render()
    }
    render = () => {
        block.innerHTML = ''
        data.forEach(element => {
            const fisrtTask = new Task(element.text);
            fisrtTask.addNewTask(element.completed);
        })
    }
}
renderFromStore = () => {
    const storageData = JSON.parse(localStorage.getItem('tasks'));
    if (storageData) {
        data.push(...storageData)
        data.forEach(element => {
            const fisrtTask = new Task(element.text);
            fisrtTask.addNewTask(element.completed);
            fisrtTask.changeValue()
        })
    }
}
button.addEventListener('click', (e) => {
    e.preventDefault()
    const fisrtTask = new Task(input.value);
    fisrtTask.addNewTask(fisrtTask.completed)
    fisrtTask.addNewTaskLocal()
    fisrtTask.changeValue()
    input.value = '';
})
block.addEventListener('click', (e) => {
    const child = document.querySelectorAll('.block-button')
    child.forEach((element, id) => {
        if (e.target === element) {
            e.preventDefault()
            const fisrtTask = new Task(input.value);
            fisrtTask.deleteTask(id)

        }
    })
})
renderFromStore()
