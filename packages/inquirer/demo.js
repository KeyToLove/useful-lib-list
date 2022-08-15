// 通过用户终端交互操作 -> 得到配置信息 -> dosomething
import inquirer from 'inquirer'

// inquirer.prompt(questions).then(answer=>...)

const questions = [
  // 输入框类型
  {
    type: 'input', // 指定类型
    name: 'name', // 对应字段
    message: '请输入项目名称', // 提示信息
    default: 'test-name', // 默认值
    // 校验函数
    validate: value => {
      return value.length < 3 ? '项目名称须大于3字符' : true
    },
  },
  // list 多选一
  {
    type: 'list', // 指定类型
    name: 'foods', // 对应字段
    message: '请选择喜欢的食物', // 提示信息
    default: 'apple', // 默认值
    choices: [
      {
        name: '苹果',
        value: 'apple',
      },
      {
        name: '香蕉',
        value: 'bannner',
      },
      {
        name: '橙子',
        value: 'orange',
      },
    ],
  },
  // confirm
  {
    type: 'confirm',
    name: 'debug',
    message: '是否需要开启debug模式',
    default: false,
  },
  // password
  {
    type: 'password',
    name: 'password',
    message: '请输入密码',
    default: 123456,
  },
  // checkbox
  {
    type: 'checkbox',
    name: 'hobby',
    message: '请选择你的爱好',
    choices: [
      {
        name: '足球',
        value: 'football',
      },
      {
        name: '棒球',
        value: 'baseball',
      },
      {
        name: '篮球',
        value: 'basketball',
      },
    ],
  },
]
// 获取交互信息 异步

const answer = await inquirer.prompt(questions)

console.log(answer)
