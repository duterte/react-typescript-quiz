const express = require('express');
const path = require('path');


const app = express();
const PORT = Number(process.env.PORT) || 3000;
const buildDir = path.resolve('build');
const indexHtml = path.resolve(buildDir, 'index.html')

app.get('/', (req, res) => res.status(200).sendFile(indexHtml));
app.use(express.static(buildDir));
app.listen(PORT, () => console.log('server is running'))