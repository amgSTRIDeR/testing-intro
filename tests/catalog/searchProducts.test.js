const products = require('../../src/data/products');
const { searchProducts } = require('../../src/catalog');

describe('searchProducts', () => {
  test("'Наушники' возвращает товар с ID 1", () => {
    const expectedProduct = [[...products].find(product => product.id === 1)];
    expect(searchProducts(products, 'Наушники')).toEqual(expectedProduct);
  });
  test("'Чистый код' возвращает товар с ID 6", () => {
    const expectedProduct = [[...products].find(product => product.id === 6)];
    expect(searchProducts(products, 'Чистый код')).toEqual(expectedProduct);
  });
  test("'Настольная лампа' возвращает товар с ID 4", () => {
    const expectedProduct = [[...products].find(product => product.id === 4)];
    expect(searchProducts(products, 'Настольная лампа')).toEqual(expectedProduct);
  });
  test.todo("'javascript' возвращает товар с ID 3");
  test.todo("'ЧЕХОЛ' возвращает товар с ID 5");
  test.todo("'наушники' возвращает товар с ID 1");
  test.todo("пустая строка возвращает товары с ID [1, 2, 3, 4, 5, 6]");
  test.todo("строка из пробелов возвращает товары с ID [1, 2, 3, 4, 5, 6]");
  test.todo("'\\t\\n' возвращает товары с ID [1, 2, 3, 4, 5, 6]");
});
