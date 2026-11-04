import Expense from "../src/Expense";
import ExpenseTracker from "../src/ExpenseTracker";


describe("ExpenseTracker Tests", () => {

    let tracker;

    beforeEach(() => {
        tracker = new ExpenseTracker();
    });

    test("should add a new expense", () => {

        const expense = new Expense("Lunch", 500, "Food");

        tracker.addExpense(expense);

        expect(tracker.getExpenses()).toHaveLength(1);
        expect(tracker.getExpenses()[0].description).toBe("Lunch");
        expect(tracker.getExpenses()[0].amount).toBe(500);
    });

});