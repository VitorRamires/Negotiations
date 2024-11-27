export class Negociacao {
  constructor(
    private _data: Date,
    private readonly _valor: number,
    private readonly _quantidade: number
  ) {}

  get quantidade(): number {
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
