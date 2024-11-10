// Function to toggle the visibility of a section
function toggleSectionVisibility(sectionId) {
    var section = document.getElementById(sectionId);
    if (section) {
        section.style.display = section.style.display === "none" ? "block" : "none";
    }
}
// Attach event listeners to each button
function addToggleEventListeners() {
    var buttons = document.querySelectorAll(".toggle-button");
    buttons.forEach(function (button) {
        button.addEventListener("click", function () {
            var sectionId = button.dataset.section;
            if (sectionId) {
                toggleSectionVisibility(sectionId);
            }
        });
    });
}
// Initialize event listeners once the content is loaded
document.addEventListener("DOMContentLoaded", addToggleEventListeners);
