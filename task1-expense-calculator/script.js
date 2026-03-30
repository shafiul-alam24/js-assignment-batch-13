let expenses = [];

// Total calculation using reduce()
function calculateTotal() {
    let total = expenses.reduce((sum, value) => sum + value, 0);
    document.getElementById("total").innerText = total;
}
// DOM + Validation
function addExpense() {
    let input = document.getElementById("amount").value;

    // Validation
    if (input === "" || isNaN(input)) {
        alert("Please enter a valid number!");
        return;
    }

    let amount = parseFloat(input);

    // Add to array
    expenses.push(amount);

    // Update total
    calculateTotal();

    // Clear input
    document.getElementById("amount").value = "";
}