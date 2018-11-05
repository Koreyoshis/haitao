<template>
  <div class="dd">
    <div class="zp">
      <i class="iconfont icon-zhaopinqiatan"></i>
      <span>招聘</span>
    </div>
     <div class="px">
      <i class="iconfont icon-peixun"></i>
      <span>培训</span>
    </div>
     <div class="zp">
      <i class="iconfont icon-chuan"></i>
      <span>上船</span>
    </div>
     <div class="zp">
      <i class="iconfont icon-wode"></i>
      <span>我的</span>
    </div>

  </div>
</template>

<script>
export default {
  name: 'footers',
 
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
}
.zp,.px,.zp,.zp{
  flex: 1;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
}
.zp,.px,.zp,.zp i{
  font-size: .4rem;
}
</style>
