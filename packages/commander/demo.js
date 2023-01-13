const { Command } = require('commander')

const program = new Command()

// 定义一系列command，命中了则会触发相应的逻辑
program
  .command('dev')
  .option(
    '-f --force',
    'Force dep pre-optimization regardless of whether deps have changed'
  )
  .description('Run varlet development environment')
  .action(async options => {
    // 这里可以接受传递给option的额外配置（只能是声明中的选项配置，否则会抛出错误）
    console.log(options)
    console.log('dev~~~~~')
  })

program
  .command('build')
  .description('Build varlet site for production')
  .action(async () => {
    console.log('build~~~~~')
  })

program
  .command('dev:vite')
  .description('Use vite start server for development')
  .action(async () => {
    console.log('dev:vite~~~~')
  })

// 兜底command，任何未声明的program都会执行该段逻辑
program.on('command:*', async ([cmd]) => {
  // 弹出help菜单，提示用户可选command，以及其对应的具体信息和使用方式
  program.outputHelp()
  console.log(`error:cmd is ${cmd}`)
  process.exitCode = 1
})

// 解析cmd
program.parse()
