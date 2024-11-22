import { NegociacaoController } from "./controllers/negocioacao-controller.js";
const controller = new NegociacaoController();
const form = document.querySelector(".form");
form?.addEventListener("submit", (event) => {
    event.preventDefault();
    controller.adicionarNaLista();
});
