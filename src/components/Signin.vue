<template>
  <div class="panel">
    <div class="header">
      <ul class="breadcrumb">
        <li>
          <a href="/">主页</a>
          <span class="divider">/</span>
        </li>
        <li class="active">登录</li>
      </ul>
    </div>
    <div class="inner">
      <form id="signin_form" class="form-horizontal" action="/signin" method="post">
        <div class="control-group">
          <label class="control-label" for="name">用户名</label>

          <div class="controls">
            <input class="input-xlarge" id="name" name="name" size="30" type="text" />
          </div>
        </div>
        <div class="control-group">
          <label class="control-label" for="pass">密码</label>

          <div class="controls">
            <input class="input-xlarge" id="pass" name="pass" size="30" type="password" />
          </div>
        </div>
        <input type="hidden" name="_csrf" value="GI64GPCd-keGzKgRerTOBzH3EFClmDqkvdsQ" />

        <div class="form-actions">
          <input type="submit" class="span-primary" value="登录" />
          <a href="/auth/github">
            <span class="span-info">通过 GitHub 登录</span>
          </a>
          <a id="forgot_password" href="/search_pass">忘记密码了?</a>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  name: "Signin"
};
</script>
<style scoped>
.panel {
  margin: 0 5px;
  min-height: 500px;
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
.panel .inner {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background: #fff;
}
.form-horizontal .control-label {
  float: none;
  width: auto;
  padding-top: 0;
  text-align: left;
}
.form-horizontal .controls {
  margin-left: 0;
}
input[type="text"] {
  background: hsla(0, 0%, 0%, 0);
}
.form-horizontal input {
  display: inline-block;
  margin-bottom: 0;
  vertical-align: middle;
}
input[type="text"] {
  background-color: #fff;
  border: 1px solid #ccc;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
  -moz-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
  -webkit-transition: border linear 0.2s, box-shadow linear 0.2s;
  -moz-transition: border linear 0.2s, box-shadow linear 0.2s;
  -o-transition: border linear 0.2s, box-shadow linear 0.2s;
  transition: border linear 0.2s, box-shadow linear 0.2s;
}
input[type="text"] {
  display: inline-block;
  height: 20px;
  padding: 4px 6px;
  margin-bottom: 10px;
  font-size: 14px;
  line-height: 20px;
  color: #555;
  vertical-align: middle;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  border-radius: 4px;
}
.input-xlarge {
  width: 270px;
}
.form-horizontal .control-group {
  margin-bottom: 20px;
}
.control-group {
  margin-bottom: 10px;
}
.form-horizontal .control-label {
  float: none;
  width: auto;
  padding-top: 0;
  text-align: left;
}
label {
  display: block;
  margin-bottom: 5px;
}
button,
input,
label,
select,
textarea {
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
}
.form-horizontal .controls {
  margin-left: 0;
}
.uneditable-input,
input[type="text"],
input[type="url"],
input[type="search"],
input[type="tel"],
input[type="color"],
input[type="password"],
input[type="datetime"],
input[type="datetime-local"],
input[type="date"],
input[type="month"],
input[type="time"],
input[type="week"],
input[type="number"],
input[type="email"],
textarea {
  background: hsla(0, 0%, 0%, 0);
}
.form-horizontal .help-inline,
.form-horizontal .input-append,
.form-horizontal .input-prepend,
.form-horizontal .uneditable-input,
.form-horizontal input,
.form-horizontal select,
.form-horizontal textarea,
.form-inline .help-inline,
.form-inline .input-append,
.form-inline .input-prepend,
.form-inline .uneditable-input,
.form-inline input,
.form-inline select,
.form-inline textarea,
.form-search .help-inline,
.form-search .input-append,
.form-search .input-prepend,
.form-search .uneditable-input,
.form-search input,
.form-search select,
.form-search textarea {
  display: inline-block;
  margin-bottom: 0;
  vertical-align: middle;
}
.uneditable-input,
input[type="text"],
input[type="password"],
input[type="datetime"],
input[type="datetime-local"],
input[type="date"],
input[type="month"],
input[type="time"],
input[type="week"],
input[type="number"],
input[type="email"],
input[type="url"],
input[type="tel"],
input[type="color"],
input[type="search"],
textarea {
  background-color: #fff;
  border: 1px solid #ccc;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
  -moz-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
  -webkit-transition: border linear 0.2s, box-shadow linear 0.2s;
  -moz-transition: border linear 0.2s, box-shadow linear 0.2s;
  -o-transition: border linear 0.2s, box-shadow linear 0.2s;
  transition: border linear 0.2s, box-shadow linear 0.2s;
}
.uneditable-input,
input[type="text"],
input[type="password"],
input[type="datetime"],
input[type="datetime-local"],
input[type="date"],
input[type="month"],
input[type="time"],
input[type="week"],
input[type="number"],
input[type="email"],
input[type="url"],
input[type="tel"],
input[type="color"],
input[type="search"],
select,
textarea {
  display: inline-block;
  height: 30px;
  padding: 4px 6px;
  margin-bottom: 10px;
  font-size: 14px;
  line-height: 20px;
  color: #555;
  vertical-align: middle;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  border-radius: 4px;
}
.input-xlarge {
  width: 270px;
}
input,
input:focus,
textarea,
textarea:focus {
  box-shadow: 0 0 2px rgba(60, 60, 60, 0.5);
}
input,
textarea {
  background: hsla(0, 0%, 0%, 0);
}
body,
input,
p,
textarea {
  font-size: 14px;
  word-break: break-word;
}
.uneditable-input,
input,
textarea {
  margin-left: 0;
}
.uneditable-input,
input,
textarea {
  width: 206px;
}
button,
input,
label,
select,
textarea {
  font-size: 14px;
  font-weight: 400;
  line-height: 30px;
}
.navbar-search .search-query,
button,
input,
select,
textarea {
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
}
button,
input,
select,
textarea {
  margin: 0;
  font-size: 100%;
  vertical-align: middle;
}
.form-horizontal .form-actions {
  padding-right: 10px;
  padding-left: 10px;
}
.form-horizontal .form-actions {
  /* padding-left: 180px; */
}
.form-actions {
  border-top: none;
  background-color: #fff;
}
.form-actions,
.tabbable ul {
  max-height: 40px;
}
.form-actions {
  padding: 19px 20px 20px;
  margin-top: 20px;
  margin-bottom: 20px;
  /* background-color: #f5f5f5;
  border-top: 1px solid #e5e5e5; */
}
.controls-row:after,
.controls-row:before,
.form-actions:after,
.form-actions:before {
  display: table;
  line-height: 0;
  content: "";
}
.form-horizontal .help-inline,
.form-horizontal .input-append,
.form-horizontal .input-prepend,
.form-horizontal .uneditable-input,
.form-horizontal input,
.form-horizontal select,
.form-horizontal textarea,
.form-inline .help-inline,
.form-inline .input-append,
.form-inline .input-prepend,
.form-inline .uneditable-input,
.form-inline input,
.form-inline select,
.form-inline textarea,
.form-search .help-inline,
.form-search .input-append,
.form-search .input-prepend,
.form-search .uneditable-input,
.form-search input,
.form-search select,
.form-search textarea {
  display: inline-block;
  margin-bottom: 0;
  vertical-align: middle;
}
.row-fluid .uneditable-input[class*="span"],
.row-fluid input[class*="span"],
.row-fluid select[class*="span"],
.row-fluid textarea[class*="span"],
.uneditable-input[class*="span"],
input[class*="span"],
select[class*="span"],
textarea[class*="span"] {
  float: none;
  margin-left: 0;
}
input[type="button"],
input[type="reset"],
input[type="file"],
input[type="image"],
input[type="submit"],
input[type="radio"],
input[type="checkbox"] {
  width: auto;
}
button,
input[type="button"],
input[type="reset"],
input[type="submit"],
input[type="radio"],
input[type="checkbox"],
label,
select {
  cursor: pointer;
}
button,
html input[type="button"],
input[type="reset"],
input[type="submit"] {
  cursor: pointer;
  -webkit-appearance: button;
}
.span-primary {
  border-radius: 3px;
  background-color: #08c;
}
.span-primary,
.span-success {
  border: none;
  display: inline-block;
  float: none;
  padding: 3px 10px;
  margin: 0;
  font-size: 14px;
  transition: all 0.2s ease-in-out;
  letter-spacing: 2px;
  box-shadow: none;
  line-height: 2em;
  vertical-align: middle;
  color: #fff;
  cursor: pointer;
}
[class*="span"] {
  float: left;
  min-height: 1px;
  /* margin-left: 20px; */
}
input,
input:focus,
textarea,
textarea:focus {
  box-shadow: 0 0 2px rgba(60, 60, 60, 0.5);
}
input,
textarea {
  background: hsla(0, 0%, 0%, 0);
}
body,
input,
p,
textarea {
  font-size: 14px;
  word-break: break-word;
}
.uneditable-input,
input,
textarea {
  margin-left: 0;
}
.uneditable-input,
input,
textarea {
  width: 206px;
}
button,
input,
label,
select,
textarea {
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
}
.navbar-search .search-query,
button,
input,
select,
textarea {
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
}
button,
input,
select,
textarea {
  margin: 0;
  font-size: 100%;
  vertical-align: middle;
}
.panel .inner a {
  color: #778087;
}
a {
  color: #08c;
  text-decoration: none;
}
.span-info {
  display: inline-block;
  float: none;
  padding: 3px 10px;
  border: none;
  margin: 0;
  font-size: 14px;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  letter-spacing: 2px;
  box-shadow: none;
  border-radius: 3px;
  line-height: 2em;
  vertical-align: middle;
  color: #fff;
  background-color: #5bc0de;
}
[class*="span"] {
  float: left;
  min-height: 1px;
  /* margin-left: 20px; */
}
#forgot_password {
  margin-left: 1em;
}
.panel .inner a {
  color: #778087;
}
a {
  color: #08c;
  text-decoration: none;
}
.controls-row:after,
.controls-row:before,
.form-actions:after,
.form-actions:before {
  display: table;
  line-height: 0;
  content: "";
}
.controls-row:after,
.dropdown-menu > li > a,
.form-actions:after,
.form-horizontal .control-group:after,
.modal-footer:after,
.nav-pills:after,
.nav-tabs:after,
.navbar-form:after,
.navbar-inner:after,
.pager:after,
.thumbnails:after {
  clear: both;
}
</style>


