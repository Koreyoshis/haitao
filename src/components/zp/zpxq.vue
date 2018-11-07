<template>
  <div class="hello">
        <div class="top">
            <ul>
                <li><</li>
                <li>招聘详情</li>
            </ul>
        </div>
        <div class="gq">
            <ul>
                <li><img src="../../assets/images/lcx2.png" alt=""></li>
                <li>
                    <h3>公主邮轮</h3>
                    <p>173—800人  8000多平方米</p>
                </li>
                <li>
                    <button>公司详情</button>
                </li>
            </ul>
        </div>
        <div class="box">
        <div class="hzms">
            <ul>
                <li>
                    <h3 style="color:#27c1b4">Restaurant Captain</h3>
                    <p>要求:3年经验  口语流利  Marlin>90</p>
                </li>
                <li>12K+小费+提成</li>
            </ul>
            <div class="xian"></div>
            <p class="p1">2017年3月1/2日 杭州现场面试</p>
        </div>
        <div class="hzms">
            <ul>
                <li>
                    <h3 style="color:#27c1b4">Guest Room</h3>
                    <p>要求:3年经验  口语流利  Marlin>90</p>
                </li>
                <li>12K+小费+提成</li>
            </ul>
            <div class="xian"></div>
            <p class="p1">2017年3月1/2日 杭州现场面试</p>
        </div>
        <div class="hzms">
            <ul>
                <li>
                    <h3 style="color:#27c1b4">Bar</h3>
                    <p>要求:3年经验  口语流利  Marlin>90</p>
                </li>
                <li>12K+小费+提成</li>
            </ul>
            <div class="xian"></div>
            <p class="p1">2017年3月1/2日 杭州现场面试</p>
        </div>
        <div class="hzms">
            <ul>
                <li>
                    <h3 style="color:#27c1b4">Restaurant Captain</h3>
                    <p>要求:3年经验  口语流利  Marlin>90</p>
                </li>
                <li>12K+小费+提成</li>
            </ul>
            <div class="xian"></div>
            <p class="p1">2017年3月1/2日 杭州现场面试</p>
        </div>
        <div class="hzms">
            <ul>
                <li>
                    <h3 style="color:#27c1b4">Guest Room</h3>
                    <p>要求:3年经验  口语流利  Marlin>90</p>
                </li>
                <li>12K+小费+提成</li>
            </ul>
            <div class="xian"></div>
            <p class="p1">2017年3月1/2日 杭州现场面试</p>
        </div>
        <div class="hzms">
            <ul>
                <li>
                    <h3 style="color:#27c1b4">Bar</h3>
                    <p>要求:3年经验  口语流利  Marlin>90</p>
                </li>
                <li>12K+小费+提成</li>
            </ul>
            <div class="xian"></div>
            <p class="p1">2017年3月1/2日 杭州现场面试</p>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'zpxq'
}
</script>
<style scoped>
    *{
        margin:0;
        padding:0;
        list-style: none;
    }
    .hello{
        width:100%;
        height:100%;
        background:#f5f5f5;
    }
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
        margin-left:.266667rem;
    }
    .top ul li:nth-child(2){
        color:#fff;
        font-size:18px;
        margin-right:4.2rem;
    }
    .gq{
        width: 100%;
        height: 1.573333rem;
        background: #fff;
    }
    .gq ul{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-top:.266667rem;
        padding-left:.266667rem;
    }
    .gq ul li img{
        width:1rem;
        height:1rem;
    }
    .gq ul li h3{
        margin-left:-1.333333rem;
        margin-top:-.133333rem;
        font-size:16px;
    }
    .gq ul li p{
        margin-left:-1.333333rem;
        margin-top:.2rem;
    }
    .gq ul li button{
        width:1.6rem;
        height:.533333rem;
        border:1px solid #27c1b4;
        background:#fff;
        border-radius:4px;
        color:#27c1b4;
        margin-top:-.133333rem;
        margin-right:.293333rem;
    }
    .box{
        margin-left:.266667rem;
        margin-right:.266667rem;
    }
    .hzms{
        width:9.466667rem;
        height:2.4rem;
        background:#fff;
        margin-top:.266667rem;
    }
    .hzms ul{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-left:.266667rem;
        padding-top:.4rem;
        margin-right:.266667rem;
    }
    .hzms ul li h3{
        font-size:16px;
    }
    .hzms ul li p{
        margin-top:.133333rem;
    }
    .hzms ul li:nth-child(2){
        font-size:16px;
        color:red;
        margin-top:-.266667rem;
    }
    .xian{
        width:8.933333rem;
        border:1px solid #a9a9a9;
        margin-top:.266667rem;
        margin-left:.2rem;
        margin-right:.2rem;
    }
    .p1{
        margin-top:.2rem;
        margin-left:.2rem;
    }
</style>