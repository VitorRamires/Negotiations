export class Negociacao {
    _data;
    _valor;
    _quantidade;
    constructor(data, valor, quantidade) {
        (this._data = data),
            (this._valor = valor),
            (this._quantidade = quantidade);
    }
    get data() {
        return this._data;
    }
    get valor() {
        return this._valor;
    }
    get quantidade() {
        return this._quantidade;
    }
}
