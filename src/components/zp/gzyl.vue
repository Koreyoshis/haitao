<template>
  <div class="hello">
      <div class="top">
        <ul>
            <li><router-link tag="span" to="/zpshouye"><</router-link></li>
            <li>公主邮轮</li>
            <li>
                <img src="../../assets/images/lcx8.png" alt="">
                <img src="../../assets/images/lcx9.png" alt="">
            </li>
        </ul>
    </div>
    <div class="gj">
        <h3 style="color:#27c1b4">公司介绍</h3>
        <p class="p1">创立于公元1965年的公主邮轮公司（PRINCESS CRUISES）是全世界规模最大、服务最好的邮轮公司之一，旗下有19艘超过10万吨的豪华邮轮，其航线涉足全球200多个风景如画知名港口。公主邮轮公司是现今世界上餐饮、娱乐与游览于一体并为游客提供灵活选择的高级邮轮公司。</p>
        <p class="p2">公主邮轮因她的现代化和豪华创新而在世界邮轮界享负盛名，单在2007年，公主邮轮已引领百多万游客游历其精彩纷呈的旅游线路，抵达的风景胜地遍布北美的阿拉斯加、加勒比海、欧洲、巴拿马运河、墨西哥里维埃拉、南太平洋、南美、夏威夷、亚洲，以及加拿大和新英格兰</p>
        <img src="../../assets/images/lcx10.png" alt="">
    </div>
    <div class="xx"></div>
    <div class="rzyq">
        <h3 style="color:#27c1b4">公司介绍</h3>
        <ul>
            <li>1. Founded in 1965 ad CRUISES(PRINCESS)</li>
            <li>2. Under the flag of more than 100 thousand tons of luxury cruise ship,the route involved in the world's famous picturesque port of the more than and 200 19.</li>
            <li>3. Princess Cruises for her modernization and innovation in the world of luxury cruise industry renowned tourist routes,in2007,Princess Cruises has led to its brilliant million visitors to tour.</li>
        </ul>
    </div>
    <div class="xx"></div>
    <div class="cd">
        <h3 style="color:#27c1b4">公司介绍</h3>
        <ul>
            <li><img src="../../assets/images/lcx10.png" alt=""></li>
            <li><img src="../../assets/images/lcx10.png" alt=""></li>
            <li><img src="../../assets/images/lcx10.png" alt=""></li>
        </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'gzyl',
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
    .gj{
        margin-top:.466667rem;
        margin-left:.293333rem; 
        margin-right:.213333rem;
    }
    .p1{
        margin-top:.733333rem;
        text-indent: .32rem;
        line-height: 20px;
    }
    .p2{
        margin-top:.266667rem;
        text-indent: .32rem;
        line-height: 20px;
    }
    .gj img{
        width:9.466667rem;
        height:3.4rem;
        margin-top:.2rem;
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
    .cd{
        margin-top:.466667rem;
        margin-left:.293333rem; 
        margin-right:.213333rem;
    }
    .cd ul{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top:.266667rem;
    }
    .cd ul li img{
        width:2.933333rem;
        height:1.733333rem;
    }
</style>
