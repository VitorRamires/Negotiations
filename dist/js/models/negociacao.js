export class Negociacao {
    _data;
    _valor;
    _quantidade;
    /*
      Typescript auto-detecta que os parametros do construtor serão
      as variaveis dentro dele e terão o valor referente ao seu proprio
      nome (this._data = _data por exemplo) para isso basta explicitar
      o status do parametro do construtor (public ou private)
    */
    constructor(_data, _valor, _quantidade) {
        this._data = _data;
        this._valor = _valor;
        this._quantidade = _quantidade;
    }
    get quantidade() {
        return this._quantidade;
    }
    get data() {
        const newData = new Date(this._data.getTime());
        return newData;
    }
    get valor() {
        return this._valor;
    }
}
