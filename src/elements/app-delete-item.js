import { LitElement, html } from "lit";
import styles from "./app-delete-item.css.js";

class AppDeleteItem extends LitElement {
  static properties = {
    title: { type: String },
  };

  constructor() {
    super();
    this.title = "";
  }

  _deleteItem() {
    if (!this.title) return;
    this.dispatchEvent(
      new CustomEvent("delete-item", {
        detail: {
            title: this.title,
        },
        bubbles: true,
        composed: true,
      }),
    );

    this.title = "";
  }

  render() {
    return html`
      <button @click=${this._deleteItem}>Eliminar</button>
    `;
  }

  static styles = styles;
}

customElements.define("app-delete-item", AppDeleteItem);
