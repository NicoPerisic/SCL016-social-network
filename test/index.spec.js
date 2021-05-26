import { nav } from '../src/componentes/nav.js';
import { aboutUs } from '../src/templates/templateabout-us.js';

describe('nav', () => {
  it('should render without crashing', () => {
    const navTest = nav();
    expect(navTest instanceof HTMLElement).toBe(true);
  });
});

describe('aboutUs', () => {
  it('should render without crashing', () => {
    const aboutUsTest = aboutUs();
    expect(aboutUsTest instanceof HTMLElement).toBe(true);
  });
});
