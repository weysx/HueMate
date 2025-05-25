# HueMate - 专业的配色推荐平台

HueMate 是一个直观易用的配色方案推荐平台，帮助设计师和开发者快速找到合适的配色方案。

## 项目结构

```
huemate/
├── node_modules/         
├── package-lock.json     
├── package.json          
├── public/               # 存放所有前端静态资源
│   ├── css/
│   │   └── style.css     
│   ├── js/
│   │   └── script.js     
│   └── index.html        
├── src/                  # 存放后端源代码
│   ├── models/
│   │   └── rating.js     
│   └── server.js         
└── README.md             # 项目说明文档    
```

## 技术栈

* **前端**:  HTML, CSS, JavaScript
* **后端**:  Node.js, Express.js
* **数据库**:  MongoDB


## 使用说明

1.  **克隆项目到本地**:
    ```bash
    git clone
    cd huemate
    ```
2.  **安装后端依赖**:
    在项目根目录（`huemate/`）下，打开终端运行：
    
    ```bash
    npm install
    ```
3.  **配置 MongoDB 连接**:
    
    * 确保你的本地 MongoDB 服务正在运行。
    * 修改 `src/server.js` 文件中的 `MONGODB_URI` 变量，指向你的 MongoDB 连接地址。例如，连接本地 MongoDB 数据库 `huemate`：
        ```javascript
        const MONGODB_URI = "mongodb://localhost:27017/huemate";
        ```
        `MONGODB_URI` 等环境变量。)
4.  **启动后端服务**:
    在项目根目录（`huemate/`）下，打开终端运行：
    
    ```bash
    node src/server.js
    ```
    服务器默认运行在 `http://localhost:3000` 端口。
5.  **访问前端页面**:
    在浏览器中打开 `http://localhost:3000/public/index.html`。

## 配色方案特点

- 每个配色方案包含 4 种颜色
- 提供详细的配色分析说明
- 支持实时预览效果
- 包含主色、次要色等使用建议

## 浏览器支持

- Safari
- Chrome
- Firefox
- Edge