const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('public'));

app.listen(5678);

app.set('view engine','ejs');


app.get('/',(req,res) => {
    res.render('index')
});