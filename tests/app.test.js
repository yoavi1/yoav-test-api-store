const request = require('supertest');
const app = require('../server.js'); // Adjust this path to point to your Express app

describe('getDetails', () => {
  test('details', async () => {
    const response = await app.getProductDetails(
      'https://fakestoreapi.com/products/1'
    );
    expect(response.data.id).toBe(1);
  });
});

// test status code 200
describe(' status code 200', () => {
  test('test if status code is 200', async () => {
    const response = await app.getProductDetails(
      'https://fakestoreapi.com/products/1'
    );
    expect(response.status).toBe(200);
  });
});

// test status code 404
describe('check status code 404', () => {
  test('test if bad route give send code 404', async () => {
    const response = await app.getProductDetails(
      'https://fakestoreapi.com/procts!@#$$%^^&&**()(*&^%$#@!'
    );
    expect(response.status).toBe(404);
  });
});
describe('ceck the right price', () => {
  test('test if item 16 have the right price from the API', async () => {
    const response = await app.getProductDetails(
      'https://fakestoreapi.com/products/16'
    );
    expect(response.data.price).toBe(29.95);
  });
});

describe('check the right rating', () => {
  test('test if item 16 have the right rating from the API', async () => {
    const response = await app.getProductDetails(
      'https://fakestoreapi.com/products/16'
    );
    expect(response.data.rating.rate).toBe(2.9);
  });
});

// describe('get product details', () => {
//   test('check that get id', () => {
//     expect(app.getProductDetails('https://fakestoreapi.com/products/1')).toBe(
//       'hey'
//     );
//   });
// });

// describe('GET /data', () => {
//   it('should respond with JSON data', async () => {
//     const response = await request(app).get('/data');
//     expect(response.data).toBe(1);
//     // expect(response.body).toBeDefined();

//     // expect(response.body.token).toBeDefined();
//   });

// it('should respond with status code 200', async () => {
//   const response = await request(app).get('/data');
//   expect(response.statusCode).toBe(200);
// });
// });

// describe('add', () => {
//   test('return success', () => {
//     expect(app.add()).toBe('success');
//   });
// });

// describe('sum', () => {
//   test('sum two positive numbers', () => {
//     expect(app.sum(1, 3)).toBe(4);
//   });
// });

// describe('subtract', () => {
//   test('subtract tow numbers', () => {
//     expect(app.subtract(5, 3)).toBe(2);
//   });
// });

// describe('multiplication', () => {
//   test('multiplication tow numbers', () => {
//     expect(app.multiplication(4, 6)).toBe(24);
//   });
// });

// describe('stringFromArray', () => {
//   test('creat string from array if all indexes are string', () => {
//     expect(app.stringFromArray(['1', '2', '3'])).toBe('123');
//   });
// });

// describe('stringFromArray', () => {
//   test('creat string from array if all indexes are string', () => {
//     expect(app.stringFromArray([1, 'A', 'B'])).toBe(
//       'not only string in the array'
//     );
//   });
// });

// ________________________________________________________________________________
// // describe('POST /data', () => {
// //     it('should respond with a successful message', async () => {
// //         const mockData = { key: 'value' };
// //         const response = await request(app)
// //             .post('/data')
// //             .send(mockData);
// //         expect(response.statusCode).toBe(200);
// //         expect(response.body.message).toBe('Data successfully sent via Axios, and Selenium task completed');
//     });
// });
