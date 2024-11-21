import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negocioacoes.js";
export class NegociacaoController {
    // Setamos as variaveis como privadas apenas desta classe
    inputData;
    inputQuantidade;
    inputValor;
    negociacoes = new Negociacoes();
    constructor() {
        this.inputData = document.querySelector("#data");
        this.inputQuantidade = document.querySelector("#quantidade");
        this.inputValor = document.querySelector("#valor");
    }
    criarNegociacao() {
        const date = new Date(this.inputData.value.replace("-", ","));
        const quantidade = parseInt(this.inputQuantidade.value);
        const valor = parseFloat(this.inputValor.value);
        return new Negociacao(date, quantidade, valor);
    }
    adicionar() {
        const negociacao = this.criarNegociacao();
        this.negociacoes.adicionarNegociação(negociacao);
        console.log(this.negociacoes.lista());
        this.limparForm();
    }
    limparForm() {
        this.inputData.value = "";
        this.inputQuantidade.value = "";
        this.inputValor.value = "";
        this.inputData.focus();
    }
}
// PROPRIEDADES DE CLASSE, METODOS DE CONSTRUTOR,
// FUNÇÃO E RETORNOS DE FUNÇÃO TIPAMOS ( RECOMENDAVEL )
// Evitar ANY para não perder funcionalidades do TS
