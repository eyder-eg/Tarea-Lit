import { LitElement, html } from "lit";
import styles from "./app-add-item.css.js";

class AppAddItem extends LitElement {
  static properties = {
    title: { type: String },
    description: { type: String },
  };

  constructor() {
    super();
    this.title = "";
    this.description = "";
  }

  _changeTitleValues(e) {
    const value = e.target.value;
    if (value === "") return;
    this.title = value;
  }

  _changeDescriptionValues(e) {
    const value = e.target.value;
    if (value === "") return;
    this.description = value;
  }

  _openModal() {
    this.modal.showModal();
  }

  _addItem(e) {
    e.preventDefault();
    if (this.title === "" || this.description === "") return alert("Uno de los campos está vacío");
    this.dispatchEvent(
      new CustomEvent("add-item", {
        detail: {
          item: {
            title: this.title,
            description: this.description,
          },
        },
        bubbles: true,
        composed: true,
      }),
    );

    this.modal.close();
    this.inputTitle.value = "";
    this.inputDescription.value = "";
    this.title = "";
    this.description = "";
  }

  render() {
    return html`
      <button @click=${this._openModal}>+ Añadir Tarea</button>
      <dialog id="modal">
        <form>
          <h2>Agregar nueva tarea</h2>
          <input
            id="inputTitle"
            placeholder="Título"
            @input=${this._changeTitleValues}
          />
          <input
            id="inputDescription"
            placeholder="Descripción"
            @input=${this._changeDescriptionValues}
          />
          <button @click=${this._addItem}>Añadir</button>
        </form>
      </dialog>
    `;
  }

  get inputTitle() {
    return this.shadowRoot.getElementById("inputTitle");
  }

  get inputDescription() {
    return this.shadowRoot.getElementById("inputDescription");
  }

  get modal() {
    return this.shadowRoot.getElementById("modal");
  }

  static styles = styles;
}

customElements.define("app-add-item", AppAddItem);
