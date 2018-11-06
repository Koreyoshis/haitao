<template>
  <div class="hello">
    <header class="header">
      <router-link tag="p" to="/px"><</router-link>
      <p>培训课程详情</p>
      <p></p>
    </header>
    <div class="neirong">
      <p>姓名:<span>蒋兮兮</span></p>
      <p>生日:<span>03/10/2014</span></p>
      <p>性别:<span>女</span></p>
      <p>身份证:<span>12345678900987654321</span></p>
      <p>手机:<span>17710664086</span></p>
      <p>毕业学校:<span>郑州航空管理学院</span></p>
      <p>专业:<span>酒店管理</span></p>
      <p>目标岗位:<span>客房经理</span></p>
      <p>目标公司:<span>诗歌达</span></p>
      <p>确认具体内容</p>
    </div>
    <footer class="footer">
       <router-link tag="h1" to="/pxmonikaosi">提交</router-link>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'pxbaomingxinxi',
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .hello{
    width: 100%;
    height: 17.8rem;
  }
  .header{
    width: 100%;
    height: 1.733333rem;
    background: #27c1b4;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .header p{
    color: white;
    font-size: .4rem;
    padding:  0 .266667rem;
  }
  .neirong{
    width: 100%;
    height: 14.866667rem;
  }
  .neirong p{
    color: #999999;
    font-size: .4rem;
    padding-left: .266667rem;
    height: 1.066667rem;
    border-bottom: 1px solid #ccc;
    line-height: 1.066667rem;
  }
  .neirong p:last-child{
    border:none
  }
  .neirong p span{
    color: black;
    font-size: .4rem;
  }
  .footer{
    height: 1.146667rem;
    background: #27c1b4;
  }
  .footer h1{
    line-height: 1.146667rem;
    color: white;
    text-align: center;
    font-size:.4rem;
  }
</style>
