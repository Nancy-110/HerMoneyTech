document.addEventListener("DOMContentLoaded", () => {
    const careerNetworkList = document.getElementById("career-network-list");

    // Predefined career networking links
    const careerLinks = [
        { name: "LinkedIn Jobs", url: "https://www.linkedin.com/jobs/" },
        { name: "AngelList", url: "https://angel.co/jobs" },
        { name: "Women in FinTech Community", url: "https://www.womeninfintech.co/" },
        { name: "Glassdoor", url: "https://www.glassdoor.com/" },
        { name: "Xing", url: "https://www.xing.com/" },
        { name: "Meetup (FinTech Events)", url: "https://www.meetup.com/pro/fintech/" }
    ];

    // Display first 3 links initially
    careerLinks.slice(0, 3).forEach(link => addCareerLink(link));

    // Function to add links dynamically
    function addCareerLink(link) {
        const li = document.createElement("li");
        li.innerHTML = <a href="${link.url}" target="_blank">${link.name}</a>;
        careerNetworkList.appendChild(li);
    }

    // Load more links on button click
    window.loadMoreCareerLinks = function () {
        careerLinks.slice(3).forEach(link => addCareerLink(link));
    };
});