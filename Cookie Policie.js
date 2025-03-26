document.addEventListener("DOMContentLoaded", () => {
    const cookieBanner = document.getElementById("cookie-banner");
    const acceptCookies = document.getElementById("accept-cookies");
    const declineCookies = document.getElementById("decline-cookies");

    // Check if the user has already made a choice
    if (localStorage.getItem("cookieConsent") === "accepted") {
        cookieBanner.style.display = "none";
    }

    // Accept Cookies
    acceptCookies.addEventListener("click", () => {
        localStorage.setItem("cookieConsent", "accepted");
        cookieBanner.style.display = "none";
    });

    // Decline Cookies
    declineCookies.addEventListener("click", () => {
        localStorage.setItem("cookieConsent", "declined");
        cookieBanner.style.display = "none";
    });
});