# Expense Tracker 

A simple web-based Expense Tracker built with HTML, CSS, and JavaScript. This project helps users record and manage their daily expenses by adding expenses, viewing their spending, filtering by category, and calculating total expenses.

The project also uses JavaScript classes (OOP), LocalStorage for data persistence, and Jest for unit testing.

## Features

- **Add Expenses:** Record an expense using its description, amount, and category.
- **View Expenses:** Display all recorded expenses.
- **Delete Expenses:** Remove expenses that are no longer needed.
- **Calculate Total:** Automatically calculate the total amount spent.
- **Filter by Category:** Filter expenses by Food, Transport, Shopping, Bills, Entertainment, or Other.
- **LocalStorage:** Save expenses in the browser so they remain available after refreshing the page.
- **Unit Testing:** Use Jest to test the main ExpenseTracker methods.

## Technologies Used

| Technology | Purpose |
|---|---|
| HTML5 | Structure of the application |
| CSS3 | Styling and responsive layout |
| JavaScript | Application functionality |
| JavaScript Classes | Object-oriented programming |
| LocalStorage | Saving expense data |
| Jest | Unit testing |
| Git & GitHub | Version control and project hosting |

## Project Structure

```text
Expense_tracker/
│
├── index.html
├── styles.css
├── script.js
├── package.json
├── package-lock.json
├── jest.config.js
│
├── src/
│   ├── Expense.js
│   └── ExpenseTracker.js
│
└── tests/
    └── ExpenseTracker.test.js
```

## Getting Started

### 1. Clone the repository

```
https://github.com/macklenton/expense_tracker.git
```

### 2. Navigate into the project folder

```
cd Expense_tracker
```

### 3. Install dependencies

```
npm install
```

### 4. Run the application

Open `index.html` using VS Code Live Server or another local development server.

### 5. Run Jest tests

To execute the unit tests, run:

```
npm test
```
### 6. View Live URL 
```

```

## Unit Testing with Jest

Jest is used to test the main functionality of the ExpenseTracker class.

The project includes tests for:

1. **Adding Expenses:** Checks whether a new expense is successfully added.
2. **Removing Expenses:** Checks whether an expense can be removed using its ID.
3. **Calculating Total Expenses:** Checks whether the application calculates the correct total.
4. **Filtering Expenses:** Checks whether expenses are correctly filtered by category.

Run all tests using:

```
npm test
```



## Learning Objectives

The main objective of this project was to strengthen my understanding of JavaScript by building a practical application.

It also provided an opportunity to learn how to separate application logic into different files, write unit tests, and use Git and GitHub for version control.

## Future Improvements

Some features that could be added in future versions include:

- Edit existing expenses.
- Display expenses by date.
- Generate monthly expense summaries.
- Add charts to visualize spending.
- Improve the user interface.

## Author

**Mack Lenton**

Student Software Developer Learning JavaScript and Software Engineering

