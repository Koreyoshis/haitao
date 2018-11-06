<template>
  <div class="hello">
    <header class="header">
    <div class="tou">
       <p v-for="(v,i) in arr"  @click="didi = i" :class="{active: didi == i}">{{v}}</p>
    </div>
   </header>
   <div class="neirong">
     <div class="kuai">
       <dl>
         <dt><img src="../../assets/images/pxmoni1.jpg" alt=""></dt>
         <dd>
           <h1>芙蓉姐姐</h1>
           <p>歌诗达厨师岗模拟面试</p>
           <span>通过率69%</span>
           <span>面试时长10-15分钟</span>
         </dd>
       </dl>
     </div>
     <div class="kuai">
       <dl>
         <dt><img src="../../assets/images/pxmoni1.jpg" alt=""></dt>
         <dd>
           <h1>芙蓉姐姐</h1>
           <p>歌诗达厨师岗模拟面试</p>
           <span>通过率69%</span>
           <span>面试时长10-15分钟</span>
         </dd>
       </dl>
     </div>
     <div class="kuai">
       <dl>
         <dt><img src="../../assets/images/pxmoni1.jpg" alt=""></dt>
         <dd>
           <h1>芙蓉姐姐</h1>
           <p>歌诗达厨师岗模拟面试</p>
           <span>通过率69%</span>
           <span>面试时长10-15分钟</span>
         </dd>
       </dl>
     </div>
     <div class="kuai">
       <dl>
         <dt><img src="../../assets/images/pxmoni1.jpg" alt=""></dt>
         <dd>
           <h1>芙蓉姐姐</h1>
           <p>歌诗达厨师岗模拟面试</p>
           <span>通过率69%</span>
           <span>面试时长10-15分钟</span>
         </dd>
       </dl>
     </div>
     <div class="kuai">
       <dl>
         <dt><img src="../../assets/images/pxmoni1.jpg" alt=""></dt>
         <dd>
           <h1>芙蓉姐姐</h1>
           <p>歌诗达厨师岗模拟面试</p>
           <span>通过率69%</span>
           <span>面试时长10-15分钟</span>
         </dd>
       </dl>
     </div>
     <div class="kuai">
       <dl>
         <dt><img src="../../assets/images/pxmoni1.jpg" alt=""></dt>
         <dd>
           <h1>芙蓉姐姐</h1>
           <p>歌诗达厨师岗模拟面试</p>
           <span>通过率69%</span>
           <span>面试时长10-15分钟</span>
         </dd>
       </dl>
     </div>
     <div class="kuai">
       <dl>
         <dt><img src="../../assets/images/pxmoni1.jpg" alt=""></dt>
         <dd>
           <h1>芙蓉姐姐</h1>
           <p>歌诗达厨师岗模拟面试</p>
           <span>通过率69%</span>
           <span>面试时长10-15分钟</span>
         </dd>
       </dl>
     </div>
     <div class="kuai">
       <dl>
         <dt><img src="../../assets/images/pxmoni1.jpg" alt=""></dt>
         <dd>
           <h1>芙蓉姐姐</h1>
           <p>歌诗达厨师岗模拟面试</p>
           <span>通过率69%</span>
           <span>面试时长10-15分钟</span>
         </dd>
       </dl>
     </div>
   </div>


    <footers></footers>
  </div>
  
</template>

<script>
import footers  from "../../components/footers"
export default {
  name: 'pxmonikaoshi',
  components:{
    footers
  },
  data () {
    return {
      arr:['线下培训','在线培训','模拟面试'],
      didi:0
    }
  }
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
  height: 1.706667rem;
  background: #27c1b4; 
  display: flex;
  justify-content: center;
  align-items: center;
}
.tou{
  width: 6.8rem;
  height: .8rem;
  margin: 0 auto;
  display: flex;
  border: 1px solid white;
}
.tou p{
  flex: 1; 
  display: block; 
  height: 100%;
  line-height: .8rem;
  color: white;
  font-size: .4rem;
  text-align: center;
}
/* .tou p:last-child{
  background: white;
  color: #27c1b4;
  border-top-right-radius: .133333rem;
  border-bottom-right-radius: .133333rem;
} */
.neirong{
  width: 100%;
  height: 14.733333rem;
}
.kuai{
  width:100%;
  height: 1.933333rem;
  border-bottom: 1px solid #ccc;
}
.kuai dl{
  display:flex;
  padding: .266667rem .266667rem;
}
.kuai dl dt img{
  width: 1.4rem;
}
.kuai dl dd h1{
  font-size: .4rem;
  padding: 0 .266667rem;
}
.kuai dl dd p{
  font-size: .333333rem;
  padding: .2rem .266667rem;
}
.kuai dl dd span{
  color: #27c1b4;
  padding: 0 .4rem;
  background: #e1f6f4;
  border-radius: .066667rem;
}
.tou p.active{
  background: white;
  color: #27c1b4;
}
</style>
