class Expense {
    constructor(description, amount, category) {
        this.id = Date.now() + Math.random();
        this.description = description;
        this.amount = Number(amount);
        this.category = category;
    }
}

class ExpenseTracker {
    constructor() {
        this.expenses = [];
    }

    addExpense(expense) {
        this.expenses = [...this.expenses, expense];
    }

    addExpenses(...expenses) {
        this.expenses = [...this.expenses, ...expenses];
    }

    removeExpense(id) {
        this.expenses = this.expenses.filter(expense => expense.id !== id);
    }

    getExpenses() {
        return [...this.expenses];
    }

    filterByCategory(category) {
        return this.expenses.filter(expense => expense.category === category);
    }

    calculateTotal() {
        return this.expenses.reduce((total, expense) => {
            return total + expense.amount;
        }, 0);
    }
}

const tracker = new ExpenseTracker();

const expenseForm = document.getElementById("expense-form");
const descriptionInput = document.getElementById("description");
const amountInput = document.getElementById("amount");
const categoryInput = document.getElementById("category");
const expenseList = document.getElementById("expense-list");
const totalExpenses = document.getElementById("total-expenses");
const categoryFilter = document.getElementById("category-filter");


//LOCAL STORAGE
function saveExpenses() {
    localStorage.setItem("expenses", JSON.stringify(tracker.getExpenses()));
}

function loadExpenses() {
    try {
        const savedExpenses = JSON.parse(localStorage.getItem("expenses")) || [];
        if (!Array.isArray(savedExpenses)) {
            return;
        }
        const expenses = savedExpenses.map(expense => {
            const { id, description, amount, category } = expense;
            const newExpense = new Expense(description, amount, category);
            newExpense.id = id;
            return newExpense;
        });
        tracker.addExpenses(...expenses);
    } catch (error) {
        console.error("Error loading expenses:", error);
    }
}


//DISPLAY EXPENSES
function displayExpenses(expenses) {
    expenseList.innerHTML = "";

    if (expenses.length === 0) {
        const message = document.createElement("p");
        message.id = "empty-state";
        message.textContent = "No expenses added yet.";
        expenseList.appendChild(message);
        return;
    }

    expenses.map(({ id, description, amount, category }) => {
        const expenseItem = document.createElement("div");
        expenseItem.classList.add("expense-item");

        const details = document.createElement("div");

        const title = document.createElement("h3");
        title.textContent = description;

        const categoryText = document.createElement("p");
        categoryText.textContent = category;

        details.append(title, categoryText);

        const actions = document.createElement("div");
        actions.classList.add("expense-actions");

        const price = document.createElement("p");
        price.textContent = `KES ${amount.toFixed(2)}`;

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.classList.add("delete-button");

        deleteButton.addEventListener("click", () => {
            tracker.removeExpense(id);
            saveExpenses();
            updateDisplay();
        });

        actions.append(price, deleteButton);
        expenseItem.append(details, actions);
        expenseList.appendChild(expenseItem);
    });
}

//UPDATE EXPENSES AND AMOUNT

function updateDisplay() {
    const selectedCategory = categoryFilter.value;
    const expenses = selectedCategory === "All"
        ? tracker.getExpenses()
        : tracker.filterByCategory(selectedCategory);
    displayExpenses(expenses);
    const total = tracker.calculateTotal();
    totalExpenses.textContent = `KES ${total.toFixed(2)}`;
}

expenseForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const description = descriptionInput.value.trim();
    const amount = Number(amountInput.value);
    const category = categoryInput.value;

    if (
        description === "" ||
        category === "" ||
        !Number.isFinite(amount) ||
        amount <= 0
    ) {
        alert("Please enter valid expense details.");
        return;
    }

    const expense = new Expense(description, amount, category);
    tracker.addExpense(expense);
    saveExpenses();
    expenseForm.reset();
    categoryFilter.value = "All";
    updateDisplay();
});

categoryFilter.addEventListener("change", function() {
    updateDisplay();
});

loadExpenses();
updateDisplay();