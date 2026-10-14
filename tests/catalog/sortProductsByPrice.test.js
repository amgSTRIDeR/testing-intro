const products = require('../../src/data/products');
const { sortProductsByPrice } = require('../../src/catalog');

describe('sortProductsByPrice', () => {
  test("все товары c 'asc' сортируются как [3, 6, 5, 4, 2, 1]", () => {
    const expectedProducts = [...products].sort((product1, product2) => product1.price - product2.price);
    expect(sortProductsByPrice(products, 'asc')).toEqual(expectedProducts);
  });
  test('все товары без направления сортируются как [3, 6, 5, 4, 2, 1]', () => {
    const expectedProducts = [...products].sort((product1, product2) => product1.price - product2.price);
    expect(sortProductsByPrice(products)).toEqual(expectedProducts);
  });
  test("товары [1, 3, 4] c 'asc' сортируются как [3, 4, 1]", () => {
    const preparedProducts = [...products].filter(product => product.id === 3 || product.id === 4 || product.id === 1);
    const expectedProducts = preparedProducts.sort((product1, product2) => product1.price - product2.price);
    expect(sortProductsByPrice(preparedProducts, 'asc')).toEqual(expectedProducts);
  });
  test("все товары c 'desc' сортируются как [1, 2, 4, 5, 6, 3]", () => {
    const expectedProducts = [...products].sort((product1, product2) => product2.price - product1.price);
    expect(sortProductsByPrice(products, 'desc')).toEqual(expectedProducts);
  });
  test("товары [3, 1, 4] c 'desc' сортируются как [1, 4, 3]", () => {
    const preparedProducts = [...products].filter(product => product.id === 3 || product.id === 4 || product.id === 1);
    const expectedProducts = preparedProducts.sort((product1, product2) => product2.price - product1.price);
    expect(sortProductsByPrice(preparedProducts, 'desc')).toEqual(expectedProducts);
  });
  test("товары [5, 2, 6] c 'desc' сортируются как [2, 5, 6]", () => {
    const preparedProducts = [...products].filter(product => product.id === 2 || product.id === 5 || product.id === 6);
    const expectedProducts = preparedProducts.sort((product1, product2) => product2.price - product1.price);
    expect(sortProductsByPrice(preparedProducts, 'desc')).toEqual(expectedProducts);
  });
  test("'asc' не меняет исходный массив [1, 3, 4]", () => {
    const preparedProducts = [...products].filter(product => product.id === 1 || product.id === 3 || product.id === 4);
    const copiedPreparedProducts = [...preparedProducts];
    sortProductsByPrice(preparedProducts, 'asc');
    expect(preparedProducts).toEqual(copiedPreparedProducts);
  });
  test.todo("'desc' не меняет исходный массив [1, 3, 4]");
  test.todo('направление по умолчанию не меняет исходный массив всех товаров');
});
