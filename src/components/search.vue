
<template>
    <div id="productPage">
        <div class="header">
            <div class="top">
                <!-- 头部的顶部区域 -->
                  <div class="signal">
                      <i class="iconfont icon-sandian1 "></i>
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
                      <i class="iconfont icon-dianliang201"></i>
                  </div>
            </div>
            <div class="nav">
                <div class="nav-left"><i class="iconfont icon-zuojiantou"></i></div>
                <div class="nav-mid">
                    <input type="text" placeholder="连衣裙">
                    <i class="iconfont icon-sousu"></i>
                </div>
            <div class="nav-right"><i class="iconfont icon-sandian1"></i></div>
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
    html {
      font-size: 37.5px
    }
    @import url("../assets/iconfont/iconfont.css");
    * {
      margin: 0;
      padding: 0;
    }

    #productPage {
      width: 100vw;
      .header {
        height: 1.866667rem;
        background-color: #ff3a1c;

        //头部
        .top {
          width: 100vw;
          // padding: 16px 12px;
          color: #fff;
          font-size: 12px;
          font-weight: 700;
          padding-top: .16rem;
          display: flex;
          justify-content: space-between;
          align-items: center;

            // 头部的左边
          .signal {
              i {
                padding: 0 .266667rem
              }
              span {
                padding-right: .373333rem;
              }
          }

          // 头部的右边
          .electric-quantity {
              i {
                padding: 0 .106667rem;
                &:last-child(){
                    padding-left: .106667rem
                }
              }

          }


        }
        .nav {
          box-sizing: border-box;
          height: .933333rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: #fff;
          margin: .133333rem ;
          margin-top: .053333rem;
          .nav-left {
            margin-left: .266667rem;
            font-size: 20px;
          }
          .nav-mid {
              display: flex;
              justify-content: center;
              align-items: center;
              position: relative;
              input {
                width: 6.666667rem;
                height: .8rem;
                border-radius: 15px;
                border: none;
                padding: 0 .346667rem;
                outline-style: none;
              }
              i {
                position: absolute;
                right: .16rem;
                top: .106667rem;
                font-size: 20px;
                color: #9a9a9a;
              }
          }
          .nav-right {
              font-size: 20px;
               padding-right: .48rem;
          }
        }

      }
    }
</style>
