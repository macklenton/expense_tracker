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

    test("should remove an expense", () => {

        const expense1 = new Expense("Lunch", 500, "Food");
        const expense2 = new Expense("Bus fare", 200, "Transport");

        tracker.addExpenses(expense1, expense2);

        tracker.removeExpense(expense1.id);

        expect(tracker.getExpenses()).toHaveLength(1);
        expect(tracker.getExpenses()[0].description).toBe("Bus fare");
    });


});