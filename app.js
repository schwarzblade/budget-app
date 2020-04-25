class UI {
	constructor(){
		this.budgetFeedback = document.querySelector('.budget-feedback');
		this.expenseFeedback = document.querySelector('.expense-feedback')
		this.budgetForm = document.getElementById("budget-form");
		this.budgetInput = document.getElementById("budget-input");
		this.budgetAmount = document.getElementById("budget-amount");
		this.expenseAmount = document.getElementById("expense-amount");
		this.balance = document.getElementById("balance");
		this.balanceAmount = document.getElementById("balance-amount");
		this.expenseForm = document.getElementById("expense-form");
		this.expenseInput = document.getElementById("expense-input");
		this.expenseList = document.querySelector(".expense-list");
		this.itemList = [];
		this.itemID = 0;
	}

	//submitBudgetForm
	submitBudgetForm(){
		const budgetInput = this.budgetInput.value;
		console.log(budgetInput);
	}
}







function eventListeners(){
	const budgetForm = document.getElementById("budget-form");
	const expenseForm = document.getElementById("expense-form");
	const expenseList = document.querySelector("expense-list");

	//new instace of UI
	const ui = new UI();


	budgetForm.addEventListener('submit', (e) => {
		e.preventDefault();
		ui.submitBudgetForm();
	})
	expenseForm.addEventListener('submit', (e) => {
		e.preventDefault();
	})
	expenseList.addEventListener('click', () => {
		
	})
}

document.addEventListener('DOMContentLoaded',() => eventListeners());