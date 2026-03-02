import { LitElement, html } from "lit";
import styles from "./app-list.css.js";
import { repeat } from "lit/directives/repeat.js";
import "./app-delete-item.js";

class AppList extends LitElement {
  static properties = {
    list: { type: Array },
  };
  constructor() {
    super();
    this.list = [];
  }

  render() {
    return html`
      <ul>
        ${repeat(
          this.list,
          (item) => item.title,
          (item, index) =>
            html`<li>
              <div class="container-text">
                <h3>${item.title}</h3>
                <p>${item.description}</p>
              </div>
              <app-delete-item .title=${item.title}></app-delete-item>
            </li>`,
        )}
      </ul>
    `;
  }

  static styles = styles;
}

customElements.define("app-list", AppList);
