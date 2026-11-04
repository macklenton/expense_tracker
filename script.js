const expenseForm = document.getElementById("expense-form");
const descriptionInput = document.getElementById("description");
const amountInput = document.getElementById("amount");
const categoryInput = document.getElementById("category");
const expenseList = document.getElementById("expense-list");
const totalExpenses = document.getElementById("total-expenses");
const categoryFilter = document.getElementById("category-filter");



const tracker = new ExpenseTracker();


class Expense {
    constructor({ description, amount, category, id = Date.now() }) {
        this.id = id;
        this.description = description;
        this.amount = Number(amount);
        this.category = category;
    }
}

export default Expense;

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

        // Add all retrieved expenses to the tracker.
        tracker.addExpenses(...expenses);

    } catch (error) {

        console.error("Error loading expenses:", error);

    }

}

