const express = require('express');
const app = express();
const port = 3000;


app.get('/', (req, res) => {
    res.send('hello world');
})

app.listen(port, () => {
    console.log('dogda , medecine app  at port ${port}');
})