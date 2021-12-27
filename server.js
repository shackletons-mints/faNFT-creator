const express = require('express')
const livereload = require("livereload");
const connectLivereload = require("connect-livereload");
const path = require('path')
const fs = require('fs')

const DIST = path.join(__dirname, 'dist')
const app = express();

let count = 0
let gifCount = 0
let continueMakingGifs = true

const gifCounter = async () => {
  console.log('INSIDE GIF COUNTER')

  let gifArray = []
  let counter = 0
  gifArray = await fs.promises.readdir('./GIFS')
  
  if (gifArray.length >= 1) {
    
    gifArray.forEach(file => {
      
      const tag = file.split('.')[1]
      if (tag === 'gif') counter += 1
    })
  }

  if (gifCount === 1000) {
    continueMakingGifs = false
  }

  console.log('BEFORE', gifCount)
  gifCount = counter
  console.log('AFTER', gifCount)
}

const liveReloadServer = livereload.createServer()
liveReloadServer.watch(DIST)

liveReloadServer.server.once("connection", () => {
    fs.watch('./GIFS', () => {
        liveReloadServer.refresh("/")
      })

})

app.use(connectLivereload())

app.listen(3000)

module.exports = createViteNodeApp = app