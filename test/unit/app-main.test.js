import { expect } from 'chai';
import '../../src/elements/app-main.js';

describe('app-main', () => {
  it('se renderiza', () => {
    const el = document.createElement('app-main');
    document.body.appendChild(el);
    expect(el).to.exist;
    document.body.removeChild(el);
  });
});