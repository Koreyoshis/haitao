<template>
  <div class="hello">
    <header class="header">
      <router-link  tag="p" to="/px"><</router-link>
      <p>培训课程详情</p>
      <p><img src="../../assets/images/pxxiangqing1.jpg" alt=""></p>
    </header>
    <div class="matter">
     <dl>
       <dt><img src="../../assets/images/pxindex1.jpg"></dt>
       <dd>
         <h1>上级菜单名称(大连海事四小证)<span>3500元</span></h1>
         <p>辽宁省大连市甘井子区旅顺南路1号</p>
       </dd>
     </dl>
   </div>
   <div class="kong"></div>
   <div class="jieshao">
     <div class="biaoti">
       <h1>课程介绍</h1>
     </div>
     <div class="jianjie">
       <h1>创立于公元1965年的公主邮轮公司(PRINCESS CRUISES)是全世界规模最大、服务最好的邮轮之一，
       旗下有19艘超过10万吨的豪华邮轮，其航线涉足全球200多个风景如画知名港口。公主邮轮公司是现今
       世界上餐饮、</h1>
     </div>
   </div>
   <div class="kong"></div>
   <div class="jieshao">
     <div class="biaoti">
       <h1>报名须知</h1>
     </div>
     <div class="jianjie">
       <h1>创立于公元1965年的公主邮轮公司(PRINCESS CRUISES)是全世界规模最大、服务最好的邮轮之一，
       旗下有19艘超过10万吨的豪华邮轮，其航线涉足全球200多个风景如画知名港口。公主邮轮公司是现今
       世界上餐饮、</h1>
     </div>
   </div>
   <div class="kong"></div>
   <div class="jieshao">
     <div class="biaoti">
       <h1>所需材料</h1>
     </div>
     <div class="jianjie">
       <h1>创立于公元1965年的公主邮轮公司(PRINCESS CRUISES)是全世界规模最大、服务最好的邮轮之一，
       旗下有19艘超过10万吨的豪华邮轮，其航线涉足全球200多个风景如画知名港口。公主邮轮公司是现今
       世界上餐饮、</h1>
     </div>
   </div>
   <div class="kong"></div>
   <div class="di">
     <p>住宿：50元/天</p>
     <p>联系人：刘老师</p>
     <p>联系方式：18701363886</p>
   </div>
   <div class="footer">
     <div class="footers">
        <router-link tag="h1" to="/pxmonikaoshi">提交</router-link>
     </div>
   </div>
  </div>
</template>

<script>
export default {
  name: 'pxxiangqing',
 
}
</script>footer

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .hello{
    width: 100%;
    height: 21.733333rem;
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
  .header p img{
    width: 1.6rem
  }
  .matter{
  width: 100%;
  height:2.666667rem;
}
.matter dl{
  display: flex;
}
.matter dl dt img{
  width: 1.306667rem;
  height: 1.333333rem;
  padding-top: .533333rem;
  padding-left: .266667rem;
}
.matter dl dd{
  padding-left: .4rem;
  padding-top: .533333rem;

}
.matter dl dd h1 span{
  margin-left: 1.733333rem;
  color: red;
}
.matter dl dd p{
  margin-top: .266667rem;
  line-height: .4rem;
  color: #ccc;
}
.kong{
  width: 100%;
  height: .266667rem;
  background: #f0f0f0;
}
.jieshao{
  width: 100%;
  height: 4.133333rem;
}
.biaoti{
  height: 1.133333rem;
  border-bottom: 1px solid #ccc;
}
.biaoti h1{
  margin-left: .266667rem;
  color: #27c1b4;
  line-height: 1.133333rem;
  font-size: .466667rem
}
.jianjie{
  width: 100%;
  height: 3rem;
  line-height: 3rem;
  /* padding: .4rem 0; */
}
.jianjie h1{
  font-size: .16rem;
  text-indent: .32rem;
  line-height: .666667rem;
  padding: 0 .266667rem;
  font-size: .333333rem
}
.di{
  width: 100%;
  height: 3.066667rem;
}
.di p{
  height: 1.066667rem;
  border-bottom: 1px solid #ccc;
  line-height:1.066667rem; 
  padding: 0 .266667rem;
}
.footer{
  height: 1.466667rem;
  background: #f0f0f0;
}
.footers{
  height: .933333rem;
  background: #27c1b4;  
}
.footers h1{
  line-height: .933333rem;
  text-align: center;
  font-size: .4rem;
  color:white;
}
</style>
