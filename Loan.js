document.addEventListener("DOMContentLoaded", () => {
    const loanResources = document.getElementById("loan-resources");

    // Loan resources links
    const loanLinks = [
        { name: "Mudra Loan for Women", url: "https://www.mudra.org.in/" },
        { name: "Stand Up India Scheme", url: "https://www.standupmitra.in/" },
        { name: "Annapurna Scheme", url: "https://www.sbi.co.in/" },
        { name: "Dena Shakti Scheme", url: "https://www.denabank.com/" }
    ];

    // Add loan links dynamically
    loanLinks.forEach(link => {
        const li = document.createElement("li");
        li.innerHTML = <a href="${link.url}" target="_blank" style="color: yellow;">${link.name}</a>;
        loanResources.appendChild(li);
    });

    // Loan Calculator Function
    window.calculateLoan = function () {
        const principal = parseFloat(document.getElementById("loanAmount").value);
        const interestRate = parseFloat(document.getElementById("interestRate").value) / 100 / 12;
        const loanTerm = parseFloat(document.getElementById("loanTerm").value);

        const x = Math.pow(1 + interestRate, loanTerm);
        const monthly = (principal * x * interestRate) / (x - 1);

        document.getElementById("monthlyPayment").textContent = isFinite(monthly) ? "$" + monthly.toFixed(2) : "Error in calculation";
    };
});
