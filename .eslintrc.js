// eslint
module.exports ={
  root: true,
  env: {
    node: true,
    es6: true,
    browser: true,
    commonjs: true
  },
  extends: "airbnb-base",  // 继承eslint-config-standard中的配置，可以在rules中覆盖
  rules: {
    'no-console': 'warn',
  }
}

// root - 限定配置文件的使用范围
// parser - 指定eslint的解析器
// parserOptions - 设置解析器选项
// extends - 指定eslint规范
// plugins - 引用第三方的插件
// env - 指定代码运行的宿主环境
// rules - 启用额外的规则或覆盖默认的规则
// globals - 声明在代码中的自定义全局变量

