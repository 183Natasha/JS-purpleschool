'use strict'

let ToDoList = {
    tasks: [],
    idTask: 0,

    addTask: function (title, priority) {
        const id = ++this.idTask;
        this.tasks.push({ title, id, priority });
    },

    deleteID: function (taskId) {
        const task = this.tasks?.find(({ id }) => id === taskId) ?? null;
        if (!task) {
            console.log(`Задача с id ${taskId} еще не добавлена в ваш список дел.`);
        }
        return this.tasks = this.tasks.filter((task) => task.id !== taskId);
    },

    changeByID: function (newTitle, taskId) {
        const task = this.tasks?.find(({ id }) => id === taskId) ?? null;
        if (!task) {
            console.log(`Задача с id ${taskId} еще не добавлена в ваш список дел.`);
        }
        return this.tasks.map((task) => {
            if (task.id === taskId) {
                task.title = newTitle;
            }
        })
    },

    sortPriority: function (a, b) {
        this.tasks.sort((a, b) => a.priority - b.priority)
    },

    sortID: function (a, b) {
        this.tasks.sort((a, b) => a.id - b.id)
    }
}

const newTask = {
    tasks: [{
        id: 1,
        name: "тест",
        descriotion: 'описание',
        order: 0
    }],
    idTask: 1,
}


const addTaskNew = ToDoList.addTask.bind(newTask);
const deleteIDNew = ToDoList.deleteID.bind(newTask);
const changeByIDNew = ToDoList.changeByID.bind(newTask);
const sortPriorityNew = ToDoList.sortPriority.bind(newTask);
const sortIDNew = ToDoList.sortID.bind(newTask);

addTaskNew("Выпить витамины", 5);
addTaskNew("Позвонить маме", 2);
addTaskNew("Купить абрикосы", 6);

// deleteIDNew(4)
// console.log(newTask.tasks)
// console.log('---')

// changeByIDNew('Купить крокодила', 2)
// console.log(newTask.tasks)
// console.log('---')

// sortPriorityNew()
// console.log(newTask.tasks)
// console.log('---')

// sortIDNew()
// console.log(newTask.tasks)
// console.log('---')