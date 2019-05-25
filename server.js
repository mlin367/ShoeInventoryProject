const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, '/client/dist')));

app.listen(8000, () => console.log('app is listening on port 8000'));