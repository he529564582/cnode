<template>
  <div class="panel">
    <div class="header">
      <ul class="breadcrumb">
        <li>
          <a href="/">主页</a>
          <span class="divider">/</span>
        </li>
        <li class="active">关于</li>
      </ul>
    </div>
    <div class="inner topic">
      <div class="topic_content">
        <div class="markdown-text">
          <h3>关于</h3>
          <p>CNode 社区为国内最大最具影响力的 Node.js 开源技术社区，致力于 Node.js 的技术研究。</p>
          <p>CNode 社区由一批热爱 Node.js 技术的工程师发起，目前已经吸引了互联网各个公司的专业技术人员加入，我们非常欢迎更多对 Node.js 感兴趣的朋友。</p>
          <p>CNode 的 SLA 保证是，一个9，即 90.000000%。</p>
          <p>
            社区目前由
            <a href="http://cnodejs.org/user/alsotang" target="_blank">@alsotang</a> 在维护，有问题请联系：
            <a
              href="https://github.com/alsotang"
              target="_blank"
            >https://github.com/alsotang</a>
          </p>
          <p>
            请关注我们的官方微博：
            <a href="http://weibo.com/cnodejs" target="_blank">http://weibo.com/cnodejs</a>
          </p>
          <h3>移动客户端</h3>
          <p>
            客户端由
            <a href="https://cnodejs.org/user/soliury" target="_blank">@soliury</a> 开发维护。
          </p>
          <p>
            源码地址：
            <a
              href="https://github.com/soliury/noder-react-native"
              target="_blank"
            >https://github.com/soliury/noder-react-native</a> 。
          </p>
          <p>立即体验 CNode 客户端，直接扫描页面右侧二维码。</p>
          <p>
            另，安卓用户同时可选择：
            <a
              href="https://github.com/TakWolf/CNode-Material-Design"
              target="_blank"
            >https://github.com/TakWolf/CNode-Material-Design</a> ，这是 Java 原生开发的安卓客户端。
          </p>
        </div>

        <div class="about-friend-links">
          <h3>友情链接</h3>

          <a href="https://www.huoban.com/" target="_blank">
            <img src="//static.cnodejs.org/Ftmw28ed0I_rir7YYz3c_jVPkCGx" />
          </a>

          <a href="http://100offer.com/" target="_blank">
            <img src="//static.cnodejs.org/FmU1Ik57z6wrl9JDTNdcYBTDetFq" />
          </a>

          <a href="https://www.teambition.com/" target="_blank">
            <img src="//static.cnodejs.org/FkMR_SqpCp4Q0eDIaWrQlALiXdmP" />
          </a>

          <a href="http://yunzhihui.com/" target="_blank">
            <img src="//static.cnodejs.org/Fq2cV_14IFHwelZ-6jey42Z0-eOR" />
          </a>

          <a href="http://www.jiguang.cn/" target="_blank">
            <img src="//static.cnodejs.org/FijGJbij9GObh5AXw-Vyu5LGn08a" />
          </a>

          <a href="http://segmentfault.com/" target="_blank">
            <img src="//static2.cnodejs.org/public/images/temp/sf.png" />
          </a>
        </div>

        <div class>
          <h3>LOGO</h3>
          <p>
            白底：
            <a href="/public/images/cnodejs.svg" target="_blank">/public/images/cnodejs.svg</a>
          </p>
          <p>
            黑底：
            <a
              href="/public/images/cnodejs_light.svg"
              target="_blank"
            >/public/images/cnodejs_light.svg</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "About"
};
</script>

<style scoped>
#content .panel {
  margin: 0 5px;
}
.panel .header {
  padding: 10px;
  background-color: #f6f6f6;
  border-radius: 3px 3px 0 0;
}
.breadcrumb {
  padding: 0;
  margin: 0;
  border: none;
  background: 0 0;
}
.breadcrumb > li,
.navbar .brand {
  text-shadow: none;
}

.breadcrumb > li {
  display: inline-block;
  text-shadow: 0 1px 0 #fff;
}
.breadcrumb a {
  color: #80bd01;
}
a {
  color: #08c;
  text-decoration: none;
}
.breadcrumb > li > .divider {
  padding: 0 5px;
  color: #ccc;
}
.breadcrumb > .active {
  color: #999;
}
.panel .inner.post,
.panel .inner.reply,
.panel .inner.topic,
.panel .inner.userinfo {
  padding: 10px;
  border-top: 1px solid #e5e5e5;
}
.panel .inner {
  padding: 10px;
  border-radius: 0 0 3px 3px;
}

.panel .header.topic_header,
.panel .inner {
  background-color: #fff;
}
.panel .inner,
.panel .inner li {
  line-height: 2em;
}
.topic_content {
  margin: 0 10px;
}
.markdown-text > :first-child,
.preview > :first-child {
  margin-top: 0;
}
.preview h1,
.preview h2,
.preview h3,
.preview h4,
.preview h5,
.preview h6,
.reply_area h1,
.reply_area h2,
.reply_area h3,
.reply_area h4,
.reply_area h5,
.reply_area h6,
.topic_content h1,
.topic_content h2,
.topic_content h3,
.topic_content h4,
.topic_content h5,
.topic_content h6 {
  margin: 30px 0 15px;
  border-bottom: 1px solid #eee;
}
h1 small,
h3 {
  font-size: 20px;
}
h1,
h2,
h3 {
  line-height: 40px;
}
.about-friend-links img {
  width: 250px;
  height: 60px;
}
img {
  width: auto\9;
  height: auto;
  max-width: 100%;
  vertical-align: middle;
  border: 0;
  -ms-interpolation-mode: bicubic;
}
</style>
