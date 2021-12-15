import fs from 'fs'

export let continueMakingGIFS = true

const gifCounter = async () => {
  
  let gifArray = []
  let gifCount = 0
  gifArray = await fs.promises.readdir('./GIFS')
  
  if (gifArray.length >= 1) {
    
    gifArray.forEach(file => {
      
      const tag = file.split('.')[1]
      if (tag === 'gif') gifCount += 1
    })
  }

  if (gifCount === 1000) {
    continueMakingGIFS = false
  }

  console.log(gifCount)
}

const watcher = async () => {
  fs.watch('./GIFS', () => {
    gifCounter()
    })
}

watcher()

