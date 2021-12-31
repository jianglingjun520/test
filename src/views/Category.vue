
<template>
    <div>
        <!-- 头部组件 -->
        <search></search>
        <!-- 主体部分 -->
        <div id="categoryPage">
            <div class="category-left">
                <ul>
                    <li :class="{active:num==index}" v-for="(item,index) in categoryList" :key = "item.id" @click="sidebarFn(index)" >{{item.name}}</li>
                </ul>
            </div>
            <div class="category-right">
                <div class="title">
                    <div class="dot"></div>
                    <span>{{subTitle}}</span>
                </div>
                <ul class="content">
                    <li v-for="item in categoryListRight" :key="item.id" >
                        <div class="img">
                            <img :src=item.image :alt=item.name>
                        </div>
                        <span class="format">{{item.name}}</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import search from '../components/search'
import axios from 'axios'
export default {
  name: "Category",
  components: {
      search
  },

  data() {
    return {
        is_index:1,
        //  分类侧边栏数据
        categoryList:[],
        //  分类宫格数据
        categoryListRight:[],
        //  选中状态样式
        num:0,
        //  子标题
        subTitle:''
        

    }
  },
  created(){
      //  获取分类页的数据
      axios.get('https://uwebshop.uweb.com.cn/addons/shopro/Category/index',{
          query: {
              data:this.is_index
          }
      }).then(res => {

          this.categoryList = JSON.parse(JSON.stringify(res.data.data))
          //  副标题初始值
          this.subTitle = this.categoryList[0].name
          //  宫格初始值
          this.categoryListRight = this.categoryList[0].children
       
      })
  },
  methods: {
      //  侧边栏的点击切换事件
     sidebarFn(index) {
         //  选择当前
         this.num = index
         //  子标题
         this.subTitle = this.categoryList[index].name
         //  显示右边宫格
        this.categoryListRight = this.categoryList[index].children

     }
  }

};
</script>

<style lang="scss" scope >
    .active {
        background-color: #F6F6F6;
        color: #FF351C;
    }
    * {
        margin: 0;
        padding: 0;
    }
    li {
        list-style: none;
    }
    #categoryPage {
        display: flex;
        justify-content: space-between;
        background-color: #F6F6F6;
        // 左边导航
        .category-left {
            background-color: #fff;
            height: calc(100vh - 1.866667rem);
            ul {
                li {
                    margin-top: .12rem;
                    box-sizing: border-box;
                    width: 2.133333rem;
                    height: 1.066667rem;
                    padding-top: .36rem;
                    padding-left: .413333rem;
                    color: #333;
                    font-size: .346667rem;
                    font-weight: 700;
                }
            }
        }
       //右边内容
       .category-right {
            background-color: #fff;
            margin-left: .24rem;
            .title {
                width: 7.626667rem;
                height: 1.333333rem;
                display: flex;
                align-items: center;
                border-bottom: .026667rem solid #F6F6F6;
                font-size: .426667rem;
                font-weight: 700;
                .dot {
                    width: .213333rem;
                    height: .213333rem;
                    background-color: #FF351C;
                    border-radius: 50%;
                    margin:0 .386667rem;
                }
                span {
                    color: #333;
                    font-size: .426667rem;
                }
            }
          //  宫格
            .content {
                display: flex;
                flex-wrap: wrap;
                padding: .346667rem 0;
                box-sizing: border-box;
                li {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    margin-bottom: .8rem;
                    width: 33%;
                    height: 1.706667rem;
                    text-align: center;
                    // height: 1.6rem;
                    .img {
                        width: 1.28rem;
                        img {
                            width: 100%;
                        }
                    }
                    .format {
                        color: #333;
                        font-size: .346667rem;
                    }
                }
            }
       }
    }
</style>

