<template>
    <div class="PostList">
        <!-- 加载loading -->
        <div class="loading" v-if="isLoading">
            <svg class="iconloading">
                <use xlink:href="#icon-loading"></use>
            </svg>
        </div>
        <!-- 加载帖子数据 -->
        <div v-else class="posts">
            <ul>
              <li>
                <div class="toobar">
                  <span>全部</span>
                  <span>精华</span>
                  <span>分享</span>
                  <span>问答</span>
                  <span>招聘</span>
                </div>
              </li>
              <li v-for="post in posts">
                <!-- 头像 -->
                <img :src="post.author.avatar_url" alt="">
                <!-- 回复/浏览 -->
                <span>
                    <span class="reply_count">{{post.reply_count}}</span>/{{post.visit_count}}
                </span>
                <!-- 帖子分类 -->
                <span :class="[{
                  put_good:(post.good == true),
                  put_top:(post.top == true),
                  'topiclist-tab':(post.good != true && post.top != true )
                  }]">
                    <span>{{post | tabFormatter}}</span>
                  </span>
                  <!-- 帖子标题 -->
                <span>{{post.title}}</span>
                <!-- 最后回复时间 -->
                <span class="last_reply">{{post.last_reply_at | formatDate}}</span>
              </li>
            </ul>
        </div>
    </div>
</template>

<script>
  import iconstyle from '../assets/iconsjs'
  export default {
    name:'PostList',
    data(){
      return {
        isLoading:true,
        posts:[]
      }
    },
    methods:{
      getDate(){
        this.$http.get('https://cnodejs.org/api/v1/topics',{
          page:1,
          limit:20
        })
        .then(res =>{
          this.isLoading = false
          this.posts = res.data.data
        })
        .catch(function(err){
          console.log(err)
        })
      }
    },
    beforeMount(){
      this.isLoading = true
      this.getDate()
    }

  }
</script>

<style scoped >
  .PostList{
    background-color: #e1e1e1;
  }
  .posts {
    margin-top: 10px;
  }

  .PostList img {
    height: 30px;
    width: 30px;
    vertical-align: middle;
  }

  ul {
    list-style: none;
    width: 100%;
    max-width: 1344px;
    margin: 0 auto;
  }

  ul li:not(:first-child) {
    padding: 9px;
    font-size: 15px;
    font-family: "Helvetica Neue", "Luxi Sans", "DejaVu Sans", Tahoma, "Hiragino Sans GB", STHeiti, sans-serif !important;
    font-weight: 400;
    background-color: white;
    color: #333;
    border-top: 1px solid #f0f0f0;
  }

  li:not(:first-child):hover {
    background: #f5f5f5;;
  }

  li:last-child:hover {
    background: white;
  }

  li span {
    line-height: 30px;
  }

  .allcount {
    width: 70px;
    display: inline-block;
    text-align: center;
    font-size: 12px;
  }

  .reply_count {
    color: #9e78c0;
    font-size: 14px;
  }

  .put_good, .put_top {
    background: #80bd01;
    padding: 2px 4px;
    border-radius: 3px;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    -o-border-radius: 3px;
    color: #fff;
    font-size: 12px;
    margin-right: 10px;
  }

  .topiclist-tab {
    background-color: #e5e5e5;
    color: #999;
    padding: 2px 4px;
    border-radius: 3px;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    -o-border-radius: 3px;
    font-size: 12px;
    margin-right: 10px;
  }

  .last_reply {
    /* display: inline-block; */
    text-align: right;
    min-width: 50px;
    display: block;
    white-space: nowrap;
    float: right;
    color: #778087;
    font-size: 12px;
  }

  .toobar {
    height: 40px;
    background-color: #f5f5f5;
  }

  .toobar span {
    font-size: 14px;
    color: #80bd01;
    line-height: 40px;
    margin: 0 10px;
    cursor: pointer;
  }

  .toobar span:hover {
    color: #9e78c0;
  }

  a {
    text-decoration: none;
    color: black;
  }

  a:hover {
    text-decoration: underline;
  }

  .iconloading {
    text-align: center;
    margin: 0 auto;
    /* padding-top: 300px; */
    display:inline-block;
    height: 50px;
    width: 50px;
    border-radius: 50%;
    /* border: 1px solid #999; */
    border-bottom-color: transparent;
    -webkit-animation: loading 2s linear infinite;
    animation: loading 2s linear infinite;
    /* 位置相关 */
    margin-top: 20px;
    vertical-align: middle;
}
@-webkit-keyframes loading {
    0% { -webkit-transform: rotate(0deg); }
    100% { -webkit-transform: rotate(360deg); }
}
@keyframes loading {
    0% { -webkit-transform: rotate(0deg); }
    100% { -webkit-transform: rotate(360deg); }
  }
  .loading {
    background-color: #fff;
    text-align: center;
    padding-top: 50px;
  }
  /* .icon {
    /* padding-left: 50%; */
    /* text-align: center; */
    /* margin: 0 auto; */
    /* text-align: center; */
    /* width: 4em; height: 4em; */
    /* vertical-align: -0.15em; */
     /*} */
</style>
