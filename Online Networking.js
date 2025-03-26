document.addEventListener("DOMContentLoaded", () => {
    const networkList = document.getElementById("network-list");

    // Predefined online networking links
    const networkLinks = [
        { name: "LinkedIn Women in Finance", url: "https://www.linkedin.com/groups/6543217/" },
        { name: "Ellevate Network", url: "https://www.ellevatenetwork.com/" },
        { name: "Women Who Code", url: "https://www.womenwhocode.com/" },
        { name: "She Leads Digital", url: "https://sheleadsdigital.org/" },
        { name: "Lean In Circles", url: "https://leanin.org/circles" }
    ];

    // Display first 3 links initially
    networkLinks.slice(0, 3).forEach(link => addNetworkLink(link));

    // Function to add links dynamically
    function addNetworkLink(link) {
        const li = document.createElement("li");
        li.innerHTML = <a href="${link.url}" target="_blank">${link.name}</a>;
        networkList.appendChild(li);
    }

    // Load more links on button click
    window.loadMoreLinks = function () {
        networkLinks.slice(3).forEach(link => addNetworkLink(link));
    };
});