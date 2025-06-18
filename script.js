document.getElementById('calculate').addEventListener('click', function () {
    const billAmount = parseFloat(document.getElementById('bill').value);
    const tipPercentage = parseFloat(document.getElementById('tip').value);

    // Validate inputs
    if (isNaN(billAmount) || isNaN(tipPercentage) || billAmount <= 0 || tipPercentage < 0) {
        alert('Please enter valid numbers for bill amount and tip percentage.');
        return;
    }

    // Calculate tip and total
    const tipAmount = (billAmount * tipPercentage) / 100;
    const totalAmount = billAmount + tipAmount;

    // Display results
    document.getElementById('tip-amount').textContent = `Tip Amount: ₹${tipAmount.toFixed(2)}`;
    document.getElementById('total-amount').textContent = `Total Amount: ₹${totalAmount.toFixed(2)}`;
});
