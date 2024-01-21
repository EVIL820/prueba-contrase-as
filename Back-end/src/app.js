const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const AuthController = require('./controllers/AuthController');

const app = express();

app.use(express.json({ limit: '50mb' }));
app.use(express.static(`${__dirname}/public`));
app.use(cors());
app.use(bodyParser.json());

app.use('/api', AuthController);

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
