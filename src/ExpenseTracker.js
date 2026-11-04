
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

export default ExpenseTracker;
