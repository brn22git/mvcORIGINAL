function renderTasks(tasks) {
    const taskListContainer = document.getElementById('taskList');
    taskListContainer.innerHTML = ''; // Limpa a lista de tarefas

    tasks.forEach((task, index) => {
        const taskElement = createTaskElement(task, index);
        taskListContainer.appendChild(taskElement);
    });
}

function createTaskElement(task, index) {
    const taskDiv = document.createElement('div');
    taskDiv.classList.add('task');
    taskDiv.innerHTML = `
        <h3 class="task-title">${task.title}</h3>
        <p class="task-desc">${task.description}</p>
        <p class="priority-${task.priority} task-priority"><strong>Prioridade:</strong> ${task.priority}</p>
        <div class="task-buttons">
            <button class="edit-task" data-index="${index}">Editar</button>
            <button class="delete-task" data-index="${index}">Deletar</button>
        </div>
    `;
    return taskDiv;
}

function clearForm() {
    document.getElementById('taskForm').reset();
}

function getFormValues() {
    const title = document.getElementById('taskTitle').value;
    const description = document.getElementById('taskDescription').value;
    const priority = document.getElementById('taskPriority').value;
    return { title, description, priority };
}

export { renderTasks, clearForm, getFormValues };