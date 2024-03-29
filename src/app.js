const express = require('express');
const app = express();
app.use(express.json());

function encryptString(str) {
  let encrypted = '';
  for (let i = 0; i < str.length; i++) {
    let charCode = str.charCodeAt(i);
    let encryptedCharCode = (charCode + 13) % 256;
    encrypted += String.fromCharCode(encryptedCharCode);
  }
  return encrypted;
}

// Write a GET route which encrypts the secret code and returns it to the client
/*
Sample Output: 
HTTP Status Code: 200
{
  "secret": "<encrypted value>"
}

Use the encryptString function given above to encrypt the secret code
*/



app.get('/api/get-env', (req, res) => {
    //Write your code here
    const key=process.env.SECRET;
    const encryptedValue=encryptString(key)
    res.status(200).json({'secret':encryptedValue});
    // res.send(200,{"secret":encryptedValue});
});

module.exports = app;
