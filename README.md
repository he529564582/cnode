
###Vue-CLI实现CNode社区
本项目利用CNode社区提供的API，使用Vue-CLI手脚架、Vue组件、Vue-router搭建仿CNode社区项目，并重新布局。 项目地址：[cnode](http://www.hefang.site/cnode/dist/index.html#/)

###项目技术栈

- Vue-CLI 3:对比Vue-CLI 2.x，3.x集成度更高，在创建项目时提供常用插件。·Vue-router:进行路径管理，利用hash模式模拟完整URL。
- Axios:基于Promise，用于浏览器和Node.js的HTTP客户端，改写Vue原型链，并把Axios挂载其上。
- 其他: JavaScript ES6, Vue.js transition和CSS 3结合, webpack打包配置等等。
- 使用Vue-CLI 3项目目录比2.x时期精简，去掉了build和config等目录，把对输出路径、预处理、webpack等的配置集成到vue.config.js（有些项目创建时没有自带vue.config.js文件，可后期手动添加到根目录）。
