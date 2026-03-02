import { LitElement, html } from "lit";
import styles from "./app-header.css.js";

class AppHeader extends LitElement { 
  render() {
    return html`
      <header>
        <h1>Mis Tareas</h1>
      </header>
    `;
  }

  static styles = styles
}

customElements.define("app-header", AppHeader);