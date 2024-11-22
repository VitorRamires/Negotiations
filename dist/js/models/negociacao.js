export class Negociacao {
    _data;
    valor;
    quantidade;
    /*
      Typescript auto-detecta que os parametros do construtor serão
      as variaveis dentro dele.e terão o valor referente ao seu proprio
      nome (this._data = _data por exemplo) para isso basta explicitar
      o status do parametro do construtor (public ou private)
    */
    constructor(_data, valor, quantidade) {
        this._data = _data;
        this.valor = valor;
        this.quantidade = quantidade;
    }
    get volume() {
        return this.quantidade * this.valor;
    }
    get data() {
        const newData = new Date(this._data.getTime());
        return newData;
    }
}
