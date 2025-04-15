let totalBudget = 0;
let totalExpenses = 0;
let expenseList = [];

function updateDisplay() {
  document.getElementById("total-budget").textContent = `Total Budget: ₹${totalBudget}`;
  document.getElementById("total-expense").textContent = `Total Expenses: ₹${totalExpenses}`;
  document.getElementById("budget-left").textContent = `Budget Left: ₹${totalBudget - totalExpenses}`;
}

function addBudget() {
  const budgetInput = document.getElementById("budget-input");
  const amount = parseFloat(budgetInput.value);
  if (!isNaN(amount) && amount > 0) {
    totalBudget += amount;
    updateDisplay();
    budgetInput.value = "";
  } else {
    alert("Please enter a valid budget amount.");
  }
}

function addExpense() {
  const titleInput = document.getElementById("expense-title");
  const amountInput = document.getElementById("expense-amount");
  const title = titleInput.value.trim();
  const amount = parseFloat(amountInput.value);

  if (title && !isNaN(amount) && amount > 0) {
    const expense = { title, amount };
    expenseList.push(expense);
    totalExpenses += amount;
    renderExpenses();
    updateDisplay();
    titleInput.value = "";
    amountInput.value = "";
  } else {
    alert("Please enter a valid expense title and amount.");
  }
}

function renderExpenses() {
  const tableBody = document.getElementById("expense-table-body");
  tableBody.innerHTML = "";
  expenseList.forEach((expense, index) => {
    const row = document.createElement("tr");

    const nameCell = document.createElement("td");
    nameCell.textContent = expense.title;

    const amountCell = document.createElement("td");
    amountCell.textContent = expense.amount;

    const actionCell = document.createElement("td");
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.classList.add("remove-btn");
    removeBtn.onclick = () => removeExpense(index);

    actionCell.appendChild(removeBtn);
    row.appendChild(nameCell);
    row.appendChild(amountCell);
    row.appendChild(actionCell);

    tableBody.appendChild(row);
  });
}

function removeExpense(index) {
  totalExpenses -= expenseList[index].amount;
  expenseList.splice(index, 1);
  renderExpenses();
  updateDisplay();
}

function resetAll() {
  totalBudget = 0;
  totalExpenses = 0;
  expenseList = [];
  renderExpenses();
  updateDisplay();
}
