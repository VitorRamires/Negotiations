import { View } from "./view.js";
export class NegociacoesView extends View {
    template(model) {
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
        ${model.lista().map((item) => {
            return `
          
          <tr>
            <td>${new Intl.DateTimeFormat("pt-BR").format(item.data)}</td>
            <td>${item.quantidade}</td>
            <td>${item.valor}</td>
          </tr>

          `;
        })}
      </tbody>
    </table>
    
    `;
    }
}
