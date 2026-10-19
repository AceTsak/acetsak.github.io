const themeButton = document.querySelector("#theme-toggle");

themeButton.addEventListener("click", function () {
    document.body.classList.toggle("light-theme");

    const isLight = document.body.classList.contains("light-theme");

    if (isLight) {
        themeButton.textContent = "Switch to dark theme";
    } else {
        themeButton.textContent = "Switch to light theme";
    }
});

const revealElements = document.querySelectorAll(
    "main section, #projects article"
);

const observer = new IntersectionObserver(
    function (entries, observer) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.15
    }
);

revealElements.forEach(function (element) {
    element.classList.add("reveal");
    observer.observe(element);
});