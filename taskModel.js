// taskModel.js
class Task {
    constructor(title, description, priority) {
        this.title = title;
        this.description = description;
        this.priority = priority;
    }
}

const tasks = [];

function addTask(title, description, priority) {
    const task = new Task(title, description, priority);
    tasks.push(task);
    return task;
}

function removeTask(taskIndex) {
    tasks.splice(taskIndex, 1);
}

function updateTask(taskIndex, updatedTask) {
    tasks[taskIndex] = updatedTask;
}

function getTasks() {
    return tasks;
}

export { addTask, removeTask, updateTask, getTasks };
