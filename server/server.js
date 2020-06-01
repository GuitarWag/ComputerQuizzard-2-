const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const path = require('path')


const { getSecret } = require('./secrets');
const usersRoute = require('./routes/users');

mongoose.Promise = global.Promise;
mongoose.connect(getSecret('dbUri')).then(
  () => {
    console.log('Connected to mongoDB');
  },
  (err) => console.log('Error connecting to mongoDB', err)
);

const app = express();
const port = process.env.PORT || 5000;

app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000'
}));

// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, 'quizzard-front-end/build')))

app.use(cookieParser());
app.use(bodyParser.json());
app.use('/api/users', usersRoute);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = { app };
