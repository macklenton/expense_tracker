
class Expense {

    constructor(description, amount, category) {

        this.id = Date.now() + Math.random();

        this.description = description;
        this.amount = Number(amount);
        this.category = category;

    }

}

export default Expense;
