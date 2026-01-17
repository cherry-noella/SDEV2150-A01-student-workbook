const addBtn = document.querySelector('#addBtn');
const taskInput = document.querySelector('#taskInput');
const taskList = document.querySelector('#taskList');




taskInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        addTask();
    }
});

addBtn.addEventListener('click', addTask)


function addTask() {
    const newTaskInput = taskInput.value.trim();
    const newTask = document.createElement('li');

    if (newTaskInput !== '') {
        newTask.textContent = newTaskInput;
        taskList.appendChild(newTask)
        taskInput.value = '';
    }

    newTask.addEventListener('click', () => {
        newTask.classList.toggle('done')
    });

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';

    deleteBtn.addEventListener('click', () => {
    newTask.remove();
    });
    newTask.appendChild(deleteBtn);
};


