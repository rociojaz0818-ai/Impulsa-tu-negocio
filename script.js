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
// =========================
// OBJETIVOS
// =========================

const goalCards = document.querySelectorAll(".goal-card");

const goalCount = document.querySelector("#goal-count");
const goalsResultTitle = document.querySelector("#goals-result-title");
const goalsResultText = document.querySelector("#goals-result-text");


const goalData = {

    ventas: {
        title: "QUERÉS HACER CRECER TU NEGOCIO.",
        text: "Una página puede ayudarte a mostrar lo que vendés, presentar tus productos y facilitar el camino entre conocer tu marca y realizar una compra."
    },

    imagen: {
        title: "QUERÉS QUE TU MARCA SE VEA COMO IMAGINÁS.",
        text: "Tu página puede convertirse en una extensión de la identidad de tu emprendimiento y ayudarte a construir una imagen más completa y profesional."
    },

    clientes: {
        title: "QUERÉS ESTAR MÁS CERCA.",
        text: "Una web puede reunir la información que tus clientes necesitan y hacer más sencilla la forma de comunicarse con vos."
    },

    informacion: {
        title: "QUERÉS ORDENARLO TODO.",
        text: "Productos, servicios, horarios, información y formas de contacto pueden convivir en un mismo espacio."
    },

    contacto: {
        title: "QUERÉS QUE CONTACTARTE SEA MÁS FÁCIL.",
        text: "Podemos destacar WhatsApp, redes sociales, formularios, ubicación y otros canales para que tus clientes encuentren rápidamente cómo comunicarse."
    },

    profesional: {
        title: "QUERÉS DAR UNA MEJOR PRIMERA IMPRESIÓN.",
        text: "Una página diseñada específicamente para tu emprendimiento puede ayudarte a presentar tu negocio de una forma clara, cuidada y profesional."
    }

};


goalCards.forEach((card) => {

    card.addEventListener("click", () => {

        card.classList.toggle("active");

        const selectedGoals = document.querySelectorAll(".goal-card.active");

        const total = selectedGoals.length;

        goalCount.textContent =
            `${total} ${total === 1 ? "OBJETIVO SELECCIONADO" : "OBJETIVOS SELECCIONADOS"}`;


        if (total === 0) {

            goalsResultTitle.textContent =
                "¿QUÉ QUERÉS LOGRAR?";

            goalsResultText.textContent =
                "Seleccioná una o varias opciones para comenzar a construir una idea de lo que necesitás.";

            return;
        }


        const firstGoal = selectedGoals[0].dataset.goal;

        const selectedData = goalData[firstGoal];

        if (!selectedData) return;


        if (total === 1) {

            goalsResultTitle.textContent =
                selectedData.title;

            goalsResultText.textContent =
                selectedData.text;

        } else {

            goalsResultTitle.textContent =
                "TENÉS UNA IDEA CLARA.";

            goalsResultText.textContent =
                `Seleccionaste ${total} objetivos. Podemos pensar una página que combine estas necesidades y se adapte realmente a tu emprendimiento.`;
        }

    });

});
// =========================
// NECESIDADES DEL CLIENTE
// =========================

const clientCards = document.querySelectorAll(".client-card");

const clientCount = document.querySelector("#client-count");

const clientResultTitle =
    document.querySelector("#client-result-title");

const clientResultText =
    document.querySelector("#client-result-text");


const clientData = {

    productos: {
        title: "QUE PUEDA VER LO QUE OFRECÉS.",
        text: "Podemos organizar tus productos de forma clara para que tu cliente pueda recorrerlos y conocerlos fácilmente."
    },

    servicios: {
        title: "QUE ENTIENDA LO QUE HACÉS.",
        text: "Una página puede explicar tus servicios de forma sencilla y mostrar qué podés ofrecerle a cada cliente."
    },

    precios: {
        title: "QUE ENCUENTRE LA INFORMACIÓN QUE BUSCA.",
        text: "Mostrar precios, promociones o información importante puede reducir dudas y facilitar la decisión de compra."
    },

    contacto: {
        title: "QUE PUEDA HABLAR CON VOS.",
        text: "Podemos destacar tus canales de contacto para que pasar de visitar tu página a consultarte sea mucho más sencillo."
    },

    reservar: {
        title: "QUE PUEDA RESERVAR.",
        text: "Si trabajás con turnos o reservas, podemos crear un espacio pensado específicamente para facilitar ese proceso."
    },

    ubicacion: {
        title: "QUE PUEDA ENCONTRARTE.",
        text: "Tu ubicación, horarios y formas de llegar pueden estar disponibles en un solo lugar y de manera fácil de consultar."
    }

};


clientCards.forEach((card) => {

    card.addEventListener("click", () => {

        card.classList.toggle("active");

        const selected =
            document.querySelectorAll(".client-card.active");

        const total = selected.length;

        clientCount.textContent =
            `${total} ${total === 1
                ? "NECESIDAD SELECCIONADA"
                : "NECESIDADES SELECCIONADAS"}`;


        if (total === 0) {

            clientResultTitle.textContent =
                "PENSEMOS EN TU CLIENTE.";

            clientResultText.textContent =
                "Seleccioná una o varias opciones para pensar qué debería encontrar tu cliente en tu página.";

            return;
        }


        const firstNeed =
            selected[0].dataset.need;

        const data =
            clientData[firstNeed];

        if (!data) return;


        if (total === 1) {

            clientResultTitle.textContent =
                data.title;

            clientResultText.textContent =
                data.text;

        } else {

            clientResultTitle.textContent =
                "TU CLIENTE SABRÁ QUÉ HACER.";

            clientResultText.textContent =
                `Seleccionaste ${total} necesidades. Podemos organizar la página para que tu cliente encuentre rápidamente la información y las acciones más importantes.`;

        }

    });

});
/* =========================
   ANIMACIONES AL HACER SCROLL
========================= */

const revealElements = document.querySelectorAll(
    `
    .business-header,
    .business-card,
    .business-response,

    .goals-header,
    .goal-card,
    .goals-result,

    .client-header,
    .client-card,
    .client-result,

    .result-header,
    .result-statement,
    .idea-card,
    .result-cta,

    .contact-content
    `
);

revealElements.forEach((element, index) => {

    element.classList.add("reveal");

    const delay = index % 4;

    if (delay > 0) {
        element.classList.add(`reveal-delay-${delay}`);
    }

});


const revealObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                revealObserver.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);


revealElements.forEach((element) => {
    revealObserver.observe(element);
});
/* =========================
   RESULTADO PERSONALIZADO
========================= */

const finalResultTitle = document.getElementById("final-result-title");
const finalResultText = document.getElementById("final-result-text");

const ideaOne = document.getElementById("idea-one");
const ideaTwo = document.getElementById("idea-two");
const ideaThree = document.getElementById("idea-three");

function updateFinalResult() {

    const selectedBusiness = document.querySelector(
        ".business-card.active"
    );

    const selectedGoals = document.querySelectorAll(
        ".goal-card.active"
    );

    const selectedNeeds = document.querySelectorAll(
        ".client-card.active"
    );


    /* SI TODAVÍA NO SELECCIONÓ NADA */

    if (
        !selectedBusiness &&
        selectedGoals.length === 0 &&
        selectedNeeds.length === 0
    ) {

        finalResultTitle.textContent =
            "TU PÁGINA PUEDE SER MUCHO MÁS.";

        finalResultText.textContent =
            "Seleccioná tus opciones anteriores para descubrir qué podemos construir para tu emprendimiento.";

        ideaOne.textContent =
            "MOSTRAR LO QUE HACÉS";

        ideaTwo.textContent =
            "CONECTAR CON TUS CLIENTES";

        ideaThree.textContent =
            "HACER CRECER TU MARCA";

        return;
    }


    /* NEGOCIO */

    let businessText = "";

    if (selectedBusiness) {

        const type = selectedBusiness.dataset.type;

        const businessNames = {

            productos: "mostrar tus productos",

            servicios: "presentar tus servicios",

            portafolio: "mostrar tu trabajo",

            reservas: "gestionar reservas y turnos",

            catalogo: "crear un catálogo online",

            otro: "mostrar tu emprendimiento de una forma personalizada"

        };

        businessText =
            businessNames[type] || "mostrar tu emprendimiento";

    }


    /* OBJETIVOS */

    const goalTexts = [];

    selectedGoals.forEach((card) => {

        const goal = card.dataset.goal;

        const texts = {

            ventas: "generar más ventas",

            imagen: "mostrar la imagen de tu marca",

            clientes: "estar más cerca de tus clientes",

            informacion: "tener toda la información organizada",

            contacto: "facilitar el contacto",

            profesional: "mostrar tu negocio de forma profesional"

        };

        if (texts[goal]) {
            goalTexts.push(texts[goal]);
        }

    });


    /* NECESIDADES DEL CLIENTE */

    const needTexts = [];

    selectedNeeds.forEach((card) => {

        const need = card.dataset.need;

        const texts = {

            productos: "ver tus productos",

            servicios: "conocer tus servicios",

            precios: "conocer tus precios",

            contacto: "contactarte fácilmente",

            reservar: "reservar un turno",

            ubicacion: "encontrar tu ubicación"

        };

        if (texts[need]) {
            needTexts.push(texts[need]);
        }

    });


    /* TÍTULO */

    finalResultTitle.textContent =
        "PENSEMOS UNA WEB PARA VOS.";


    /* TEXTO */

    let resultText =
        "Podemos pensar una página que te ayude a ";

    if (businessText) {
        resultText += businessText;
    } else {
        resultText += "mostrar tu emprendimiento";
    }


    if (goalTexts.length > 0) {

        resultText +=
            ", pensada para " +
            goalTexts.slice(0, 2).join(" y ");

    }


    if (needTexts.length > 0) {

        resultText +=
            ". Y que permita a tus clientes " +
            needTexts.slice(0, 2).join(" y ");

    }

    resultText += ".";

    finalResultText.textContent = resultText;


    /* TARJETAS */

    ideaOne.textContent =
        businessText
            ? businessText.toUpperCase()
            : "MOSTRAR LO QUE HACÉS";


    ideaTwo.textContent =
        goalTexts.length > 0
            ? goalTexts[0].toUpperCase()
            : "CONECTAR CON TUS CLIENTES";


    ideaThree.textContent =
        needTexts.length > 0
            ? needTexts[0].toUpperCase()
            : "HACER CRECER TU MARCA";

}


/* ACTUALIZAR CUANDO SELECCIONA ALGO */

document.addEventListener("click", (event) => {

    if (
        event.target.closest(".business-card") ||
        event.target.closest(".goal-card") ||
        event.target.closest(".client-card")
    ) {

        setTimeout(updateFinalResult, 50);

    }

});


/* ESTADO INICIAL */

updateFinalResult();
