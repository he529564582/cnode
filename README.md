## Vue-CLI实现CNode社区

本项目利用CNode社区提供的API，使用Vue-CLI手脚架、Vue组件、Vue-router搭建仿CNode社区项目，并重新布局。
项目地址：[cnode](http://www.hefang.site/cnode/dist/index.html#/)

### 项目技术栈
+ **Vue-CLI 3**:对比Vue-CLI 2.x，3.x集成度更高，在创建项目时提供常用插件。
+ **Vue-router**:进行路径管理，利用hash模式模拟完整URL。
+ **Axios**:基于Promise，用于浏览器和Node.js的HTTP客户端，改写Vue原型链，并把Axios挂载其上。
+ **其他**: JavaScript ES6, Vue.js transition和CSS 3结合, webpack打包配置等等。



### 项目架构
以下只列出最终页面及其相关组件部分：
```
|——index.html //Vue-CLI构建的最终SPA页面
|     |
|——App.vue //这是整个Vue项目的主组件，作为页面入口，其他组件都挂载到此组件中
|     |——Header.vue //头部栏组件
      |——Footer.vue //底部栏组件
|     |——pagination.vue //分页器，方便用户快速跳转页面
|     |——postList.vue //main views部分分为首页的文章列表、不同分类的文章列表
|     |——article.vue //点击文章题目能进入文章详情页
|     |__userInfo.vue //用户详情页，包括用户基本资料、创建的话题和回复的话题
```


