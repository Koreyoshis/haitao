<template>
  <div class="hello">
    <div class="top">
        <h3>上船</h3>
    </div>
    <div class="lc">
        <ul>
            <li>
                <dl>
                    <dt><img src="../../assets/images/lcx20.png" alt=""></dt>
                    <dd>上船流程</dd>
                </dl>
            </li>
            <li>
                <dl>
                    <dt><img src="../../assets/images/lcx21.png" alt=""></dt>
                    <dd>签证办理</dd>
                </dl>
            </li>
            <li>
                <dl>
                    <dt><img src="../../assets/images/lcx22.png" alt=""></dt>
                    <dd>健康体检</dd>
                </dl>
            </li>
            <li>
                <dl>
                    <dt><img src="../../assets/images/lcx23.png" alt=""></dt>
                    <dd>我的签证</dd>
                </dl>
            </li>
        </ul>
        <div class="xian"></div>
        <ul>
            <li>
                <dl>
                    <dt><img src="../../assets/images/lcx24.png" alt=""></dt>
                    <dd>上船流程</dd>
                </dl>
            </li>
            <li>
                <dl>
                    <dt><img src="../../assets/images/lcx25.png" alt=""></dt>
                    <dd>签证办理</dd>
                </dl>
            </li>
            <li>
                <dl>
                    <dt><img src="../../assets/images/lcx26.png" alt=""></dt>
                    <dd>健康体检</dd>
                </dl>
            </li>
            <li>
                <dl>
                    <dt><img src="../../assets/images/lcx27.png" alt=""></dt>
                    <dd>我的签证</dd>
                </dl>
            </li>
        </ul>
    </div>
    <div class="box">
        <div class="sccs">
            <ul>
                <li>海乘常识</li>
                <li>海乘证件</li>
                <li>海乘体检</li>
                <li>海乘出行</li>
            </ul>
        </div>
        <div class="scxw"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'scsy'
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
    .top h3{
        text-align:center;
        line-height:1.333333rem;
        font-size:.533333rem;
        color:#fff;
    }
    .lc{
        width:100%;
        background:#fff;
        height:4.8rem;
    }
    .lc ul{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-left:.533333rem;
        margin-right:.533333rem;
        padding-top:.466667rem;
    }
    .lc ul li dl dt img{
        width:.933333rem;
        height:.933333rem;
        
    }
    .lc ul li dl{
        text-align:center;
    }
    .xian{
        width:100%;
        border:1px solid #f5f5f5;
        margin-top:.533333rem;
    }
    .sccs ul li{
        height:.533333rem;
    }
</style>