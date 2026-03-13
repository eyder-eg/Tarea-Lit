import { LitElement, html } from "lit";
import styles from "./app-main.css.js";
import "./app-list.js";
import "./app-add-item.js";
import { CONSTANTS } from "../utils/constants.js";

export class AppMain extends LitElement {
  static properties = {
    list: { type: Array },
  };
  constructor() {
    super();
    
    this.list = [...CONSTANTS.TEST_TASKS];
  }

  _handleAddItem(e) {
    const item = e.detail.item;
    if (this.list.includes(item)) return alert("La taréa ya está agregada")
    this.list = [...this.list, item];
  }

  _handleDeleteItem(e) {
    const titleToDelete = e.detail.title;
    this.list = this.list.filter((item) => item.title !== titleToDelete);
  }

  render() {
    return html`
      <main>
        <app-list
          .list=${this.list}
          @delete-item=${this._handleDeleteItem}
        ></app-list>
        <app-add-item @add-item=${this._handleAddItem}></app-add-item>
      </main>
    `;
  }

  static styles = styles;
}

customElements.define("app-main", AppMain);
