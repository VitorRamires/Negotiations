import { Negociacao } from "./negociacao";

export class Negociacoes {
  private negociacoes: Array<Negociacao> = [];

  adicionarNegociação(negociação: Negociacao) {
    this.negociacoes.push(negociação);
  }

  lista(): ReadonlyArray<Negociacao> {
    return this.negociacoes;
  }
}

// Generics, servem como uma forma de indicar qual tipo de informação, uma
// determinado tipo de dado (Objeto e arrays principalmente) deve conter.
