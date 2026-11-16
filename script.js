
"use strict";

/* ==========================================
   DEVWEB - PORTFÓLIO PROFISSIONAL

   Funcionalidades:
   - Menu responsivo
   - Fechamento automático do menu
   - Ano atualizado no rodapé

   O WhatsApp e o e-mail são controlados
   exclusivamente pelo personalizador.js.
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    // ======================================
    // MENU PARA CELULARES
    // ======================================

    const menuToggle = document.getElementById("menu-toggle");
    const nav = document.getElementById("nav");

    function fecharMenu() {
        if (!menuToggle || !nav) return;

        nav.classList.remove("active");

        menuToggle.textContent = "☰";

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

        menuToggle.setAttribute(
            "aria-label",
            "Abrir menu"
        );
    }

    if (menuToggle && nav) {

        menuToggle.addEventListener("click", () => {

            const aberto = nav.classList.toggle("active");

            menuToggle.textContent = aberto ? "×" : "☰";

            menuToggle.setAttribute(
                "aria-expanded",
                String(aberto)
            );

            menuToggle.setAttribute(
                "aria-label",
                aberto ? "Fechar menu" : "Abrir menu"
            );

        });

        // Fechar menu ao clicar em um link

        nav.querySelectorAll("a").forEach((link) => {

            link.addEventListener("click", fecharMenu);

        });

        // Fechar menu ao pressionar Escape

        document.addEventListener("keydown", (evento) => {

            if (evento.key === "Escape") {
                fecharMenu();
            }

        });

    }

    // ======================================
    // ANO AUTOMÁTICO NO RODAPÉ
    // ======================================

    const ano = document.getElementById("year");

    if (ano) {
        ano.textContent = new Date().getFullYear();
    }

});
