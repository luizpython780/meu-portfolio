
// MENU PARA CELULARES

const menuToggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");

menuToggle.addEventListener("click", () => {
    const aberto = nav.classList.toggle("active");

    menuToggle.textContent = aberto ? "×" : "☰";

    menuToggle.setAttribute("aria-expanded", aberto);

    menuToggle.setAttribute(
        "aria-label",
        aberto ? "Fechar menu" : "Abrir menu"
    );
});

// FECHAR MENU AO CLICAR EM UM LINK

nav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");

        menuToggle.textContent = "☰";
        menuToggle.setAttribute("aria-expanded", "false");
    });
});

// ATUALIZAR ANO AUTOMATICAMENTE

document.getElementById("year").textContent =
    new Date().getFullYear();

// WHATSAPP PROFISSIONAL

// Coloque seu número com 55 + DDD + número.
// Exemplo de formato: 5569999999999
const numeroWhatsApp = "5569993210765";

const mensagemWhatsApp =
    "Olá! Vi seu portfólio e gostaria de conversar sobre a criação de um site.";

const linkWhatsApp =
    "https://wa.me/" +
    numeroWhatsApp +
    "?text=" +
    encodeURIComponent(mensagemWhatsApp);

const botaoWhatsApp = document.getElementById("botao-whatsapp");

if (botaoWhatsApp) {
    botaoWhatsApp.addEventListener("click", function(event) {
        if (!numeroWhatsApp) {
            event.preventDefault();
            alert("Configure seu número de WhatsApp no arquivo script.js.");
        } else {
            botaoWhatsApp.href = linkWhatsApp;
        }
    });
}
