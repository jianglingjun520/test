<template>
   <div id="HomePage">
        <search></search>
        <div class="mian"> 
          <!-- 帅选 -->
            <div class="screen">
                <ul>
                    <li @click="sortFn">
                       <span>排序</span>
                       <i class="iconfont icon-sanjiao"></i>
                      
                    </li>
                    <li @click = "saleNumberFn">
                        <span>销量</span>
                        <i class="iconfont icon-sanjiao"></i>
                      
                    </li>
                    <li>
                       <span>价格</span>
                       <div class="price-icon">
                           <i class="iconfont icon-sanjiao" @click="priceUp"></i>        
                           <i class="iconfont icon-sanjiao" @click="priceDown"></i>       
                       </div> 
                    </li>
                    <li @click="screenFn">
                       <span>筛选</span>
                        <i class="iconfont icon-shaixuan"></i>
                    </li>
                </ul>
            </div> 
            <!-- 商品数据 -->
            <goods :goodsList="goodsList"></goods>
             <div class="tip">
                <div class="icom-cart" @click="goToCart">
                    <i class="iconfont icon-gouwuche"></i>
                </div>
                <div class="go" @click="goToTop">
                    <i class="iconfont icon-xiangshangyiji"></i>
                </div>
             </div>
        </div>
    </div>
</template>

<script>

import goods from '../components/goods'
import search from '../components/search'
import axios from 'axios';
export default {
    name: 'Home',
    components: {
        goods,search
    },
    data() {
      return {
          goodsList:[],
          //  商品分类id
          category_id:'',
          //    分页页码
          page:1,
          //    搜索关键字(商品标题和副标题)
          keywords:'',
          //   加载一下页数据
          current_page:2
      }
    },
    created() {
      axios.post('https://uwebshop.uweb.com.cn/addons/shopro/goods/index').then( res => {
        // console.log(res.data.data.data);
        this.goodsList = res.data.data.data
      })
    },
    methods:{
      //  返回顶部
      goToTop() {
          window.scrollTo(0,-10000)
          
      },

      //  点击购物车图标跳转至购物车页面
      goToCart() {
        this.$router.push("/cart")
      },

      //  排序 按接口字段排序
      sortFn() {
          this.goodsList = this.goodsList.sort( (a,b) => {
            return a.weigh - b.weigh
          })
      },
      //  销量 从大到小排序
      saleNumberFn() {
        // sales
        this.goodsList = this.goodsList.sort( (a,b) => {
            return b.sales - a.sales
          })
      },
      //  价格
      priceDown() {
        this.goodsList = this.goodsList.sort( (a,b) => {
            return a.price - b.price
          })
      },
      priceUp() {
           this.goodsList = this.goodsList.sort( (a,b) => {
            return b.price - a.price
          })
      },
      //  筛选
      screenFn() {
          // 功能未知
          console.log("...");
      },

      //  无限滚动加载事件
      scrollFn(_this) {

        //  存放加载更多数据的变量
        let more = []
        window.onscroll = () => {
              //  文档内容实际高度（包括超出视窗的溢出部分）
              let scrollHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
              //  滚动条滚动距离
              let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
              //  窗口可视范围高度
              let clientHeight = window.innerHeight || Math.min(document.documentElement.clientHeight, document.body.clientHeight);
            
              if (clientHeight + scrollTop >= scrollHeight) {
                  //  到达底部之后再次发起请求，把请求回来的数据添加进goodsList数组中，
                 
                  axios.post('https://uwebshop.uweb.com.cn/addons/shopro/goods/index', {   
                        page:_this.current_page
                  }).then(res => {
                      //   请求之后的数据存在这个临时变量里
                      more = res.data.data.data
                      
                      //    如果请求回来的数据为空 那么清除滚动事件
                      if(more.length === 0) {
                          window.onscroll = null
                          return
                      }
                      //  遍历请求到的数据，把它添加到渲染的数组中
                      for(let i = 0; i < more.length; i++) {
                            _this.goodsList.push(more[i])
                      }

                  })
                  //  每次滚到底部 就让页数+1 作为下一页的页数请求
                  _this.current_page += 1
              }
          }

      },

    },
    mounted() {
      //  无限滚动加载
      //  这里调用之后，methods的this指向window 所以需要保留起来传递过去使用
      let _this = this
      this.scrollFn(_this)
    }
  
  }
</script>

<style lang="scss" scope>

    * {
        margin: 0;
        padding: 0;
    }

    #HomePage {
        background-color: #ff3a1c;;
        width: 100vw;
        .screen {
            border-radius: .266667rem .266667rem 0 0;
            background-color: #F2F2F2;
            width: 100vw;
            ul {
                height:1.44rem;
                display: flex;
                justify-content: space-around;
                li {
                    list-style: none;
                    display: flex;
                    align-items: center;
                    font-size: .4rem;
                    i {
                        font-size: .533333rem;
                    }

                    .price-icon {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        i {        
                            &:first-child {
                                transform: rotate(180deg) translateY(-6px) ;
                            }
                            &:last-child {
                                transform:translateY(-6px) ;
                            }
                        }
                    }
                }
            }
        }

        .tip {
              position: fixed;
              right: .426667rem;
              bottom: 2.026667rem;
              .icom-cart, .go {
                  width: .8rem;
                  height: .8rem;
                  border-radius: 50%;
                  background-color: rgba(255, 92, 28, .8);
                  text-align: center;
                  color: #fff;
                  display: flex;
                  justify-content: center;
                  align-items: center;
              }
            .go {
                  margin-top: .266667rem;
            }
        }
        

    }
</style>
