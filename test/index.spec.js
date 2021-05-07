// importamos la funcion que vamos a testear
import { 
  myFunction 
} from '../src/lib/main.js';

describe('myFunction', () => {
  it('debería ser una función', () => {
    expect(typeof myFunction).toBe('function');
  });
});


/*

describe('filterByGeneration', () => {
  it('nos da la cantidad de Pokémon Kanto', () => {
    expect(filterByGeneration(data.pokemon, 'Kanto')).toHaveLength(151);
  });
});

describe('filterByType', () => {
  it('Nos da la cantidad específica de Pokémon por tipo', () => {
    expect(filterByType(data.pokemon, 'water')).toHaveLength(50);
  }); 
});
*/