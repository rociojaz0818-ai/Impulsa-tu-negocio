const hero = document.querySelector(".hero");
const stars = document.querySelectorAll(".star");
const heroContent = document.querySelector(".hero-content");

hero.addEventListener("mousemove", (event) => {
    const rect = hero.getBoundingClientRect();

    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;

    stars.forEach((star, index) => {
        const movement = (index + 1) * 12;

        star.style.transform = `
            translate(${x * movement}px, ${y * movement}px)
        `;
    });

    heroContent.style.transform = `
        translate(${x * 8}px, ${y * 8}px)
    `;
});

hero.addEventListener("mouseleave", () => {

    stars.forEach((star) => {
        star.style.transform = "";
    });

    heroContent.style.transform = "";
});
