const amount = document.getElementById('loan-amount');
const rate = document.getElementById('interest-rate');
const time = document.getElementById('months-to-pay');
const payment = document.getElementById('payment');

function calculateLoan() {
    const principal = parseFloat(amount.value);      // Loan amount
    const annualRate = parseFloat(rate.value);       // Annual interest %
    const months = parseInt(time.value);            // Number of months

    // Convert annual interest to monthly decimal rate
    const monthlyRate = annualRate / 12 / 100;

    // EMI formula
    const emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) /
                (Math.pow(1 + monthlyRate, months) - 1);

    // Update the payment display
    payment.innerHTML = `Monthly Payment: <span>$${emi.toFixed(2)}</span>`;
}
document.getElementById('calculate-btn').addEventListener('click', calculateLoan);
