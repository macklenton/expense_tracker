
class Expense {
    constructor({ description, amount, category, id = Date.now() }) {
        this.id = id;
        this.description = description;
        this.amount = Number(amount);
        this.category = category;
    }
}

export default Expense;
