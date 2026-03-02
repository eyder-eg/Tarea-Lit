import { css } from "lit";

const styles = css`
  :host {
    font-family: var(--font-family);
    width: 400px;
  }

  p,
  h3 {
    margin: 0;
  }
  ul {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 0;
  }

  li {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  .container-text {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  h3 {
    font-weight: 1rem;
  }

  p {
    font-size: 0.8rem;
  }
`;

export default styles;
