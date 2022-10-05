const express = require('express');
const app = express();

app.get('/index', (request, response) => {
    response.send('<span style="color:#f00">Hello world</span>');
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log('Listening on port ' + PORT);
})