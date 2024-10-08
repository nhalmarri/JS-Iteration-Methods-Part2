// You are given an array representing a series of transactions in a small business.
// Each transaction is an array containing the transaction type ("income" or "expense") and the amount.
const transactions = [
  ["income", 1000],
  ["income", 1500],
  ["expense", 500],
  ["expense", 300],
  ["income", 700],
];

/*****************************************************************
Part 1: Transaction Analysis

Task 1) Create a new array containing only the income transactions.
       Output 1) [["income", 1000], ["income", 1500], ["income", 700]]

Task 2) Create a new array containing only the expense transactions.
       Output 2) [["expense", 500], ["expense", 300]]

******************************************************************/

//Task 1
const incomeTransaction = transactions.filter(function (arrayElement) {
  return arrayElement.includes("income");
});

console.log(incomeTransaction);

//Task 2
const expensesTransaction = transactions.filter(function (arrayElement) {
  return arrayElement.includes("expense");
});

console.log(expensesTransaction);

/*****************************************************************
Part 2: Financial Summary

Task 3) Calculate the total income and return it.
       Output 3) 3200

Task 4) Calculate the total expenses and return it.
       Output 4) 800

******************************************************************/

//Task 3
incomeTotal = incomeTransaction.reduce(function (total, transaction) {
  return total + transaction[1];
}, 0);

console.log(`3) ${incomeTotal}`);

//Task 4
expensesTotal = expensesTransaction.reduce(function (total, transaction) {
  return total + transaction[1];
}, 0);

console.log(`4) ${expensesTotal}`);
/*****************************************************************
Part 3: Net Analysis

Task 5) Calculate the net total (total income - total expenses) and return it.
       Output 5) 2400

Task 6) Identify and create a new array with transactions (both incomes and expenses) above  or equal to $500.
       Output 6) [["income", 1000], ["income", 1500], ["expense", 500], ["income", 700]]

******************************************************************/

//Task 5
const netTotal = incomeTotal - expensesTotal;

console.log(`4) ${netTotal}`);

//Task 6

bigTransactions = transactions.filter((transactions) => transactions[1] >= 500);

console.log(`6) ${bigTransactions}`);
