<template>
  <div class="dd">
    <div class="zp">
      <i class="iconfont icon-zhaopinqiatan"></i>
      <router-link tag="span" to="/zpshouye" > 招聘 </router-link>
    </div>
     <div class="px">
      <i class="iconfont icon-peixun"></i>
      <router-link tag="span" to="/px"> 培训 </router-link>
    </div>
     <div class="sc">
      <i class="iconfont icon-chuan"></i>
     <router-link tag="span" to="/xinx"> 上船</router-link>
    </div>
     <div class="zp">
      <i class="iconfont icon-wode"></i>
      <span>我的</span>
    </div>

  </div>
</template>

<script>

export default {
  name: 'footers'
}
</script>
<style scoped>

.dd{
  display: flex;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 1.173333rem;
  border-top: .013333rem solid #d0d0d0;
  background: #fff;
}
.zp,.px,.sc,.zp{
  flex: 1;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
}
.zp,.px,.sc,.zp span{
  font-size: .4rem;
}
.zp i{
  font-size: .506667rem
}
.px i{
  font-size: .506667rem
}
.zp i{
  font-size: .506667rem
}
.sc i{
  font-size: .506667rem
}
</style>
