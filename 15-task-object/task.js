'use strict'

let ToDoList = {
    tasks: [],
    idTask: 0,

    checkID: function (id) {
        for (let i=0; i< this.tasks.length; i++){
            if (this.tasks[i].id === id) {
                return true
            }
        }
    },

    addTask: function (title, priority) {
        const id = ++this.idTask;
        this.tasks.push({ title, id, priority });
    },

    deleteID: function (id) {
        if (this.checkID(id)) {
            this.tasks = this.tasks.filter((task) => task.id !== id);
            return null
        }
        console.log(`Item ${id} not found`)
    },

    changeByID: function (newTitle, id) {
        if (this.checkID(id)) {
            this.tasks.map((task) => {
                if (task.id === id) {
                    task.title = newTitle;
                }
            });
            return null
        }
        console.log(`Item ${id} not found`)
    },

    sortPriority: function (a, b) {
        this.tasks.sort((a, b) => a.priority - b.priority)
    },

    sortID: function (a, b) {
        this.tasks.sort((a, b) => a.id - b.id)
    }
}


ToDoList.addTask("Протереть пыль", 4)
ToDoList.addTask("Приготовить ужин", 10)
ToDoList.addTask("Помыть пол", 5)



// console.log(ToDoList.tasks);
// console.log('---');


// ToDoList.deleteID(2);
// console.log(ToDoList.tasks);
// console.log('---');

// ToDoList.changeByID("купить крокодила", 2);
// console.log(ToDoList.tasks);
// console.log('---');

// ToDoList.sortPriority();
// console.log(ToDoList.tasks);
// console.log('---');

// ToDoList.sortID();
// console.log(ToDoList.tasks);