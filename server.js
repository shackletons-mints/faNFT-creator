const express = require('express')
const path = require('path')

const DIST = path.join(__dirname, 'dist')
const app = express();

// your beautiful code...
app.use(express.static(DIST))
app.listen(3000)

module.exports = createViteNodeApp = app