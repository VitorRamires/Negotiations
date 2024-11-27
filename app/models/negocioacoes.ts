import { Negociacao } from "./negociacao";

export class Negociacoes {
  private negociacoes: Negociacao[] = [];

  adicionarNegociação(negociação: Negociacao) {
    this.negociacoes.push(negociação);
  }

  lista(): ReadonlyArray<Negociacao> {
    return this.negociacoes;
  }
}

