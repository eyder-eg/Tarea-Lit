import { css } from "lit";

const styles = css`
  :host {
    font-family: var(--font-family);
  }

  h2 {
    margin: 0;
  }

  button {
    background-color: #83fa87;
    border: 0;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    cursor: pointer;
  }

  input {
    padding: 0.5rem;
    border: 1px solid #ccc;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;

export default styles;
