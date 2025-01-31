document.addEventListener("DOMContentLoaded", function () {
    // Mode sombre / clair
    const toggleThemeBtn = document.createElement("button");
    toggleThemeBtn.textContent = "☀️ Light Mode";
    toggleThemeBtn.classList.add("theme-toggle");
    document.body.appendChild(toggleThemeBtn);

    toggleThemeBtn.addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
        const isLight = document.body.classList.contains("light-mode");
        toggleThemeBtn.textContent = isLight ? "☀️ Light Mode" : "🌙 Dark Mode";
    });

    // Défilement fluide
    document.querySelectorAll("nav ul li a").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });

    // Animation d'apparition des sections
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.2 });

    sections.forEach(section => {
        observer.observe(section);
    });
});
