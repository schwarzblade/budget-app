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
		this.amountInput = document.getElementById("amount-input");
		this.expenseList = document.getElementById("expense-list");
		this.itemList = [];
		this.itemID = 0;
	}

	//submitBudgetForm
	submitBudgetForm(){
		const value = this.budgetInput.value;
		if(value === '' || value < 0){
			this.budgetFeedback.classList.add("showItem");
			this.budgetFeedback.innerHTML = `<p>no empty, negative value !!!!</p>`;
		const self = this;
		setTimeout(() => {
			self.budgetFeedback.classList.remove("showItem");
		},3000)
		} else {
			this.budgetAmount.textContent = value;
			this.budgetInput.value = "";
			this.shwoBalance();
		
		}

	}

	shwoBalance(){
		const expenses = this.totalExpenses();
		const total = parseInt(this.budgetAmount.textContent) - expenses;
		this.balanceAmount.textContent = total;
		if(total < 0){
			this.balance.classList.remove("showGreen","showBlack");
			this.balance.classList.add("showRed");
		} else if(total > 0){
			this.balance.classList.remove("showRed","showBlack");
			this.balance.classList.add("showGreen");
		} else {
			this.balance.classList.remove("showGreen","showRed");
			this.balance.classList.add("showBlack");
		}



	}


	totalExpenses(){
		let total = 400;
		return total;
	}


	submitExpenseForm(){
		const expenseValue = this.expenseInput.value;
		const amountValue = this.amountInput.value;
	
		if(expenseValue === '' || amountValue === '' || amountValue < 0)
			this.expenseFeedback.classList.add("showItem");
			this.expenseFeedback.innerHTML = `<p>not empty, negtive </p>`;
			const self = this;
			setTimeout(() =>{
				this.expenseFeedback.classList.remove("showItem");
			},3000)
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
		ui.submitExpenseForm();
	})
	expenseList.addEventListener('click', () => {
		
	})
}

document.addEventListener('DOMContentLoaded',() => eventListeners());