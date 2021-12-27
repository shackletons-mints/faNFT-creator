const fs = require('fs')

const continueMakingGifs = true
let gifCount = 0

const gifCounter = async () => {
  
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

  gifCount = counter
}

const watcher = async () => {
  fs.watch('./GIFS', () => {
    gifCounter()
    })
}

module.exports = {
  watcher,
  continueMakingGifs,
  gifCount
}