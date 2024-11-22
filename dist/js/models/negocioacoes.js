export class Negociacoes {
    negociacoes = [];
    // Atalho para indicar um array com tipo especifico de dados
    adicionarNegociação(negociação) {
        this.negociacoes.push(negociação);
    }
    lista() {
        return this.negociacoes;
    }
}
// Generics, servem como uma forma de indicar qual tipo de informação uma
// determinado tipo de dado (Objeto e arrays principalmente) deve conter.
