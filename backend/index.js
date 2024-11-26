const express = require('express');

const app = express();
const port = 3000;
const axios = require('axios');
const cors = require('cors');

app.use(cors());

app.get("/", (req, res) => {
    res.send("Unified API Inc Sample Backend");
});

app.get("/15five", (req, res) => {
    
let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: 'https://api.unified.to/hris/66328964832eb6fb06d663f5/employee?limit=2',
    headers: { 
      'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NjMyODMzYzYxZDAzODA2NjQ4ZmVjYWIiLCJ3b3Jrc3BhY2VfaWQiOiI2NjMyODMzYzYxZDAzODA2NjQ4ZmVjYWQiLCJpYXQiOjE3MTQ1ODY0Mjh9.hr8eXfBNt2T9QuctQ3sT4HpYqFM7s9caM1x7xkDSYvE'
    }
  };
  
  axios.request(config)
  .then((response) => {
    res.send(response.data);
  })
  .catch((error) => {
    console.log(error);
  });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});