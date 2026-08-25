let goals = JSON.parse(localStorage.getItem('my_goals_v3')) || [];
let currentFilter = 'all';
const themeBtn = document.getElementById('themeToggleBtn');
let currentTheme = localStorage.getItem('app_theme') || 'dark';
function applyTheme(theme) {
  if (theme === 'light') {
    document.body.classList.remove('dark-mode');
    document.body.classList.add('light-mode');
    themeBtn.querySelector('.theme-icon').textContent = '☀️';
    themeBtn.querySelector('.theme-text').textContent = 'Dzień';
  } else {
    document.body.classList.remove('light-mode');
    document.body.classList.add('dark-mode');
    themeBtn.querySelector('.theme-icon').textContent = '🌙';
    themeBtn.querySelector('.theme-text').textContent = 'Noc';
  }
  localStorage.setItem('app_theme', theme);
}
themeBtn.addEventListener('click', () => {
  currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
  applyTheme(currentTheme);
});
applyTheme(currentTheme);
function saveData() {
  localStorage.setItem('my_goals_v3', JSON.stringify(goals));
  renderGoals();
}
function addMainGoal() {
  const input = document.getElementById('mainGoalInput');
  const categorySelect = document.getElementById('categorySelect');
  const title = input.value.trim();
  if (!title) return;
  goals.push({
    id: Date.now(),
    title: title,
    category: categorySelect.value,
    isOpen: false,
    subgoals: []
  });
  input.value = '';
  saveData();
}
function deleteGoal(id, event) {
  event.stopPropagation();
  goals = goals.filter(g => g.id !== id);
  saveData();
}
function addSubgoal(goalId) {
  const input = document.getElementById(`subInput-${goalId}`);
  const text = input.value.trim();
  if (!text) return;
  const goal = goals.find(g => g.id === goalId);
  if (goal) {
    goal.subgoals.push({
      id: Date.now(),
      text: text,
      completed: false
    });
    input.value = '';
    saveData();
  }
}
function toggleSubgoal(goalId, subgoalId) {
  const goal = goals.find(g => g.id === goalId);
  if (goal) {
    const subgoal = goal.subgoals.find(s => s.id === subgoalId);
    if (subgoal) {
      subgoal.completed = !subgoal.completed;
      saveData();
    }
  }
}
function deleteSubgoal(goalId, subgoalId) {
  const goal = goals.find(g => g.id === goalId);
  if (goal) {
    goal.subgoals = goal.subgoals.filter(s => s.id !== subgoalId);
    saveData();
  }
}
function toggleGoalOpen(goalId) {
  const goal = goals.find(g => g.id === goalId);
  if (goal) {
    goal.isOpen = !goal.isOpen;
    renderGoals();
  }
}
function setFilter(filter) {
  currentFilter = filter;
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.classList.toggle('active', btn.innerText.toLowerCase() === filter || (filter === 'all' && btn.innerText === 'Wszystkie'));
  });
  renderGoals();
}
function calculateProgress(subgoals) {
  if (!subgoals || subgoals.length === 0) return 0;
  const completedCount = subgoals.filter(s => s.completed).length;
  return Math.round((completedCount / subgoals.length) * 100);
}
let draggedItem = null;
let draggedType = null;
function handleDragStart(e, type, goalId, subgoalId = null) {
  draggedItem = subgoalId ? { goalId, subgoalId } : goalId;
  draggedType = type;
  e.target.classList.add('dragging');
  e.stopPropagation();
}
function handleDragEnd(e) {
  e.target.classList.remove('dragging');
  draggedItem = null;
  draggedType = null;
}
function handleDragOver(e) {
  e.preventDefault();
}
function handleDropGoal(e, targetGoalId) {
  e.preventDefault();
  e.stopPropagation();
  if (draggedType !== 'goal' || draggedItem === targetGoalId) return;
  const draggedIdx = goals.findIndex(g => g.id === draggedItem);
  const targetIdx = goals.findIndex(g => g.id === targetGoalId);
  const [removed] = goals.splice(draggedIdx, 1);
  goals.splice(targetIdx, 0, removed);
  saveData();
}
function handleDropSubgoal(e, targetGoalId, targetSubgoalId) {
  e.preventDefault();
  e.stopPropagation();
  if (draggedType !== 'subgoal' || draggedItem.goalId !== targetGoalId) return;
  const goal = goals.find(g => g.id === targetGoalId);
  const draggedIdx = goal.subgoals.findIndex(s => s.id === draggedItem.subgoalId);
  const targetIdx = goal.subgoals.findIndex(s => s.id === targetSubgoalId);
  const [removed] = goal.subgoals.splice(draggedIdx, 1);
  goal.subgoals.splice(targetIdx, 0, removed);
  saveData();
}
function renderGoals() {
  const container = document.getElementById('goalsContainer');
  container.innerHTML = '';
  const filteredGoals = currentFilter === 'all' 
    ? goals 
    : goals.filter(g => g.category === currentFilter);
  if (filteredGoals.length === 0) {
    container.innerHTML = `<div class="empty-state">Brak celów w tej kategorii.</div>`;
    return;
  }
  filteredGoals.forEach(goal => {
    const progress = calculateProgress(goal.subgoals);
    const completedCount = goal.subgoals.filter(s => s.completed).length;
    const totalCount = goal.subgoals.length;
    const card = document.createElement('div');
    card.className = `goal-card ${goal.isOpen ? 'active' : ''}`;
    card.draggable = true;
    card.ondragstart = (e) => handleDragStart(e, 'goal', goal.id);
    card.ondragend = handleDragEnd;
    card.ondragover = handleDragOver;
    card.ondrop = (e) => handleDropGoal(e, goal.id);
    card.innerHTML = `
      <div class="goal-header" onclick="toggleGoalOpen(${goal.id})">
        <div class="goal-top-bar">
          <div class="goal-title-container">
            <span class="drag-handle">⣿</span>
            <span class="badge cat-${goal.category}">${goal.category}</span>
            <span class="goal-title">${escapeHtml(goal.title)}</span>
          </div>
          <button class="btn-danger" onclick="deleteGoal(${goal.id}, event)">Usuń</button>
        </div>
        <div class="progress-container">
          <div class="progress-bar-bg">
            <div class="progress-bar-fill" style="width: ${progress}%"></div>
          </div>
          <span class="progress-text">${progress}% (${completedCount}/${totalCount})</span>
        </div>
      </div>
      <div class="goal-body">
        <div class="input-row">
          <input type="text" id="subInput-${goal.id}" placeholder="Dodaj krok do celu..." onkeydown="if(event.key === 'Enter') addSubgoal(${goal.id})" />
          <button onclick="addSubgoal(${goal.id})">Dodaj krok</button>
        </div>
        <ul class="subgoals-list">
          ${goal.subgoals.map(sub => `
            <li class="subgoal-item" 
                draggable="true" 
                ondragstart="handleDragStart(event, 'subgoal', ${goal.id}, ${sub.id})"
                ondragend="handleDragEnd(event)"
                ondragover="handleDragOver(event)"
                ondrop="handleDropSubgoal(event, ${goal.id}, ${sub.id})">
              <div class="subgoal-left">
                <span class="drag-handle">⣿</span>
                <input 
                  type="checkbox" 
                  ${sub.completed ? 'checked' : ''} 
                  onchange="toggleSubgoal(${goal.id}, ${sub.id})"
                />
                <span class="subgoal-text ${sub.completed ? 'completed' : ''}">
                  ${escapeHtml(sub.text)}
                </span>
              </div>
              <button class="btn-danger" onclick="deleteSubgoal(${goal.id}, ${sub.id})">✕</button>
            </li>
          `).join('')}
        </ul>
      </div>
    `;
    container.appendChild(card);
  });
}
function escapeHtml(text) {
  const div = document.createElement('div');
  div.innerText = text;
  return div.innerHTML;
}
renderGoals();