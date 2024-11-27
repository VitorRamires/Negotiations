import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negocioacoes.js";
import { MessageView } from "../views/messageView.js";
import { NegociacoesView } from "../views/negociacoes-view.js";

export class NegociacaoController {
  private inputData: HTMLInputElement;
  private inputQuantidade: HTMLInputElement;
  private inputValor: HTMLInputElement;
  private negociacoes = new Negociacoes();
  private negociacoesView = new NegociacoesView("#negociacoesView");
  private messageView = new MessageView("#mensagemView");

  constructor() {
    this.inputData = document.querySelector("#data");
    this.inputQuantidade = document.querySelector("#quantidade");
    this.inputValor = document.querySelector("#valor");
    this.negociacoesView.uptade(this.negociacoes);
    this.messageView.uptade("Item adicionado com sucesso");
  }

  criarNegociacao(): Negociacao {
    const date = new Date(this.inputData.value.replace("-", ","));

    const quantidade = parseInt(this.inputQuantidade.value);
    const valor = parseFloat(this.inputValor.value);

    return new Negociacao(date, quantidade, valor);
  }

  adicionarNaLista(): void {
    const negociacao = this.criarNegociacao();
    this.negociacoes.adicionarNegociação(negociacao);
    this.negociacoesView.uptade(this.negociacoes);
    this.limparForm();
  }

  limparForm(): void {
    this.inputData.value = "";
    this.inputQuantidade.value = "";
    this.inputValor.value = "";

    this.inputData.focus();
  }
}
