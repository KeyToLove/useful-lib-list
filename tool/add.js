// 通过npm run add xxx 来创建一个新的package
import fs from 'fs'
import path from 'path'
import { execaCommandSync } from 'execa'
const pkgName = process.argv.slice(-1)[0]
const rootPath = path.resolve(`./packages/${pkgName}`)
//检查某个目录是否存在
const isExist = fs.existsSync(rootPath)
if (isExist) {
  console.log('目录已经存在,请检查')
  process.exit(1)
}
fs.mkdirSync(rootPath)
// 生成package.json README.md demo.js
const tpl = `
{
    "name": "${pkgName}",
    "version": "1.0.0",
    "description": "",
    "main": "index.js",
    "scripts": {
      "test": "node demo.js"
    },
    "keywords": [],
    "author": "",
    "license": "ISC",
    "dependencies": {},
    "devDependencies": {}
  }
  `
fs.writeFileSync(`${rootPath}/package.json`, tpl)
fs.writeFileSync(`${rootPath}/README.md`, '')
fs.writeFileSync(`${rootPath}/demo.js`, '')

// 安装依赖
try {
  execaCommandSync(`pnpm add ${pkgName}`, {
    cwd: rootPath,
    stdio: [2, 2, 2],
    shell: true,
  })
} catch (error) {
  console.log('安装依赖失败')
  process.exit(1)
}
