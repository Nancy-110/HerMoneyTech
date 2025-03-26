document.addEventListener("DOMContentLoaded", function () {
    const termsBox = document.getElementById("termsBox");
    const acceptCheckbox = document.getElementById("acceptCheckbox");
    const acceptBtn = document.getElementById("acceptBtn");

    termsBox.addEventListener("scroll", function () {
        if (termsBox.scrollHeight - termsBox.scrollTop <= termsBox.clientHeight + 1) {
            acceptCheckbox.disabled = false;
        }
    });

    acceptCheckbox.addEventListener("change", function () {
        acceptBtn.disabled = !this.checked;
    });
});