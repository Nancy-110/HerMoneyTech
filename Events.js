document.addEventListener("DOMContentLoaded", () => {
    const communityList = document.getElementById("community-list");

    // Predefined community and event links
    const communityLinks = [
        { name: "Women in FinTech", url: "https://www.womeninfintech.co" },
        { name: "Ladies Who Tech", url: "https://www.ladieswhotech.org" },
        { name: "Global Women in Finance", url: "https://www.womeninfinance.net" },
        { name: "Women in Business Summit", url: "https://www.womeninbusinesssummit.com" },
        { name: "Financial Literacy for Women", url: "https://www.financiallyfitwomen.com" }
    ];

    // Display first 3 links initially
    communityLinks.slice(0, 3).forEach(link => addCommunityLink(link));

    // Function to add links dynamically
    function addCommunityLink(link) {
        const li = document.createElement("li");
        li.innerHTML = <a href="${link.url}" target="_blank">${link.name}</a>;
        communityList.appendChild(li);
    }

    // Load more links on button click
    window.loadMoreLinks = function () {
        communityLinks.slice(3).forEach(link => addCommunityLink(link));
    };
});