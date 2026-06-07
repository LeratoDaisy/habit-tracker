let habits = [];

function addHabit(name, category, target) {
  const habit = {
    id: Date.now(),
    name,
    category,
    target,
    streak: 0,
    doneToday: false
  };

  habits.push(habit);
  renderAll();
}

function deleteHabit(id) {
  habits = habits.filter(h => h.id !== id);
  renderAll();
}

function toggleHabit(id) {
  habits = habits.map(h => {
    if (h.id === id) {
      const updated = { ...h };

      updated.doneToday = !updated.doneToday;

      updated.streak = updated.doneToday
        ? updated.streak + 1
        : Math.max(0, updated.streak - 1);

      return updated;
    }
    return h;
  });

  renderAll();
}

function validateForm(name, target, category) {
  if (name.length < 3) return "Name must be at least 3 characters";
  if (target < 1 || target > 7 || !Number.isInteger(Number(target)))
    return "Target must be a whole number between 1 and 7";
  if (!category) return "Please select a category";

  return null;
}

function renderHabits() {
  const list = document.getElementById("habitList");
  list.innerHTML = "";

  habits.forEach(habit => {
    const div = document.createElement("div");
    div.className = "habit-card";

    div.innerHTML = `
      <h3>${habit.name}</h3>
      <p>${habit.category}</p>
      <p>Streak: ${habit.streak}</p>

      <label>
        Done today
        <input type="checkbox" ${habit.doneToday ? "checked" : ""}>
      </label>

      <button>Delete</button>
    `;

    div.querySelector("input").addEventListener("change", () => {
      toggleHabit(habit.id);
    });

    div.querySelector("button").addEventListener("click", () => {
      deleteHabit(habit.id);
    });

    list.appendChild(div);
  });
}

function updateSummary() {
  const total = habits.length;
  const done = habits.filter(h => h.doneToday).length;
  const percent = total === 0 ? 0 : Math.round((done / total) * 100);

  document.getElementById("summary").innerHTML = `
    <p>Total habits: ${total}</p>
    <p>Done today: ${done}</p>
    <p>Completion: ${percent}%</p>
  `;
}

function renderAll() {
  renderHabits();
  updateSummary();
}

document.getElementById("habitForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const target = Number(document.getElementById("target").value);
  const category = document.getElementById("category").value;

  const error = validateForm(name, target, category);

  const errorEl = document.getElementById("error");

  if (error) {
    errorEl.textContent = error;
    return;
  }

  errorEl.textContent = "";

  addHabit(name, category, target);

  e.target.reset();
});