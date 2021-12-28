const express = require('express')
const path = require('path')

const DIST = path.join(__dirname, 'dist')
const app = express()

app.use(express.static(DIST))

app.listen(3001)

module.exports = createViteNodeApp = app
