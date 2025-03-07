document.getElementById("debtForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const debtName = document.getElementById("debtName").value;
    const debtAmount = parseFloat(document.getElementById("debtAmount").value);
    const interestRate = parseFloat(document.getElementById("interestRate").value);
    const monthlyPayment = parseFloat(document.getElementById("monthlyPayment").value);

    if (debtAmount > 0 && interestRate >= 0 && monthlyPayment > 0) {
        addDebtToList(debtName, debtAmount, interestRate, monthlyPayment);
        document.getElementById("debtForm").reset();
    } else {
        alert("Please enter valid numbers!");
    }
});

function addDebtToList(name, amount, interest, payment) {
    const debtList = document.getElementById("debtList");
    const debtItem = document.createElement("div");
    debtItem.style.padding = "10px";
    debtItem.style.borderBottom = "1px solid #ccc";
    debtItem.innerHTML = `
        <p><strong>${name}</strong></p>
        <p>Total: $${amount.toFixed(2)}, Interest: ${interest}%</p>
        <p>Monthly Payment: $${payment.toFixed(2)}</p>
    `;

    debtList.appendChild(debtItem);
}

function calculateProjection() {
    const debtItems = document.querySelectorAll("#debtList p");
    let totalMonths = debtItems.length > 0 ? debtItems.length * 6 : 0;

    if (totalMonths > 0) {
        document.getElementById("projectionResult").textContent = 
           `Debt-free in approx${totalMonths} months.`;
    } else {
        document.getElementById("projectionResult").textContent = "No debts added.";
    }
}