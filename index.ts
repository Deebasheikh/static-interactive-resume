// Function to toggle the visibility of a section
function toggleVisibility(sectionId: string): void {
    const section = document.getElementById(sectionId);
    if (section) {
      section.style.display = section.style.display === "none" ? "block" : "none";
    }
  }
  
  // Attach event listeners to each button
  function addToggle(): void {
    const buttons = document.querySelectorAll(".toggle-button");
    buttons.forEach(button => {
      button.addEventListener("click", () => {
        const sectionId = (button as HTMLButtonElement).dataset.section;
        if (sectionId) {
          toggleVisibility(sectionId);
        }
      });
    });
  }
  
  // Initialize event listeners once the content is loaded
  document.addEventListener("DOMContentLoaded", addToggleEventListeners);
  