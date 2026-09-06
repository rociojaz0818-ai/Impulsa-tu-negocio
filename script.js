// =========================
// INTERACCIÓN DEL HERO
// =========================

const hero = document.querySelector(".hero");
const stars = document.querySelectorAll(".star");
const heroContent = document.querySelector(".hero-content");

if (hero) {
    hero.addEventListener("mousemove", (event) => {

        const rect = hero.getBoundingClientRect();

        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;

        stars.forEach((star, index) => {

            const movement = (index + 1) * 12;

            star.style.transform =
                `translate(${x * movement}px, ${y * movement}px)`;
        });

        heroContent.style.transform =
            `translate(${x * 8}px, ${y * 8}px)`;
    });

    hero.addEventListener("mouseleave", () => {

        stars.forEach((star) => {
            star.style.transform = "";
        });

        heroContent.style.transform = "";
    });
}


// =========================
// OPCIONES DEL EMPRENDIMIENTO
// =========================

const businessCards = document.querySelectorAll(".business-card");

const responseTitle = document.querySelector("#response-title");
const responseText = document.querySelector("#response-text");

const businessData = {

    productos: {
        title: "MOSTRÁ LO QUE VENDÉS",
        text: "Una página donde tus clientes puedan conocer tus productos, descubrir lo que ofrecés y encontrar fácilmente la forma de contactarte o realizar un pedido."
    },

    servicios: {
        title: "PRESENTÁ LO QUE HACÉS",
        text: "Mostrá tus servicios de una manera clara y profesional, explicando qué ofrecés y facilitando que tus clientes puedan consultarte."
    },

    portafolio: {
        title: "TU TRABAJO HABLA POR VOS",
        text: "Una web pensada para mostrar tus proyectos, trabajos, fotografías, ilustraciones o cualquier creación que quieras convertir en tu carta de presentación."
    },

    reservas: {
        title: "HACÉ MÁS FÁCIL RESERVAR",
        text: "Mostrá tus servicios y facilitá que tus clientes puedan consultar disponibilidad, solicitar turnos o ponerse en contacto con vos."
    },

    catalogo: {
        title: "TODO EN UN SOLO LUGAR",
        text: "Organizá tus productos en un catálogo online para que tus clientes puedan recorrerlos, conocerlos y encontrar rápidamente lo que buscan."
    },

    otro: {
        title: "CREAMOS ALGO PARA VOS",
        text: "Si tu emprendimiento no entra en ninguna de estas categorías, no hay problema. Podemos pensar una página adaptada específicamente a lo que necesitás."
    }
};


// =========================
// CAMBIO DE CONTENIDO
// =========================

businessCards.forEach((card) => {

    card.addEventListener("click", () => {

        const type = card.dataset.type;
        const selected = businessData[type];

        if (!selected) return;

        businessCards.forEach((item) => {
            item.classList.remove("active");
        });

        card.classList.add("active");

        responseTitle.textContent = selected.title;
        responseText.textContent = selected.text;

    });

});
