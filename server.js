const express = require('express');
const sql = require('mssql');
const axios = require('axios');
require('dotenv').config();

const app = express();
const port = 3000;

app.getProductDetails = async (url) => {
  try {
    const response = await axios.get(url);

    console.log(response.status);
    return response;
  } catch (error) {
    console.log(error.response.status);
    return error.response;
  }
};
app.getProductDetails('https://fakestoreapi.com/products/1');
// app.getProductDetails('https://fakestoreapi.com/products');
// app.getProductDetails('https://fakestoreapi.com/products/1');

// async function use() {
//   const data = await app.getProductDetails(
//     'https://fakestoreapi.com/products/1'
//   );
//   return data;
// }
// console.log(use());

// axios.get('https://fakestoreapi.com/products/1').then(function (response) {
//   console.log(response.data);
// });

// const dbConfig = {
//   server: process.env.DB_SERVER,
//   database: process.env.DB_DATABASE,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   pool: {
//     max: 10,
//     min: 0,
//     idleTimeoutMillis: 30000,
//   },
//   options: {
//     trustServerCertificate: true, // Bypass SSL certificate validation
//     trustedConnection: true,
//     connectTimeout: 30000, // Increase connection timeout to 30 seconds
//   },
// };
// app.add = function () {
//   return 'success';
// };

// app.sum = (a, b) => {
//   return a + b;
// };
// // my functions =)
// app.subtract = (a, b) => {
//   return a - b;
// };

// app.multiplication = (a, b) => {
//   return a * b;
// };

// app.stringFromArray = (array) => {
//   let stringToReturn = '';
//   for (const elemnt of array) {
//     if (typeof elemnt !== 'string') {
//       return 'not only string in the array';
//     }
//     stringToReturn += elemnt;
//   }
//   return stringToReturn;
// };

// // Route to get data
// app.get('/data', async (req, res) => {
//   try {
//     // Connect to the database
//     // await sql.connect(dbConfig);

//     // Query the database
//     // const result = await sql.query('SELECT * FROM YourTableName');

//     let headers = { 'Content-Type': 'application/json', Accept: '*/*' };
//     const data = {
//       username: 'admin',
//       password: 'password123',
//     };

//     //Send Auth request using Axios
//     const response = await axios.post(
//       'https://restful-booker.herokuapp.com/auth',
//       data,
//       headers
//     );

//     res.json({
//       message: 'Data successfully sent via Axios',
//       data: response.data,
//     });

//     //Send the results as JSON
//     // res.json(result.recordset);
//   } catch (err) {
//     console.error('SQL error', err);
//     res.status(500).send('Server Error');
//   }
// });

// // Start the server
// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });

module.exports = app;
