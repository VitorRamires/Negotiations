export class View<Type> {
  protected element: HTMLElement;

  constructor(selector: string) {
    this.element = document.querySelector(selector);
  }

  template(model: Type): string {
    throw Error("A classe filha precisa de um template");
  }

  uptade(model: Type): void {
    this.element.innerHTML = this.template(model);
  }
}
