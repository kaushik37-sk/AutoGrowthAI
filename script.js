// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Button Click Example
document.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", () => {
        alert("Button clicked!");
    });
});

// Form Submission Example
document.querySelector("form")?.addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Form submitted successfully!");
});
