const express = require('express');
const port = 3000;
const app = express();

app.get('/',(req, res) => {
    res.send('Selamat sore, from express')
});

app.listen(port, () => console.log('Selamat sore app listening on port ${port}!'))
