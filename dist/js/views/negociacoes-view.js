export class NegociacoesView {
    element;
    constructor(selector) {
        this.element = document.querySelector(selector);
    }
    template() {
        return ` 
    
    <table class='table table-hober table-bordered'>
      <thead>
        <tr>
          <th>Data</th>
          <th>Quantidade</th>
          <th>Valor</th>
        </tr>
      </thead>
      <tbody>

      </tbody>
    </table>
    
    `;
    }
    uptade() {
        this.element.innerHTML = this.template();
    }
}
