var gulp = require('gulp')
var nodemon = require('gulp-nodemon')
var browserSync = require('browser-sync').create()
const fs = require('fs')

const condition = () => {
  const numberOfGifs = fs.readdirSync('./GIFS')

  if (numberOfGifs.length < 1000) {
    return true
  }
  return false
}

gulp.task('gulp_nodemon', function() {
  nodemon({
    script: './server.js', //this is where my express server is
    ext: 'js html css', //nodemon watches *.js, *.html and *.css files
    env: { 'NODE_ENV': 'development' }
  })
})

gulp.task('sync', function() {
  browserSync.init({
    port: 3002, //this can be any port, it will show our app
    proxy: 'http://localhost:3001/', //this is the port where express server works
    ui: { port: 3003 }, //UI, can be any port
    reloadDelay: 1000, //Important, otherwise syncing will not work
  })
  // unfortunately - this SEES that the gif has been added but I havent figured out how to trigger the reload
  // this is a common problem and there are solutions, I just haven't found any that work yet

  if (condition()) {
    gulp.watch(['./**/*.js', './**/*.html', './**/*.css', './GIFS']).on("change", browserSync.reload)
  } else {
    browserSync.exit
  }
  
})

exports.build = gulp.parallel(["gulp_nodemon", "sync"]);