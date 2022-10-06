const express = require('express');
const app = express();

app.get('/', (request, response) => {
    response.sendFile('./index.html');
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log('Listening on port ' + PORT);
})