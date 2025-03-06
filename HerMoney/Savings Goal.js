function addGoal() {
    let goalName = document.getElementById("goalName").value;
    let goalAmount = document.getElementById("goalAmount").value;
    let savedAmount = document.getElementById("savedAmount").value;
    let goalDeadline = document.getElementById("goalDeadline").value;
    let goalPriority = document.getElementById("goalPriority").value;

    if (!goalName || !goalAmount || !savedAmount || !goalDeadline) {
        alert("Please fill all fields");
        return;
    }

    let goalCard = document.createElement("div");
    goalCard.classList.add("goal-card", goalPriority);

    let percentage = (savedAmount / goalAmount) * 100;
    let today = new Date();
    let deadline = new Date(goalDeadline);
    let timeDiff = deadline - today;
    let daysLeft = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

    goalCard.innerHTML = `
        <h3>${goalName}</h3>
        <p>🎯 Target: $${goalAmount} | 💰 Saved: $${savedAmount}</p>
        <div class="progress-bar">
            <div class="progress" style="width: ${percentage}%;"></div>
        </div>
        <p class="deadline">📅 Deadline: ${goalDeadline} (${daysLeft} days left)</p>
        <p class="alert">${getProgressAlert(percentage)}</p>
    `;

    document.getElementById("goalsList").appendChild(goalCard);
}

function getProgressAlert(percentage) {
    if (percentage >= 100) return "🎉 Goal Achieved! Well done!";
    if (percentage >= 75) return "🔥 Almost there! Keep going!";
    if (percentage >= 50) return "⚡ You're halfway there!";
    return "🚀 Keep saving and stay consistent!";
}
