<template>
  <div class="hello">
    <div class="top">
        <img src="../../assets/images/lcx1.png" alt="">
        <div class="rz">
            <h3>热招专场</h3>
            <p>高薪热招  速及反馈</p>
        </div>
        <ol>
            <li></li>
            <li></li>
            <li></li>
        </ol>
    </div>
    <div class="jc">
        <ul>
            <li>
                <select name="" id="">
                    <option value="">时间</option>
                </select>
            </li>
            <li style="color: #a9a9a9">|</li>
            <li><select name="" id="">
                    <option value="">公司</option>
                </select></li>
            <li style="color: #a9a9a9">|</li>
            <li><select name="" id="">
                    <option value="">岗位</option>
                </select></li>
            <li style="color: #a9a9a9">|</li>
            <li><select name="" id="">
                    <option value="">详情</option>
                </select></li>
        </ul>
    </div>
    <div class="box">
        <div class="ms">
            <ul>
                <li><img src="../../assets/images/lcx2.png" alt=""></li>
                <li>
                    <h3>3月20号  公主邮轮  上海现场面试</h3>
                    <p>厨师  |  服务员  |  酒吧服务员  |  免税店  |  摄影师  |  酒吧服务员  |  免税店  |  摄影师</p>
                </li>
            </ul>
            <div class="xa"></div>
            <div class="rs">
                <img src="../../assets/images/lcx5.png" alt="">
            </div>
        </div>
        <div class="ms">
                <ul>
                    <li><img src="../../assets/images/lcx2.png" alt=""></li>
                    <li>
                        <h3>3月20号  公主邮轮  上海现场面试</h3>
                        <p>厨师  |  服务员  |  酒吧服务员  |  免税店  |  摄影师  |  酒吧服务员  |  免税店  |  摄影师</p>
                    </li>
                </ul>
                <div class="xa"></div>
                <div class="rs">
                    <img src="../../assets/images/lcx5.png" alt="">
                </div>
            </div>
        <div class="ms">
            <ul>
                <li><img src="../../assets/images/lcx2.png" alt=""></li>
                <li>
                    <h3>3月20号  公主邮轮  上海现场面试</h3>
                    <p>厨师  |  服务员  |  酒吧服务员  |  免税店  |  摄影师  |  酒吧服务员  |  免税店  |  摄影师</p>
                </li>
            </ul>
            <div class="xa"></div>
            <div class="rs">
                <img src="../../assets/images/lcx5.png" alt="">
            </div>
        </div>
        <div class="ms">
            <ul>
                <li><img src="../../assets/images/lcx2.png" alt=""></li>
                <li>
                    <h3>3月20号  公主邮轮  上海现场面试</h3>
                    <p>厨师  |  服务员  |  酒吧服务员  |  免税店  |  摄影师  |  酒吧服务员  |  免税店  |  摄影师</p>
                </li>
            </ul>
            <div class="xa"></div>
            <div class="rs">
                <img src="../../assets/images/lcx5.png" alt="">
            </div>
        </div>
        <div class="ms">
            <ul>
                <li><img src="../../assets/images/lcx2.png" alt=""></li>
                <li>
                    <h3>3月20号  公主邮轮  上海现场面试</h3>
                    <p>厨师  |  服务员  |  酒吧服务员  |  免税店  |  摄影师  |  酒吧服务员  |  免税店  |  摄影师</p>
                </li>
            </ul>
            <div class="xa"></div>
            <div class="rs">
                <img src="../../assets/images/lcx5.png" alt="">
            </div>
        </div>   
        <div class="ms">
            <ul>
                <li><img src="../../assets/images/lcx2.png" alt=""></li>
                <li>
                    <h3>3月20号  公主邮轮  上海现场面试</h3>
                    <p>厨师  |  服务员  |  酒吧服务员  |  免税店  |  摄影师  |  酒吧服务员  |  免税店  |  摄影师</p>
                </li>
            </ul>
            <div class="xa"></div>
            <div class="rs">
                <img src="../../assets/images/lcx5.png" alt="">
            </div>
        </div> 
    </div>
  </div>
</template>

<script>
export default {
  name: 'zpsy',
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    *{
        margin:0;
        padding:0;
        list-style:none;
    }
    .hello{
        width:100%;
        height:100%;
        background:#a9a9a9;
    }
    .top{
        position: relative;
    }
    .rz{
        position: absolute;
        top:1.466667rem;
        left:2.933333rem;
        width:3.866667rem;
        height:1.733333rem;
        background: rgba(40, 40, 40, 0.2);
    }
    .rz h3{
        font-size:24px;
        text-align:center;
        color:#fff;
        margin-top:.266667rem;
    }
    .rz p{
        text-align:center;
        color:#fff;
        margin-top:.266667rem;
    }
    .top ol{
        position: absolute;
        top:4rem;
        left:4rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .top ol li{
        width:.266667rem;
        height:.266667rem;
        background:#a9a9a9;
        border-radius: 50%;
        margin-right:.4rem;
    }
    .top ol li:nth-child(1){
        width:.533333rem;
        height:.266667rem;
        background:skyblue;
        border-radius: 10px;
    }
    .top img{
        width:100%;
        height:4.666667rem;
    }
    .jc{
        width:100%;
        height:1rem;
        background:#fff;
    }
    .jc ul{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-top:.266667rem;
        margin-left:.266667rem;
        margin-right:.266667rem;
    }
    .jc ul li select{
        border:none;
        outline:none;
    }
    .box{
        margin-left:.266667rem;
        margin-right:.266667rem;
    }
    .ms{
        width:9.466667rem;
        height:2.533333rem;
        background:#fff;
        margin-top:.266667rem;
    }
    .ms ul{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-left:.333333rem;
        padding-top:.333333rem;
    }
    .ms ul li img{
        width:1.333333rem;
        height:1.333333rem;
    }
    .ms ul li h3{
        font-size:16px;
        margin-left:.133333rem;
    }
    .ms ul li p{
        margin-left:.133333rem;
        margin-right:.533333rem;
        margin-top:.133333rem;
    }
    .xa{
        width:9rem;
        border:1px solid #a9a9a9;
        margin-left:.2rem;
        margin-top:.266667rem;
    }
    .rs img{
        width:4.2rem;
        height:.4rem;
        margin-left:.2rem;
        margin-top:.066667rem;
    }
</style>