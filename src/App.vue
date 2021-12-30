<template>
  <div id="app">
     <router-view/>
     <div class="footer">
          <router-link class="home" to="/home" name="Home" >
                <i class="iconfont icon-icon_huabanfuben"></i>
                <span>首页</span>
          </router-link>
          <router-link to="/category" class="category" name="Category">
                <i class="iconfont icon-fenlei"></i>
                <span>分类</span>
          </router-link>
          <router-link to="/cart" class="cart" name="Cart">
                <i class="iconfont icon-gouwuche"></i>
                <span>购物车</span>
          </router-link>
          <router-link to="/user" class="user" name="User">
                <i class="iconfont icon-geren1"></i>
                <span>我的</span>
          </router-link>
      </div>
  </div>
</template>

<style lang="scss" scope>
@import url("/src/assets/iconfont/iconfont.css");
// @function set($n) {
//   @return ($n / 2) / 37.5+rem;
// } 

#app {
    html {
      font-size: 37.5px;
    }
    * {
      margin: 0;
      padding: 0;
    }
     //  清除router-link的下划线
    a {
       text-decoration: none;
       color: #333;
    }
    .router-link-active {
        text-decoration: none;
        color: #ff3a1c;
    }

    .footer {
        position: fixed;
        bottom: 0;
        width: 100%;
        display: flex;
        justify-content: space-around;
        padding: 5px 0;
        background-color: #fff;
        border-top: 1px solid #DDD ;
        font-size: 11px;
        .home,.category,.cart,.user {
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center;
        }
        router-link {
            color: #333;
        }
        .cart {
          position: relative;
          &::after {
            position: absolute;
            top: -0.08rem;
            right: .026667rem;
            content: "9";
            display:block;
            width: .4rem;
            height: .4rem;
            font-size: 12px;
            border-radius: 50%;
            background-color: #ff3a1c;
            text-align: center;
            line-height: .4rem;
            color:#fff;

          }
         
        } 
        .user {
               position: relative;
          &::after {
              position: absolute;
              top: -0.08rem;
              right: -0.266667rem;
              content: "";
              display:block;
              width: .266667rem;
              height: .266667rem;
              font-size: 12px;
              border-radius: 50%;
              background-color: #ff3a1c;
              }
          }
    }
}

</style>
