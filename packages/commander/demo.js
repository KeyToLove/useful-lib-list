// 实现一个命令行解析命令行pizza相关信息的功能
// 可以开启debug模式,展示所有选项信息
// 可以指定尺寸,默认small,只能是 small medium large 中的一个
// 必须指定口味

const { Command, Option } = require('commander')
const program = new Command()

program
  .option('-d --debug', 'debug模式展示更多信息 ')
  .addOption(
    new Option('-s --size <size>', '选择pizza尺寸，默认small')
      .default('small')
      .choices(['small', 'medium', 'large'])
  )
  .requiredOption('-p, --pizza-type <type>', '指定pizza的口味')

program.parse(process.argv)

const options = program.opts()

const { debug, size, pizzaType } = options

// 是否开启debug
if (debug) {
  console.log(options)
}

console.log(`我选择了${pizzaType}口味的pizza,大小为${size}`)
