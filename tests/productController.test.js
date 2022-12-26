const request = require('supertest');
const baseURL = 'https://mmm-api.chloemin.com';

describe('productController', () => {
  it('GET /products?sort=desc', async () => {
    const response = await request(baseURL).get('/products?sort=desc');
    const { id: firstId } = response.body[0];
    const { id: secondId } = response.body[1];

    expect(response.statusCode).toStrictEqual(200);
    expect(response.body.length >= 1).toBe(true);
    expect(firstId).toBeGreaterThan(secondId);
  });

  it('GET /products', async () => {
    const response = await request(baseURL).get('/products');
    const { id: firstId } = response.body[0];
    const { id: secondId } = response.body[1];

    expect(response.statusCode).toStrictEqual(200);
    expect(response.body.length >= 1).toBe(true);
    expect(firstId).toBeLessThan(secondId);
  });

  it('GET /products/1', async () => {
    const result = {
      id: 1,
      title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
      price: 110,
      description: 'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
      category: "men's clothing",
      image: 'https://mmm-api.chloemin.com/assets/productImage1.jpg',
      rating: {
        rate: 4,
        count: 120,
      },
    };

    const response = await request(baseURL).get('/products/1');
    expect(response.statusCode).toStrictEqual(200);
    expect(response.body).toEqual(result);
  });

  it("GET /products/category/men's clothing?sort=desc", async () => {
    const response = await request(baseURL).get("/products/category/men's clothing?sort=desc");
    const { id: firstId } = response.body[0];
    const { id: secondId } = response.body[1];

    expect(response.statusCode).toStrictEqual(200);
    expect(response.body.length >= 1).toBe(true);
    expect(firstId).toBeGreaterThan(secondId);

    const checkList = response.body.filter((item) => item.category !== "men's clothing");
    expect(checkList.length).toEqual(0);
  });

  it("GET /products/category/men's clothing", async () => {
    const response = await request(baseURL).get("/products/category/men's clothing");
    const { id: firstId } = response.body[0];
    const { id: secondId } = response.body[1];

    expect(response.statusCode).toStrictEqual(200);
    expect(response.body.length >= 1).toBe(true);
    expect(firstId).toBeLessThan(secondId);

    const checkList = response.body.filter((item) => item.category !== "men's clothing");
    expect(checkList.length).toEqual(0);
  });
});
