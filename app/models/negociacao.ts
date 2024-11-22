export class Negociacao {
  /* 
    Typescript auto-detecta que os parametros do construtor serão 
    as variaveis dentro dele.e terão o valor referente ao seu proprio 
    nome (this._data = _data por exemplo) para isso basta explicitar 
    o status do parametro do construtor (public ou private) 
  */
  constructor(
    private _data: Date,
    private readonly valor: number,
    private readonly quantidade: number
  ) {}

  get volume(): number {
    return this.quantidade * this.valor;
  }

  get data() {
    const newData = new Date(this._data.getTime());
    return newData;
  }

  /* 
    Usar readonly ou o modo "tradicional" vai depender da situação.
    Neste caso de data, mesmo usando readonly, podiamos modificar a data
    atraves do metodo encontrado direto do objeto date chamado setDate.
    Então clonamos a mesma data para manter a original imutavel. Este
    processo chamados de programação defensiva. 
  */
}
