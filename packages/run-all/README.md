# 用于并行或顺序运行多个npm脚本的CLI工具

## github地址 
 [run-all](https://github.com/mysticatea/npm-run-all)

## 例子
It's `scripts` field of `package.json`. For example:
```json
{
    "scripts": {
        "clean": "rimraf dist",
        "lint":  "eslint src",
        "build": "babel src -o lib"
    }
}
```
如果想按顺序运行三个脚本,可以使用
```bash
npm-run-all clean lint build
```
这就等同于
```bash
npm run clean && npm run lint && npm run build
```

## 补充
针对并行和按顺序执行，提供额外的 `run-p` | `run-s`