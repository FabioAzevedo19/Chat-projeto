const path = require('path');
const express = require('express');

const caminhopublico = path.join(__dirname, '../public');
const port = process.env.port || 3000;
const app = express();

app.use(express.static(caminhopublico));

app.get('/', (req, res) => {
    res.send(index.html);
});
app.listen(port, () => {
    console.log(`Server a ouvir a porta ${port}`);
});