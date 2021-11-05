// Create starter values
let monthlyIncome = 0;
let expense = []; //an array of objects
let expenseTotal = 0;
let balance = 0;

//Create references to HTML elements
let monthlyBudget = document.getElementById("monthly_budget"); //Paragraph
let incomeInput = document.getElementById("income_input");
let updateBudgetButton = document.getElementById("update_budget_button");

let nameInput = document.getElementById("name_input");
let amountInput = document.getElementById("amount_input");
let addExpenseButton = document.getElementById("add_expense_button");

let expenseList = document.getElementById("expense_list"); //DIV element
let totalExpense = document.getElementById("total_expenses"); //Paragraph
let remainingBalance = document.getElementById("remaining_balance"); //Paragraph

// Build a function that stores the monthly budget from the monthly budget form
function updateBudget(event) {
    console.log("updateBudget fired.");
    event.preventDefault();
    monthlyIncome = parseInt(incomeInput.value);
    monthlyBudget.innerText = "$" + monthlyIncome;
    updateBalance();
}

// Add update to the update budget button
updateBudgetButton.onclick = updateBudget;

//Build a helper function that calculate the remaining balance
// BONUS: Make the balance green if not negative; red if so
function updateBalance() {
    console.log("updateBalance fired");
    balance = monthlyIncome - expenseTotal;
    remainingBalance.innerText = "$" + balance;


//Determine color of the text
if (balance < 0) {
    remainingBalance.classList.remove("green");
    remainingBalance.classList.add("red");
} else {
    remainingBalance.classList.remove("red");
    remainingBalance.classList.add("green");
}
}

//Build a function that creates and expense object from the values
//entered into the add expense form, then adds the object to the expense array
function addExpense(event) {
    console.log("addExpense fired.");
    event.preventDefault();
    let newExpense = {
        name: nameInput.value,
        amount: parseInt(amountInput.value)
    };
    //add object to expense array
    expense.push(newExpense);
    // Display expense in the app
    let newElement = document.createElement("p");
    newElement.innerText = newExpense.name + " " + "$" + newExpense.amount;
    expenseList.appendChild(newElement);
    updateExpenseTotal();
}

// Add the addExpense function as an onclick handler
addExpenseButton.onclick = addExpense;

//Build a function that calculate the total expenses
function updateExpenseTotal() {
    console.log("updateExpenseTotal fired.");
    // Reset expense total
    expenseTotal = 0;
    // Recalculate
    for (let i = 0; i < expense.length; i++) {
        const currentExpense = expense[i];
        expenseTotal = expenseTotal + currentExpense.amount;
    }
    // Display in the app
    totalExpense.innertext = "$" + expenseTotal;
    // Recalculate the remaining balance
    updateBalance();
}