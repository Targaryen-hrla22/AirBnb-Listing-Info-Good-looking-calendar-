const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
require('../database/config');
const { router } = require('./router');

const app = express();
const PORT = process.env.PORT || 3030;

const corsOptions = {
    origin: ['https://s3.amazonaws.com/airbnb-photo-gallery-component/bundle.js', 'https://s3-us-west-1.amazonaws.com/airbnb-host-location-component/bundle.js', 'https://s3-us-west-1.amazonaws.com/game-of-hosts-reviews/bundle.js', 'https://s3-us-west-1.amazonaws.com/listing-info/bundle.js',"https://amazonaws.com", "http://ec2-54-86-47-69.compute-1.amazonaws.com", "http://localhost:3030",
"ec2-54-152-139-251.compute-1.amazonaws.com", "ec2-52-91-228-95.compute-1.amazonaws.com", "http://ec2-54-86-47-69.compute-1.amazonaws.com:5000/", "ec2-35-170-196-19.compute-1.amazonaws.com", "http://ec2-54-86-47-69.compute-1.amazonaws.com/"],
    optionsSuccessStatus: 200
}

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', router);
app.use(express.static(path.join(__dirname, '../static')));

app.listen(PORT, err => {
    if(err) {throw err; console.log("There was an err starting up the server..", err)}
      else {
          console.log("Successfully connected to PORT: ", PORT);
      }
});

