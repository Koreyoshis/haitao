<template>
  <div class="hello">
    <div class="top">
        <ul>
            <li><</li>
            <li>海洋和谐号</li>
            <li>
                <img src="../../assets/images/lcx8.png" alt="">
                <img src="../../assets/images/lcx9.png" alt="">
            </li>
        </ul>
    </div>
    <div class="hex">
        <img src="../../assets/images/lcx12.png" alt="">
    </div>
    <div class="hxcs">
        <h3 style="color:#27c1b4">海洋和谐号参数</h3>
        <ul>
            <li><dl>
                <dt><img src="../../assets/images/lcx13.png" alt=""></dt>
                <dd>227000吨 总吨位</dd>
            </dl></li>
            <li><dl>
                <dt><img src="../../assets/images/lcx14.png" alt=""></dt>
                <dd>2016年4 装修日期</dd>
            </dl></li>
            <li><dl>
                <dt><img src="../../assets/images/lcx15.png" alt=""></dt>
                <dd>18个甲板 甲板层数</dd>
            </dl></li>
        </ul>
        <ul>
            <li><dl>
                <dt><img src="../../assets/images/lcx16.png" alt=""></dt>
                <dd>1536人 船员数</dd>
            </dl></li>
            <li><dl>
                <dt><img src="../../assets/images/lcx17.png" alt=""></dt>
                <dd>6000人 载客量</dd>
            </dl></li>
            <li><dl>
                <dt><img src="../../assets/images/lcx18.png" alt=""></dt>
                <dd>362×64 长宽度</dd>
            </dl></li>
        </ul>
    </div>
    <div class="xx"></div>
    <div class="hxjs">
        <h3 style="color:#27c1b4">海洋和谐号介绍</h3>
        <ul>
            <li>海洋和谐号（Harmony of the Seas）拥有18个甲板，长约362米，高约64米，载客容量高达6000人，重大227000吨，造价高达13亿5000万元。海洋和谐号比历史上著名的泰坦尼克号还要长100米，比此前世界上最大的两艘游轮——海洋魅力号和海洋绿洲号还要宽大概1米，成为全世界最大的游轮。</li>
            <li>皇家加勒比海还有另外两艘游轮正在建造，一艘是于2016年4月投入营运的海洋颂歌号（Anthem of the Swas），另一艘也是于4月出海的海洋喝彩号（Ovation of the Seas）。三艘新船将使该公司拥有的游轮增至25艘。</li>
            <li>海洋和谐号有三个数层楼高的滑水道、担任酒保的机器人和一个手工制的旋转木马</li>
        </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hyhx'
}
</script>
<style scoped>
  *{
        margin:0;
        padding:0;
        list-style: none;
    }
    .top{
        width:100%;
        height:1.066667rem;
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
    .hex img{
        width:100%;
        height:4.533333rem;
    }
    .hxcs{
        margin-top:.466667rem;
        margin-left:.293333rem; 
        margin-right:.213333rem;
    }
    .hxcs ul li dl dd{
        width:1.533333rem;
        text-align:center;
    }
    .hxcs ul{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top:.493333rem;
    }
    .hxcs ul li{
        margin-left:.733333rem;
        margin-right:.8rem;
    }
    .xx{
        width:100%;
        height: .266667rem;
        background: #a9a9a9;
        margin-top:.266667rem;
    }
    .hxjs{
        margin-top:.466667rem;
        margin-left:.293333rem; 
        margin-right:.213333rem;
    }
    .hxjs ul{
      margin-top:.6rem;
    }
    .hxjs ul li{
      text-indent:24px;
      line-height:20px;
    }
</style>