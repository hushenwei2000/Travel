如果要使用模拟数据，请将config/index.js，14行：键'./api'的值改为
```
{
    target: 'http://localhost:8080',
    pathRewrite: {
        '^/api': '/static/mock'
    }
```