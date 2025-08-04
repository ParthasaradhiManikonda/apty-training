function createBankAccount() {
    let balance = 0;

    return {
        deposit: function(amount) {
            if (amount > 0) {
                balance += amount;
                return `Deposited Rs${amount}.`;
            }
            return "Please enter a positive amount to deposit.";
        },

        withdraw: function(amount) {
            if (amount > 0 && amount <= balance) {
                balance -= amount;
                return `Withdrew Rs:${amount}.`;
            } else if (amount > balance) {
                return "Insufficient funds.";
            }
            return "Please enter a positive amount to withdraw.";
        },

        checkBalance: function() {
            return balance;
        }
    };
}


const myAccount = createBankAccount();

const balanceDisplay = document.getElementById('balanceDisplay');
const amountInput = document.getElementById('amountInput');
const depositButton = document.getElementById('depositButton');
const withdrawButton = document.getElementById('withdrawButton');
const messageBox = document.getElementById('messageBox');

function updateBalance() {
    balanceDisplay.textContent = `Rs:${myAccount.checkBalance()}`;
}

depositButton.addEventListener('click', () => {
    const amount = parseFloat(amountInput.value);
    const message = myAccount.deposit(amount);
    messageBox.textContent = message;
    updateBalance();
    amountInput.value="";
});

withdrawButton.addEventListener('click', () => {
    const amount = parseFloat(amountInput.value);
    const message = myAccount.withdraw(amount);
    messageBox.textContent = message;
    updateBalance();
    amountInput.value="";
});

updateBalance();
