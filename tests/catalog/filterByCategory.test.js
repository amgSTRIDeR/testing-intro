const products = require('../../src/data/products');
const { filterByCategory } = require('../../src/catalog');

describe('filterByCategory', () => {
  test("'all' возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
     expect(filterByCategory(products, 'all')).toEqual(products);
  });
  test("undefined возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    expect(filterByCategory(products, undefined)).toEqual(products);
  });
  test("пустая строка возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    expect(filterByCategory(products)).toEqual(products);
  });
  test("'electronics' возвращает товары с ID [1, 2]", () => {
    const expectedProducts = [...products].filter((product) => product.id === 1 || product.id === 2);
    expect(filterByCategory(products, 'electronics')).toEqual(expectedProducts);
  });
  test.todo("'books' возвращает товары с ID [3, 6]");
  test.todo("'home' возвращает товары с ID [4, 5]");
  test.todo("'clothes' возвращает пустой массив");
  test.todo("'toys' возвращает пустой массив");
  test.todo("'sports' возвращает пустой массив");
});
