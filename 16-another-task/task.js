'use strict'

let ToDoList = {
    tasks: [],
    idTask: 0,

    getTaskById(taskId) {
        const task = this.tasks?.find(({ id }) => id === taskId) ?? null;
        if (!task) {
            console.log(`Задача с id ${taskId} еще не добавлена в ваш список дел.`);
        }
        return task;
    },

    addTask: function (title, priority) {
        const id = ++this.idTask;
        this.tasks.push({ title, id, priority });
    },

    deleteID: function (id) {
        if (getTaskById(id)) {
            this.tasks = this.tasks.filter((task) => task.id !== id);
            return null
        }
    },

    changeByID: function (newTitle, id) {
        if (getTaskById(taskId)(id)) {
            this.tasks.map((task) => {
                if (task.id === id) {
                    task.title = newTitle;
                }
            });
            return null
        }
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


const getTaskByIdNew = ToDoList.getTaskById.bind(newTask);
const addTaskNew = ToDoList.addTask.bind(newTask);
const deleteIDNew = ToDoList.deleteID.bind(newTask);
const sortPriorityNew = ToDoList.sortPriority.bind(newTask);
const sortIDNew = ToDoList.sortID.bind(newTask);

addTaskNew

