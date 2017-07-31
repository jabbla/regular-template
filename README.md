# regular-template

## 克隆项目
```bash
git clone
```
## 安装依赖
```bash
npm install && npm install server-mock -g
```
## 启动
### 启动mock server
```bash
server start
```
### 启动webpack
```bash
webpack -w
```
## 添加mock数据
### 创建Json文件
```js
mock\get\hello\data.json    //GET请求/hello的mock数据
mock\post\hello\data.json    //POST请求/hello的mock数据
```
### 修改配置mock.config.js
```js
module.exports = {
    get: [
        '/hello'    //添加/hello请求地址
    ]
}
```