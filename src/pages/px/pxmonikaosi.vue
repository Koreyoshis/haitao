<template>
  <div class="hello">
    <header class="header">
      <router-link tag="p" to="/pxbaomingxinxi"><</router-link>
      <p>一对一模拟考试</p>
      <p><img src="../../assets/images/pxkaoshi1.jpg" alt=""></p>
    </header>
    <div class="renwu">
      <dl>
        <dt><img src="../../assets/images/pxmoni1.jpg" ></dt>
        <dd>
          <h1>黄老师<span>¥20</span></h1>
          <span>通过率69%</span>
          <span>面试时长10-15分钟</span>
        </dd>
      </dl>
    </div>
    <div class="kong"></div>
    <div class="jianjie">
      <h1>导师简介</h1>
      <p>王莉，1971年1月出生，研究生学历，工学博士，研究员，博士生导师你速度快放假可了解佛ihSDNSKJDFUP 
      快速发货的建瓯盘人看过；就案件给我看破开了个会安居客上房顶你是JHJDoiadhiuhbAISNKJL看JSNMNCHJHB爱的不IOUWHDKJ不UASJS吧
      刷卡机卡萨丁加分好卡机搜肺动脉垃圾都慢慢深V基啊世纪东方NASJKDFH 没sKIJFnsiUFDJ都是解放底时空裂缝叫
      时刻发挥拉斯科破 </p>
    </div>
    <div class="kong"></div>
    <div class="mianshi">
      <h1>面试时间</h1>
      <span>27日下午</span>
      <span>28日上午</span>
      <span>30日晚上</span>
    </div>
    <div class="kong"></div>
    <div class="pinglun">
      <h1>学员评论</h1>
    </div>
    <div class="pl">
      <dl>
        <dt><img src="../../assets/images/pxkaoshi2.jpg"></dt>
        <dd>
          <h1>匿名</h1>
          <p>2017-4-6</p>
        </dd>
      </dl>
      <p>讲课清晰，重点明了教育部留学回国人员科研启动基金评审专家</p>
    </div>
    <div class="pl">
      <dl>
        <dt><img src="../../assets/images/pxkaoshi2.jpg"></dt>
        <dd>
          <h1>匿名</h1>
          <p>2017-4-6</p>
        </dd>
      </dl>
      <p>讲课清晰，重点明了教育部留学回国人员科研启动基金评审专家</p>
    </div>
    <div class="pl">
      <dl>
        <dt><img src="../../assets/images/pxkaoshi2.jpg"></dt>
        <dd>
          <h1>匿名</h1>
          <p>2017-4-6</p>
        </dd>
      </dl>
      <p>讲课清晰，重点明了教育部留学回国人员科研启动基金评审专家</p>
    </div>
    <footer class="footer">
       <router-link tag="h1" to="/pxmonikaoshi">预约面试</router-link>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'pxmonikaosi',
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .hello{
      width: 100%;
      height: 21.333333rem;
    }
  .header{
    width: 100%;
    height: 1.666667rem;
    background: #27c1b4;
    display: flex;
    justify-content:space-between;
    align-items: center;
    padding: 0 .266667rem;
  }
  .header p{
    color: white;
    font-size: .4rem;
  }
  .header p img{
    width: .466667rem;
    padding-right: .666667rem;
  }
  .renwu{
    width: 100%;
    height: 2.04rem;
  }
  .renwu dl{
    display: flex;
  }
  .renwu dl dt img{
    width: 1.373333rem;
    padding: .266667rem;
  }
  .renwu dd h1{
    font-size: .4rem;
    color: #27c1b4;
    padding: .266667rem 0;
  }
  .renwu dd h1 span{
    margin-left: 5.666667rem;
    color: red;
  }
  .renwu span{
    font-size: .333333rem;
    padding: .266667rem;
  }
  .renwu span:nth-child(2){
    padding: .266667rem 0;
  }
  .kong{
    width: 100%;
    height: .266667rem;
    background: #ccc;
  }
  .jianjie{
    width: 100%;
    height: 6.106667rem;
  }
  .jianjie h1{
    width: 100%;
    height: 1.133333rem;
    border-bottom: 1px solid #ccc;
    line-height: 1.133333rem;
    padding-left: .266667rem;
    font-size: .4rem;
    color: #27c1b4;
  }
  .jianjie p{
    padding: .266667rem .266667rem;
    line-height: .6rem;
  }
  .mianshi{
    width: 100%;
    height: 3.066667rem;
  }
  .mianshi h1{
     width: 100%;
    height: 1.133333rem;
    border-bottom: 1px solid #ccc;
    line-height: 1.133333rem;
    padding-left: .266667rem;
    font-size: .4rem;
    color: #27c1b4;
  }
  .mianshi span{
    line-height:1.8rem; 
    border: 1px solid#27c1b4;
    padding: .4rem .533333rem;
    margin-left: .333333rem;
    font-size: .4rem;
    color: #27c1b4;
  }
  .mianshi span:nth-child(2){
    border: 1px solid #ccc;
    color: #ccc;
  }
  .pinglun{
    width: 100%;
    height: 1.133333rem;
    border-bottom: 1px solid #ccc;
  }
  .pinglun h1{
    width: 100%;
    height: 1.133333rem;
    border-bottom: 1px solid #ccc;
    line-height: 1.133333rem;
    padding-left: .266667rem;
    font-size: .4rem;
    color: #27c1b4;
  }
  .pl{
    width: 100%;
    height: 1.693333rem;
  }
  .pl dl{
    display: flex;
  }
  .pl dl dt img{
    width: .866667rem;
    padding: .266667rem .266667rem;
  }
  .pl dl dd h1{
    padding: .266667rem;
    font-size: .4rem;
  }
  .pl dl dd p{
    padding: 0 .266667rem;
    color: #ccc;
  }
  .pl p{
    font-size: .333333rem;
    padding: 0 .266667rem;
  }
  .footer{
    width: 100%;
    height: 1.066667rem;
    background: #27c1b4;
  }
  .footer h1{
    color: white;
    font-size: .4rem;
    text-align: center;
    line-height: 1.066667rem;
    margin-top: .4rem;
  }
</style>
