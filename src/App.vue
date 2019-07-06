<template>
  <div id="app">
    <Header class="header"></Header>
    <div class="main">
      <router-view name="slidebar"></router-view>
      <router-view name="main"></router-view>
    </div>
    <Footer class="footer"></Footer>
  </div>
</template>

<script>
import Header from "./components/Header";
import PostList from "./components/PostList";
import Footer from "./components/Footer";
export default {
  name: "App",
  components: {
    Header,
    PostList,
    Footer
  }
};
</script>

<style>
html,
body {
  height: 100vh;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  background: #e1e1e1;
  /* height: 100vh; */
  /* display: flex;
   flex-direction:column */
}
.main {
  width: 80%;
  margin: 0 auto;
  /* flex: 1; */
  min-height: calc(100vh - 160px);
}
.footer {
  height: 100px;
}
</style>
