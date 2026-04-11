const taskInput = document.getElementById('task-input');
const addBtn = document.getElementById('add-btn');
const cloudsContainer = document.getElementById('clouds-container');
window.onload = loadClouds;
function closeGuide() {
    document.getElementById('guide-modal').style.display = 'none';
    taskInput.focus();
}
function saveClouds() {
    const clouds = [];
    document.querySelectorAll('.cloud').forEach(cloud => {
        clouds.push(cloud.dataset.text);
    });
    localStorage.setItem('myIdeaClouds', JSON.stringify(clouds));
}
function loadClouds() {
    const savedData = localStorage.getItem('myIdeaClouds');
    if (savedData) {
        const ideas = JSON.parse(savedData);
        ideas.forEach(idea => createCloudElement(idea));
    }
}
function createCloudElement(text) {
    const cloud = document.createElement('div');
    cloud.classList.add('cloud');
    cloud.dataset.text = text;
    cloud.innerText = text;
    const delBtn = document.createElement('button');
    delBtn.innerHTML = '✕';
    delBtn.classList.add('delete-btn');
    delBtn.onclick = (e) => {
        e.stopPropagation();
        cloud.remove();
        saveClouds();
    };  
    cloud.appendChild(delBtn);
    const randomTop = Math.random() * (window.innerHeight - 200) + 50;
    const randomLeft = Math.random() * (window.innerWidth - 250) + 50;
    cloud.style.top = `${randomTop}px`;
    cloud.style.left = `${randomLeft}px`;
    cloud.style.setProperty('--moveX', `${Math.random() * 100 - 50}px`);
    cloud.style.setProperty('--moveY', `${Math.random() * 80 - 40}px`);
    cloud.style.setProperty('--duration', `${Math.random() * 10 + 8}s`);
    cloudsContainer.appendChild(cloud);
}
function handleAdd() {
    const text = taskInput.value.trim();
    if (text !== "") {
        createCloudElement(text);
        saveClouds();
        taskInput.value = "";
    }
}
addBtn.onclick = handleAdd;
taskInput.onkeypress = (e) => {
    if (e.key === 'Enter') handleAdd();
};