<template>
  <div id="app">
    <Header></Header>
    <div class="main">
      <router-view name="slidebar"></router-view>
      <router-view name="main"></router-view>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
  import Header from './components/Header'
  import PostList from './components/PostList'
  import Footer from './components/Footer'
export default {
  name: 'App',
  components:{
    Header,PostList,Footer
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing:border-box;
}
#app{
  background: #e1e1e1
}
.main{
  width: 80%;
  margin: 0 auto;
}
</style>
