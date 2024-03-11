// Sample account data
let account = {
  balance: 1000,
  transactions: []
};

// Display account information
function displayAccountInfo() {
  const accountInfo = document.getElementById('accountInfo');
  accountInfo.innerHTML = `<p>Balance: $${account.balance}</p>`;
}

// Display transaction history
function displayTransactions() {
  const transactionsDiv = document.getElementById('transactions');
  transactionsDiv.innerHTML = '<h2>Transaction History</h2>';
  if (account.transactions.length === 0) {
    transactionsDiv.innerHTML += '<p>No transactions yet.</p>';
  } else {
    account.transactions.forEach(transaction => {
      transactionsDiv.innerHTML += `<p>${transaction}</p>`;
    });
  }
}

// Deposit money
document.getElementById('depositBtn').addEventListener('click', () => {
  const amount = parseFloat(prompt('Enter deposit amount:'));
  if (!isNaN(amount) && amount > 0) {
    account.balance += amount;
    account.transactions.push(`Deposited $${amount}`);
    displayAccountInfo();
    displayTransactions();
  } else {
    alert('Invalid amount');
  }
});

// Withdraw money
document.getElementById('withdrawBtn').addEventListener('click', () => {
  const amount = parseFloat(prompt('Enter withdrawal amount:'));
  if (!isNaN(amount) && amount > 0 && amount <= account.balance) {
    account.balance -= amount;
    account.transactions.push(`Withdrawn $${amount}`);
    displayAccountInfo();
    displayTransactions();
  } else {
    alert('Invalid amount or insufficient funds');
  }
});

// Initial display
displayAccountInfo();
displayTransactions();
