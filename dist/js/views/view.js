/*
  Reaproveitando código dos outros arquivos de view. Onde utilziamos
  template e uptade. o uptade não é necessario reescrever, diferente
  do template; Onde caso o template das classes filhas não existam,
  um erro é retornado. Além disso, devemos usar um generic não atribuido
  dentro da classe pai, visto que não sabemos qual o tipo será retornado
  então, ao extender o view nas classes  filhas, atribuimos o valor do
  type.
*/
export class View {
    /*
    protected é uma forma da classe pai manter a propriedade restrita
    apenas a classe pai e suas classes filhas. Diferente da private, que
    não permite nem as classes filhas acessar tal propriedade.
  */
    element;
    constructor(selector) {
        this.element = document.querySelector(selector);
    }
    template(model) {
        throw Error("A classe filha precisa de um template");
    }
    uptade(model) {
        this.element.innerHTML = this.template(model);
    }
}
