<template>
  <div class="hello">
    <div class="top">
        <ul>
            <li><</li>
            <li>Restaurant Captain</li>
            <li>
                <img src="../../assets/images/lcx8.png" alt="">
                <img src="../../assets/images/lcx9.png" alt="">
            </li>
        </ul>
    </div>
    <div class="reca">
        <ul>
            <li>
                <h3 style="color:#27c1b4">Restaurant Captain</h3>
                <p>要求：3-4年  口语流利  Marlin>90</p>
            </li>
            <li style="color: red">12K+小费+提成</li>
        </ul>
    </div>
    <div class="xx"></div>
    <div class="rzyq">
        <h3 style="color:#27c1b4">岗位职责</h3>
        <ul>
            <li>1. Founded in 1965 ad CRUISES(PRINCESS)</li>
            <li>2. Under the flag of more than 100 thousand tons of luxury cruise ship,the route involved in the world's famous picturesque port of the more than and 200 19.</li>
            <li>3. Princess Cruises for her modernization and innovation in the world of luxury cruise industry renowned tourist routes,in2007,Princess Cruises has led to its brilliant million visitors to tour.</li>
        </ul>
    </div>
    <div class="hex">
      <img src="../../assets/images/lcx12.png" alt="">
    </div>
    <div class="xx"></div>
    <div class="zyys">
        <h3 style="color:#27c1b4">职业优势</h3>
        <ul>
            <li>周游世界：跟随游轮周游世界上的著名旅游景点，而且你绝对会有这样的空闲时间；</li>
            <li>国际交友：与来自于世界各国的船员共事和生活，并在全英文环境内最快的提升英语能力；</li>
            <li>无限机会：改变命运的机会，拥有强大的人脉圈，丰厚的资金积累，非凡的人生阅历；</li>
            <li>薪水优势：游轮上的岗位，可以让你拿到740-3000美金每月的纯收入，包吃包住；</li>
        </ul>
    </div>
    <div class="xx"></div>
    <div class="zyys">
        <h3 style="color:#27c1b4">福利待遇</h3>
        <ul>
            <li>周游世界：跟随游轮周游世界上的著名旅游景点，而且你绝对会有这样的空闲时间；</li>
            <li>国际交友：与来自于世界各国的船员共事和生活，并在全英文环境内最快的提升英语能力；</li>
            <li>无限机会：改变命运的机会，拥有强大的人脉圈，丰厚的资金积累，非凡的人生阅历；</li>
            <li>薪水优势：游轮上的岗位，可以让你拿到740-3000美金每月的纯收入，包吃包住；</li>
        </ul>
    </div>
    <div class="xx"></div>
    <div class="zyys">
        <h3 style="color:#27c1b4">marlin介绍</h3>
        <ul>
            <li>周游世界：跟随游轮周游世界上的著名旅游景点，而且你绝对会有这样的空闲时间；</li>
            <li>国际交友：与来自于世界各国的船员共事和生活，并在全英文环境内最快的提升英语能力；</li>
            <li>无限机会：改变命运的机会，拥有强大的人脉圈，丰厚的资金积累，非凡的人生阅历；</li>
            <li>薪水优势：游轮上的岗位，可以让你拿到740-3000美金每月的纯收入，包吃包住；</li>
        </ul>
    </div>
    <div class="fs">
        <button class="btn1" @click="jl">发送简历</button>
        <button class="btn2" @click="gt">立即沟通</button>
    </div>
    <div class="tc">
        <div class="bb">
        <div class="jlf">
            <img src="../../assets/images/lcx19.png" alt="">
        </div>
        <div class="qr">
            <p>确认发送？  （如果系统中无完整简历则提示用户先完成简历）</p>
            <button class="btn3">是</button>
            <button class="btn4">否</button>
        </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'gwjs',
}

</script>
<style scoped>
    *{
        margin:0;
        padding:0;
        list-style: none;
    }
    .clear{clear:both}
    .top{
        width:100%;
        height:1.333333rem;
        background:#27c1b4;
        padding-top:.266667rem;
    }
    .top ul{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .top ul li:nth-child(1){
        font-size:30px;
        color:#fff; 
    }
    .top ul li:nth-child(2){
        color:#fff;
        font-size:18px;
        margin-left:.933333rem;
    }
    .top ul li:nth-child(3) img{
        width:.533333rem;
        height:.533333rem;
        margin-right:.213333rem;
    }
    .reca{
      margin-top:.466667rem;
      margin-left:.266667rem;
      margin-right:.266667rem;
    }
    .reca ul{
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .reca h3{
      font-size:16px;
    }
    .reca p{
      margin-top:.266667rem;
    }
    .reca ul li:nth-child(2){
      font-size:18px;
      margin-top:-.4rem;
    }
    .xx{
      width:100%;
      height: .266667rem;
      background: #a9a9a9;
      margin-top:.266667rem;
    }
    .rzyq{
        margin-top:.466667rem;
        margin-left:.293333rem; 
        margin-right:.213333rem;
    }
    .rzyq ul li:nth-child(1){
        margin-top:.733333rem;
        text-indent: .32rem;
        line-height: 20px;
    }
    .rzyq ul li:nth-child(2){
        margin-top:.266667rem;
        text-indent: .32rem;
        line-height: 20px;
    }
    .rzyq ul li:nth-child(3){
        margin-top:.266667rem;
        text-indent: .32rem;
        line-height: 20px;
    }
    .hex img{
      width:9.466667rem;
      height:3.333333rem;
      margin-top:.266667rem;
      margin-left:.266667rem;
    }
    .zyys{
      margin-top:.373333rem;
      margin-left:.266667rem;
    }
    .zyys ul{
      margin-top:.533333rem;
    }
    .zyys ul li{
      line-height:20px;
    }
    .fs{
      width:100%;
      height:1.533333rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top:.133333rem;
    }
    .btn1{
      width:4rem;
      height:1rem;
      border:1px solid #35968e;
      cursor: pointer;
      color:#35968e;
      margin-left:.8rem;
    }
    .btn2{
      width:4rem;
      height:1rem;
      background:#35968e;
      border:1px solid #35968e;
      cursor: pointer;
      color:#fff;
      margin-right:.8rem;
    }
    .tc{
      width:100%;
      height:100%;
      background: rgba(40, 40, 40, 0.2);
      position:fixed;
      top:0;
      left:0;
      display:none;
    }
    .bb{
      margin-top:4.133333rem;
      margin-left:1.466667rem;
    }
    .jlf img{
      width:7.2rem;
      height:3.133333rem;
    }
    .qr{
      width:7.2rem;
      height:2.6rem;
      background:#fff;
    }
    .qr p{
      padding-top:.533333rem;
      margin-left:.4rem;
    }
    .qr .btn3{
      width:1.2rem;
      height:.6rem;
      border:1px solid #27c1b4;
      color:#27c1b4;
      border-radius: 10px;
      cursor: pointer;
      margin-top:.4rem;
      margin-left:1.8rem;
    }
    .qr .btn4{
      width:1.2rem;
      height:.6rem;
      border-radius: 10px;
      cursor: pointer;
      border:1px solid #fff;
      color:#a9a9a9;
      margin-left:1rem;
    }
    .hello{
      position: relative;
    }
</style>