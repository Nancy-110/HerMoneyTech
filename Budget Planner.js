document.addEventListener("DOMContentLoaded", () => {
    const budgetForm = document.getElementById("budgetForm");
    const budgetTable = document.getElementById("budgetTable").getElementsByTagName("tbody")[0];
    const totalIncome = document.getElementById("totalIncome");
    const totalExpenses = document.getElementById("totalExpenses");
    const remainingBalance = document.getElementById("remainingBalance");

    let income = 0;
    let expenses = 0;
    let balance = 0;

    // Add entry to the table and update summary
    budgetForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const type = document.getElementById("type").value;
        const category = document.getElementById("category").value;
        const amount = parseFloat(document.getElementById("amount").value);
        const date = document.getElementById("date").value;

        // Update income or expenses
        if (type === "income") {
            income += amount;
        } else {
            expenses += amount;
        }

        // Update balance
        balance = income - expenses;

        // Update summary cards
        totalIncome.textContent = `$${income.toFixed(2)}`;
        totalExpenses.textContent = `$${expenses.toFixed(2)}`;
        remainingBalance.textContent = `$${balance.toFixed(2)}`;

        // Add entry to the table
        const newRow = budgetTable.insertRow();
        newRow.innerHTML = `
            <td>${type}</td>
            <td>${category}</td>
            <td>$${amount.toFixed(2)}</td>
            <td>${date}</td>
            <td><button class="btn btn-danger btn-sm" onclick="deleteEntry(this)">Delete</button></td>
        `;

        // Clear the form
        budgetForm.reset();
    });

    // Delete entry and update summary
    window.deleteEntry = (button) => {
        const row = button.closest("tr");
        const type = row.cells[0].textContent;
        const amount = parseFloat(row.cells[2].textContent.replace("$", ""));

        // Update income or expenses
        if (type === "income") {
            income -= amount;
        } else {
            expenses -= amount;
        }

        // Update balance
        balance = income - expenses;

        // Update summary cards
        totalIncome.textContent = `$${income.toFixed(2)}`;
        totalExpenses.textContent = `$${expenses.toFixed(2)}`;
        remainingBalance.textContent = `$${balance.toFixed(2)}`;

        // Remove the row
        row.remove();
    };
});