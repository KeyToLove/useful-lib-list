const chokidar = require('chokidar')

const dirWatcher = chokidar.watch('./src')

const fileWatch = chokidar.watch('./test.js')

// 一些列监听
dirWatcher.on('add', (path, stat) => {
  console.log(path, stat)
})

dirWatcher.on('addDir', (path, stat) => {
  console.log(path, stat)
})

fileWatch.on('change', path => {
  console.log(path)
})
