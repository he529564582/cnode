<template>
  <div class="footer">
    <div class="content">
      <ul>
        <li>
          <a href="https://cnodejs.org/rss">RSS</a>
          <a href="https://github.com/cnodejs/nodeclub/">| 源码地址</a>
        </li>
        <li>CNode 社区为国内最专业的 Node.js 开源技术社区，致力于 Node.js 的技术研究。</li>
        <li>服务器赞助商为 ucloud ，存储赞助商为 七牛云存储 ，由 alinode 提供应用性能服务。</li>
        <li>新手搭建 Node.js 服务器，推荐使用无需备案的 <span>DigitalOcean(https://www.digitalocean.com/)</span></li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "Footer"
};
</script>
<style scoped>
.footer {
  background: #fff;
  display: grid;
  grid-template-columns: 10% auto 10%;
  grid-template-areas: ". content .";
}
.content {
  grid-area: content;
  padding: 9px 0px;

}
li {
  list-style-type: none;
  font-size: 14px;
  color: #ababab;
}
a {
  color: #666;
  text-decoration: none;
}
li span {
  color: #08c
}
</style>

