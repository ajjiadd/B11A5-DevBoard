//click the button for change the random background color
const themeCngBtn = document.getElementById('themeCng-btn');
const body = document.body;
themeCngBtn.addEventListener('click', () => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    body.style.backgroundColor = '#' + randomColor;
});


//showing the current date on html format like Tue,Feb 25 2025
const currentDate = new Date();
const options = { year: 'numeric', month: 'short', day: 'numeric' };

document.getElementById('day-of-week').textContent = currentDate.toLocaleString('en-US', { weekday: 'short' }) + ',';
document.getElementById('current-date').textContent = currentDate.toLocaleString('en-US', options);



// Get all task cards
const taskCards = document.querySelectorAll('#all-TaskCard-Container > div');

// Get the task assigned and task done elements
const taskDone = document.querySelector('#task-done');

// Get the activity log section
const activityLog = document.querySelector('#completedTaskContainer');


// Add alert for button
taskCards.forEach((taskCard) => {
    const taskTitle = taskCard.querySelector('h3').textContent;
    const taskButton = taskCard.querySelector('button');
    taskButton.addEventListener('click', () => {
      if (!taskButton.disabled) {
        alert('Board Updated successfully');
        taskButton.disabled = true;
        const currentTime = new Date().toLocaleTimeString();
        addTaskToActivityLog(taskTitle, currentTime);
        updateTaskCounts();
      }
    });
  });


// update task-assigned and task done counts
function updateTaskCounts() {
    const assignedCount = document.querySelectorAll('#all-TaskCard-Container > div button:not(:disabled)').length;
    const doneCount = document.querySelectorAll('#all-TaskCard-Container > div button:disabled').length;
    document.getElementById('Task-Assigned').textContent = assignedCount;
    taskDone.textContent = 23+doneCount;

    if (assignedCount === 0) {
        alert("Congratulations! You have completed all tasks.");
      }
}

// Function to add task to activity log
function addTaskToActivityLog(taskTitle, time) {
    const activityLogItem = document.createElement('div');
    activityLogItem.classList.add('bg-[#F4F7FF]', 'mt-2' , 'p-2', 'rounded-md');
    activityLogItem.textContent = `You have completed the task - ${taskTitle} at ${time}`;
    activityLog.appendChild(activityLogItem);
}

// Function to clear activity log
function clearActivityLog() {
    activityLog.innerHTML = '';
}

// Add event listeners to task cards
taskCards.forEach((taskCard) => {
    const taskTitle = taskCard.querySelector('h3').textContent;
    const taskButton = taskCard.querySelector('button');
    taskButton.addEventListener('click', () => {
        if (!taskButton.disabled) {
            taskButton.disabled = true;
            const currentTime = new Date().toLocaleTimeString();
            addTaskToActivityLog(taskTitle, currentTime);
            updateTaskCounts();
        }
    });
});

// Add event listener to clear history button
document.getElementById('histo-clear-btn').addEventListener('click', clearActivityLog);

// success alert message
 
