<template>
  <div class="article">
    <!--如果正在加载显示此div-->
    <div class="loading" v-if="isLoading">
      <svg class="iconloading">
        <use xlink:href="#icon-loading" />
      </svg>
    </div>
    <div v-else>
      <div class="topic_header">
        <div class="topic_title">{{post.title}}</div>
        <ul>
          <li>•发布于：{{post.create_at | formatDate}}</li>
          <li>
            • 作者：
            {{post.author.loginname}}
          </li>
          <li>• {{post.visit_count}}次浏览</li>
          <li>•来自{{post | tabFormatter}}</li>
        </ul>
        <div v-html="post.content" class="topic_content"></div>
      </div>
      <div id="reply">
        <div class="topbar">回复</div>
        <div v-for="(reply,index)  in post.replies" class="replySec">
          <div class="replyUp">
            <router-link
              :to="{
          name:'user_info',
          params:{
            name:reply.author.loginname
          }
          }"
            >
              <img :src="reply.author.avatar_url" alt />
            </router-link>
            <router-link
              :to="{
          name:'user_info',
          params:{
            name:reply.author.loginname
          }
          }"
            >
              <span>{{reply.author.loginname}}</span>
            </router-link>
            <span>{{index+1}}楼</span>
            <span v-if="reply.ups.length>0">☝ {{reply.ups.length}}</span>
            <span v-else></span>
          </div>
          <p v-html="reply.content"></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import icontjs from "../assets/iconsjs";
export default {
  name: "Article",
  data() {
    return {
      isLoading: false, //是否正在加载
      post: {} //代表当前文章页的所有内容，所有属性
    };
  },
  methods: {
    getArticleData() {
      this.$http
        .get(`https://cnodejs.org/api/v1/topic/${this.$route.params.id}`)
        .then(res => {
          if (res.data.success == true) {
            this.isLoading = false;
            this.post = res.data.data;
          }
        })
        .catch(function(err) {
          console.log(err);
        });
    }
  },
  beforeMount() {
    this.isLoading = true;
    this.getArticleData();
  },
  watch: {
    $route(to, from) {
      this.getArticleData();
    }
  }
};
</script>

<style >
@import url("../assets/markdown-github.css");
.topbar {
  padding: 10px;
  background-color: #f6f6f6;
  line-height: 16px;
  font-size: 14px;
  margin-top: 10px;
  margin-bottom: 10px;
}

.article:not(:first-child) {
  margin-right: 340px;
  margin-top: 15px;
}

#reply,
.topic_header {
  background-color: #fff;
}

#reply {
  margin-top: 15px;
}

#reply img {
  width: 30px;
  height: 30px;
  position: relative;
  bottom: -9px;
}

#reply a,
#reply span {
  font-size: 13px;
  color: #666;
  text-decoration: none;
}
.replySec {
  border-bottom: 1px solid #e5e5e5;
  padding: 5px 10px;
}

.loading {
  text-align: center;
  padding-top: 300px;
}

.replyUp a:nth-of-type(2) {
  margin-left: 0px;
  display: inline-block;
}

.topic_header {
  padding: 10px;
}

.topic_title {
  font-size: 20px;
  font-weight: bold;
  padding-top: 8px;
}

.topic_header ul {
  list-style: none;
  padding: 0px 0px;
  margin: 6px 0px;
}

.topic_header li {
  display: inline-block;
  font-size: 12px;
  color: #838383;
}

.topic_content {
  border-top: 1px solid #e5e5e5;
  padding: 0 10px;
}
.markdown-text p {
  font-size: 14px;
  margin-top: 15px;
}
.markdown-text img {
  width: 92% !important;
}
.replySec .markdown-text p {
  /* margin: 2px; */
  padding: 10px 0;
  font-size: 14px;
}
.iconloading {
  text-align: center;
  margin: 0 auto;
  /* padding-top: 300px; */
  display: inline-block;
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
  0% {
    -webkit-transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}
@keyframes loading {
  0% {
    -webkit-transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}
.loading {
  background-color: #fff;
  text-align: center;
  padding-top: 50px;
}
</style>
