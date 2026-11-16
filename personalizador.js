
"use strict";

/* ==========================================
   PERSONALIZADOR DE SITES
   PORTFÓLIO FREELANCER

   Projeto sem banco de dados.
   A mensagem é preparada no navegador.
========================================== */

document.addEventListener("DOMContentLoaded", () => {
    iniciarPersonalizador();
});

function iniciarPersonalizador() {
    const secaoContato = document.getElementById("contato");

    if (!secaoContato) {
        console.error(
            "Não foi possível localizar a seção Contato."
        );
        return;
    }

    // CONFIGURAÇÃO COMERCIAL
    // Adicione seu número somente no VS Code,
    // usando DDI + DDD + número, sem sinais.
    // Exemplo de formato: 55 + DDD + número.
    const WHATSAPP_COMERCIAL = "5569993210765";

    
    const EMAIL_COMERCIAL = "contato.webfreelancer.ro@gmail.com";

    const secao = document.createElement("section");

    secao.className = "personalizador-section";
    secao.id = "montar-site";

    secao.innerHTML = `
        <div class="personalizador-container">

            <div class="personalizador-intro">
                <span class="personalizador-label">
                    04 / PROJETO PERSONALIZADO
                </span>

                <h2>
                    Seu negócio é único.
                    <span>Seu site também pode ser.</span>
                </h2>

                <p>
                    Não encontrou um exemplo do seu ramo?
                    Conte como imagina seu site e monte
                    uma solicitação personalizada.
                </p>
            </div>

            <form id="personalizador-form">

                <div class="personalizador-grid">

                    <div class="personalizador-campo">
                        <label for="pers-negocio">
                            Nome do negócio (opcional)
                        </label>

                        <input
                            type="text"
                            id="pers-negocio"
                            maxlength="80"
                            placeholder="Ex.: Studio Bella Nails"
                        >
                    </div>

                    <div class="personalizador-campo">
                        <label for="pers-ramo">
                            Ramo de atuação
                        </label>

                        <select id="pers-ramo" required>
                            <option value="">
                                Selecione seu ramo
                            </option>
                            <option value="Beleza e estética">
                                Beleza e estética
                            </option>
                            <option value="Nail designer">
                                Nail designer
                            </option>
                            <option value="Moda e acessórios">
                                Moda e acessórios
                            </option>
                            <option value="Restaurante e alimentação">
                                Restaurante e alimentação
                            </option>
                            <option value="Saúde e bem-estar">
                                Saúde e bem-estar
                            </option>
                            <option value="Serviços automotivos">
                                Serviços automotivos
                            </option>
                            <option value="Imobiliária">
                                Imobiliária
                            </option>
                            <option value="Outro">
                                Outro ramo
                            </option>
                        </select>
                    </div>

                    <div
                        class="personalizador-campo"
                        id="pers-outro-container"
                        hidden
                    >
                        <label for="pers-outro">
                            Qual é o seu ramo?
                        </label>

                        <input
                            type="text"
                            id="pers-outro"
                            maxlength="80"
                            placeholder="Digite seu ramo de atuação"
                        >
                    </div>

                    <div class="personalizador-campo">
                        <label for="pers-tipo">
                            Tipo de site
                        </label>

                        <select id="pers-tipo" required>
                            <option value="">
                                Selecione uma opção
                            </option>
                            <option value="Site institucional">
                                Site institucional
                            </option>
                            <option value="Landing page">
                                Landing page
                            </option>
                            <option value="Catálogo digital">
                                Catálogo digital
                            </option>
                            <option value="Site personalizado">
                                Ainda não sei / Personalizado
                            </option>
                        </select>
                    </div>

                    <div class="personalizador-campo">
                        <label for="pers-estilo">
                            Estilo visual preferido
                        </label>

                        <select id="pers-estilo" required>
                            <option value="">
                                Selecione um estilo
                            </option>
                            <option value="Moderno e minimalista">
                                Moderno e minimalista
                            </option>
                            <option value="Elegante e sofisticado">
                                Elegante e sofisticado
                            </option>
                            <option value="Delicado e acolhedor">
                                Delicado e acolhedor
                            </option>
                            <option value="Colorido e criativo">
                                Colorido e criativo
                            </option>
                            <option value="A definir">
                                Quero sugestões
                            </option>
                        </select>
                    </div>

                </div>

                <fieldset class="personalizador-recursos">
                    <legend>
                        Quais funcionalidades você gostaria?
                    </legend>

                    <div class="personalizador-checks">

                        <label>
                            <input
                                type="checkbox"
                                name="recursos"
                                value="Galeria de fotos"
                            >
                            Galeria de fotos
                        </label>

                        <label>
                            <input
                                type="checkbox"
                                name="recursos"
                                value="Contato pelo WhatsApp"
                            >
                            Contato pelo WhatsApp
                        </label>

                        <label>
                            <input
                                type="checkbox"
                                name="recursos"
                                value="Catálogo de serviços e preços"
                            >
                            Catálogo de serviços e preços
                        </label>

                        <label>
                            <input
                                type="checkbox"
                                name="recursos"
                                value="Solicitação de agendamento"
                            >
                            Solicitação de agendamento
                        </label>

                        <label>
                            <input
                                type="checkbox"
                                name="recursos"
                                value="Localização e mapa"
                            >
                            Localização e mapa
                        </label>

                        <label>
                            <input
                                type="checkbox"
                                name="recursos"
                                value="Formulário de orçamento"
                            >
                            Formulário de orçamento
                        </label>

                    </div>
                </fieldset>

                <div class="personalizador-campo">
                    <label for="pers-observacoes">
                        Conte mais sobre sua ideia (opcional)
                    </label>

                    <textarea
                        id="pers-observacoes"
                        maxlength="700"
                        rows="4"
                        placeholder="Ex.: Quero usar as cores rosa e branco, mostrar meus trabalhos e permitir que clientes solicitem horários."
                    ></textarea>
                </div>

                <button
                    type="submit"
                    class="personalizador-botao"
                >
                    Preparar meu orçamento ↗
                </button>

                <p
                    class="personalizador-feedback"
                    id="pers-feedback"
                    role="status"
                    aria-live="polite"
                ></p>

                <div
                    class="personalizador-resultado"
                    id="pers-resultado"
                    hidden
                >
                    <h3>Sua solicitação está pronta!</h3>

                    <p>
                        Confira a mensagem e escolha como
                        deseja entrar em contato.
                    </p>

                    <pre id="pers-texto"></pre>

                    <div class="personalizador-acoes">
                        <button
                            type="button"
                            id="pers-copiar"
                            class="personalizador-botao"
                        >
                            Copiar mensagem
                        </button>

                        <a
                            id="pers-whatsapp"
                            href="#montar-site"
                            target="_blank"
                            rel="noopener noreferrer"
                            hidden
                        >
                            Enviar pelo WhatsApp ↗
                        </a>

                        <a
                            id="pers-email"
                            href="#montar-site"
                            hidden
                        >
                            Enviar por e-mail ↗
                        </a>
                    </div>
                </div>

                <p class="personalizador-aviso">
                    O formulário prepara uma solicitação
                    de orçamento. O preço e o prazo
                    serão definidos após a análise
                    do projeto.
                </p>

            </form>

        </div>
    `;

    secaoContato.before(secao);

    const formulario = document.getElementById(
        "personalizador-form"
    );

    const ramo = document.getElementById("pers-ramo");
    const outroContainer = document.getElementById(
        "pers-outro-container"
    );

    const outro = document.getElementById("pers-outro");

    const resultado = document.getElementById(
        "pers-resultado"
    );

    const texto = document.getElementById("pers-texto");

    const feedback = document.getElementById(
        "pers-feedback"
    );

    const copiar = document.getElementById("pers-copiar");

    const botaoWhatsApp = document.getElementById(
        "pers-whatsapp"
    );

    const botaoEmail = document.getElementById(
        "pers-email"
    );

    let mensagemAtual = "";

    ramo.addEventListener("change", () => {
        const mostrarOutro = ramo.value === "Outro";

        outroContainer.hidden = !mostrarOutro;
        outro.required = mostrarOutro;

        if (!mostrarOutro) {
            outro.value = "";
        }
    });

    formulario.addEventListener("input", () => {
        resultado.hidden = true;
        feedback.textContent = "";
    });

    formulario.addEventListener("submit", (evento) => {
        evento.preventDefault();

        const negocio = document
            .getElementById("pers-negocio")
            .value.trim();

        const ramoEscolhido =
            ramo.value === "Outro"
                ? outro.value.trim()
                : ramo.value;

        const tipo = document
            .getElementById("pers-tipo")
            .value;

        const estilo = document
            .getElementById("pers-estilo")
            .value;

        const observacoes = document
            .getElementById("pers-observacoes")
            .value.trim();

        const recursos = Array.from(
            formulario.querySelectorAll(
                'input[name="recursos"]:checked'
            )
        ).map((campo) => campo.value);

        if (!ramoEscolhido || !tipo || !estilo) {
            feedback.textContent =
                "Preencha os campos obrigatórios.";
            return;
        }

        mensagemAtual = [
            "Olá! Conheci seu portfólio e gostaria de solicitar um orçamento para um site.",
            "",
            `Negócio: ${negocio || "Não informado"}`,
            `Ramo: ${ramoEscolhido}`,
            `Tipo de site: ${tipo}`,
            `Estilo: ${estilo}`,
            "",
            "Funcionalidades desejadas:",
            recursos.length
                ? recursos.map((item) => `- ${item}`).join("\n")
                : "Ainda não defini.",
            "",
            `Observações: ${observacoes || "Nenhuma."}`,
            "",
            "Gostaria de saber mais sobre valores e prazos."
        ].join("\n");

        texto.textContent = mensagemAtual;
        resultado.hidden = false;

        const numero = WHATSAPP_COMERCIAL.replace(/\D/g, "");

        if (numero) {
            botaoWhatsApp.href =
                `https://wa.me/${numero}?text=` +
                encodeURIComponent(mensagemAtual);

            botaoWhatsApp.hidden = false;
        } else {
            botaoWhatsApp.hidden = true;
        }

        if (EMAIL_COMERCIAL.trim()) {
            const assunto = encodeURIComponent(
                "Solicitação de orçamento para site"
            );

            const corpo = encodeURIComponent(
                mensagemAtual
            );

            botaoEmail.href =
                `mailto:${EMAIL_COMERCIAL.trim()}` +
                `?subject=${assunto}&body=${corpo}`;

            botaoEmail.hidden = false;
        } else {
            botaoEmail.hidden = true;
        }

        feedback.textContent =
            "Solicitação preparada com sucesso!";

        resultado.scrollIntoView({
            behavior: "smooth",
            block: "nearest"
        });
    });

    copiar.addEventListener("click", async () => {
        if (!mensagemAtual) return;

        try {
            await navigator.clipboard.writeText(
                mensagemAtual
            );

            feedback.textContent =
                "Mensagem copiada com sucesso!";
        } catch {
            const selecao = window.getSelection();
            const intervalo = document.createRange();

            intervalo.selectNodeContents(texto);

            selecao.removeAllRanges();
            selecao.addRange(intervalo);

            feedback.textContent =
                "Selecionei o texto. Pressione Ctrl + C para copiar.";
        }
    });
}
