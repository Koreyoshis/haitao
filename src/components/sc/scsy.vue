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
        <div class="scxw">
               <ul>
        <li>
            <h3>在邮轮上印度客人点头Yes，摇头未必</h3>
            <p>这是一个印度小女孩，名字太长，实在记不住，印象很深，我们早上九点开的门...</p>
        </li>
        <li><img src="../../assets/images/lcx28.png" alt=""></li>
    </ul>
    <ul>
        <li>
            <h3>在邮轮上印度客人点头Yes，摇头未必</h3>
            <p>这是一个印度小女孩，名字太长，实在记不住，印象很深，我们早上九点开的门...</p>
        </li>
        <li><img src="../../assets/images/lcx29.png" alt=""></li>
    </ul>
    <ul>
        <li>
            <h3>在邮轮上印度客人点头Yes，摇头未必</h3>
            <p>这是一个印度小女孩，名字太长，实在记不住，印象很深，我们早上九点开的门...</p>
        </li>
        <li><img src="../../assets/images/lcx30.png" alt=""></li>
    </ul>
    <ul>
        <li>
            <h3>在邮轮上印度客人点头Yes，摇头未必</h3>
            <p>这是一个印度小女孩，名字太长，实在记不住，印象很深，我们早上九点开的门...</p>
        </li>
        <li><img src="../../assets/images/lcx28.png" alt=""></li>
    </ul>
    <ul>
        <li>
            <h3>在邮轮上印度客人点头Yes，摇头未必</h3>
            <p>这是一个印度小女孩，名字太长，实在记不住，印象很深，我们早上九点开的门...</p>
        </li>
        <li><img src="../../assets/images/lcx29.png" alt=""></li>
    </ul>
    <ul>
        <li>
            <h3>在邮轮上印度客人点头Yes，摇头未必</h3>
            <p>这是一个印度小女孩，名字太长，实在记不住，印象很深，我们早上九点开的门...</p>
        </li>
        <li><img src="../../assets/images/lcx30.png" alt=""></li>
    </ul>
        </div>
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
    .box{
        width:100%;
        height:100%;
        background:#fff;
        margin-top:.266667rem;
    }
    .sccs ul{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-left:.533333rem;
        margin-right:.533333rem;
    }
    .sccs ul li{
        width:1.8rem;
        height:1rem;
        text-align:center;
        line-height:1rem;
    }
    .sccs ul li:nth-child(1){
        border-bottom:1px solid #27c1b4;
        color:#27c1b4;
    }
    .scxw ul{
        margin-left:.266667rem;
        margin-right:.266667rem;
    }
    .scxw ul{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top:.333333rem;
    }
    .scxw ul li h3{
        font-size:.4rem;
        
    }
    .scxw ul li p{
        line-height:20px;
        margin-top:.266667rem;
    }
    .scxw ul li img{
        width:2.6rem;
        height:1.933333rem;
    }
</style>