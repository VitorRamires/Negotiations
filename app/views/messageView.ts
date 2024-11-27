import { View } from "./view.js";

export class MessageView extends View<string> {
  template(model: string) {
    return `<p>${model}</p>`;
  }
}
