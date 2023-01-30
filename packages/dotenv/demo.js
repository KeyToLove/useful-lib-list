const env = require('dotenv').config()

// 使用 dotenv-expand 进行拓展,可以包含变量形式
require('dotenv-expand').expand(env)

console.log(process.env, 'process.env')
