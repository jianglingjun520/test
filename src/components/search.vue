<template>
    <div id="productPage">
        <div class="header">
            <div class="top">
                <!-- 头部的顶部区域 -->
                <div class="signal">
                    <ul class="dot">
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                    <span>中国移动</span>
                    <span>4G</span>
                </div>
                <div class="time">
                    <span>11:25</span>
                </div>
                <div class="electric-quantity">
                    <i class="iconfont icon-banshizhinan"></i>
                    <i class="iconfont icon-naozhong"></i>
                    <span>97%</span>
                    <i class="iconfont icon-dianliang"></i>
                </div>
            </div>
            <div class="nav">
                <i class="iconfont icon-zuojiantou nav-icon-left"></i>
                <div class="nav-mid">
                    <input type="text" placeholder="连衣裙">
                    <i class="iconfont icon-sousu"></i>
                </div>
                <i class="iconfont icon-sandian1 nav-icon-right"></i>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
    };
  }
};
</script>

<style lang="scss" scope>
    @import url("../assets/iconfont/iconfont.css");
    * {
        margin: 0;
        padding: 0;
    }

    #productPage {
        width: 100vw;
        .header {
            height: 1.92rem;
            background-color: #ff3a1c;
        //头部
        .top {
            width: 100vw;
            box-sizing: border-box;
            color: #fff;
            font-size: .32rem;
            padding: .106667rem;
            padding-top: .08rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            // 头部的左边
            .signal {
                display: flex;
                align-items: center;
                .dot {
                    display: flex;
                    padding-right: .133333rem;
                    li {
                        width: .106667rem;
                        height: .106667rem;
                        border-radius: 50%;
                        background-color: #fff;
                        border: 1px solid #fff;
                        margin-right: .026667rem;
                        list-style: none;
                        &:last-child {
                            background-color:transparent;
                            border: 1px solid #fff;
                        }
                    }
                }
                span {
                    padding-right: .373333rem;
                }
            }
            // 头部的右边
            .electric-quantity {
                display: flex;
                align-items: center;
                i {
                    font-size: .32rem;
                    padding: 0 .106667rem;
                    &:last-child {
                        font-size: .533333rem;
                    }
                }
            }
        }
        .nav {
            box-sizing: border-box;
            width: 100vw;
            height: .933333rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            color: #fff;
            i {
                font-weight: 700;
            }
            .nav-icon-left {
                padding: 0 .8rem 0 .266667rem;
                font-size: .54rem;
            }
            .nav-mid {
                display: flex;
                justify-content: center;
                align-items: center;
                position: relative;
                input {
                    box-sizing: border-box;
                    width: 6.666667rem;
                    height: .8rem;
                    border-radius: .4rem;
                    border: none;
                    padding: 0 .346667rem;
                    outline-style: none;
                    font-size: .373333rem;
                }
                i {
                    position: absolute;
                    right: .16rem;
                    top: .106667rem;
                    font-size: .533333rem;
                    color: #9a9a9a;
                }
            }
            .nav-icon-right {
              padding: 0 .346667rem 0 .586667rem;
                font-size: .533333rem;
            }
        }
      }
    }
</style>
