import { css } from "lit";

const styles = css`
  :host {
    font-family: var(--font-family);
  }

  header {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #d4b6fd;
  }

  h1 {
    margin: 0;
    padding: 2rem;
  }
`;

export default styles;
