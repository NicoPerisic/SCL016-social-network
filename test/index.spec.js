import {
  handlerLogin,
} from '../src/lib/index.js';

describe('handlerLogin', () => {
  it('nos permite hacer login', () => {
    expect(handlerLogin instanceof HTMLElement).toBe(true);
  });
});
