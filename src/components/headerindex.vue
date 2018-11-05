<template>
  <div class="hello">
    <div class="header">
        <div class="tx">
            <img src="../assets/images/tx.gif" alt="">
        </div>
        <div class="zh">
            <span>lxgsocool</span>
             <h3>账号：<span>1127074163</span></h3>
        </div>
        
    </div>
  </div>
</template>

<script>
export default {
  name: 'headerindex',
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header{
    width: 100%;
    height: 3.28rem;
    background:url(../assets/images/lcx1.png) repeat ;
    display: flex;
   
}
.header img {
    width: 1.706667rem;
    height: 1.653333rem;
}
.tx{
    margin: .533333rem
     
}
.zh{
    margin-top: .973333rem
}
.zh span{
    color: #fff;
    font-size: .413333rem
    
}
.zh h3{
    color: #fff;
}
</style>
