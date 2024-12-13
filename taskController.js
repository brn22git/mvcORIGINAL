// taskController.js
import { addTask, removeTask, updateTask, getTasks } from './taskModel.js';
import { renderTasks, clearForm, getFormValues } from './taskView.js';

document.getElementById('taskForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Obtém os valores do formulário
    const { title, description, priority } = getFormValues();

    // Adiciona a tarefa ao modelo
    const task = addTask(title, description, priority);

    // Atualiza a visão (exibe as tarefas)
    renderTasks(getTasks());

    // Limpa o formulário
    clearForm();
});

document.getElementById('taskList').addEventListener('click', function(event) {
    if (event.target.classList.contains('delete-task')) {
        const taskIndex = event.target.getAttribute('data-index');
        if (confirm('Você tem certeza que deseja apagar esta tarefa?')) {
            removeTask(taskIndex);
            renderTasks(getTasks());
        }
    }

    if (event.target.classList.contains('edit-task')) {
        const taskIndex = event.target.getAttribute('data-index');
        const task = getTasks()[taskIndex];

        // Preenche o formulário com os valores da tarefa
        document.getElementById('taskTitle').value = task.title;
        document.getElementById('taskDescription').value = task.description;
        document.getElementById('taskPriority').value = task.priority;

        // Remove a tarefa atual
        removeTask(taskIndex);
        renderTasks(getTasks());
    }
});

// Inicializa a lista de tarefas ao carregar a página
renderTasks(getTasks());
