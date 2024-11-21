export class Negociacao {
  /* 
    Typescript auto-detecta que os parametros do construtor serão as variaveis dentro dele.
    e terão o valor referente ao seu proprio nome (this._data = _data por exemplo)
    para isso basta explicitar o status do parametro do construtor (public ou private) 
  */
  constructor(
    private readonly data: Date,
    private readonly valor: number,
    private readonly quantidade: number
  ) {}

  get volume(): number {
    return this.quantidade * this.valor;
  }
}
