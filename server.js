const express = require('express');
const app = express();

app.get('/', function(req, res){
    var options = {
        root: __dirname
    };
     
    var fileName = 'index.html';
    res.sendFile(fileName, options, function (err) {
        if (err) {
            next(err);
        } else {
            console.log('Sent:', fileName);
        }
    });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log('Listening on port ' + PORT);
})