
<template>
    <div id='goodsPage'>

        <div class="goods">
            <ul>
                <li v-for="item in goodsList" :key = "item.id" @click="goToProduct">
                    <div class="img">
                        <img v-lazy = item.image alt="">
                    </div>
                    <div class="content">
                        <div class="title">
                            {{item.title}}
                        </div>
                        <div class="desc">
                            {{item.subtitle}}
                    </div>
                    <div class="sales">满减促销</div>
                    <div class="price">
                        <span>￥{{item.price}}</span>
                        <span>{{item.sales}}人购买</span>
                    </div>
                    </div>
                </li>
            </ul> 
        </div>
    </div>
</template>

<script>

export default {
    props: {
       goodsList: {
           type: Array,
           default: []
       }
    },
    data () {
        return {
        }
    },
    methods: {
        goToProduct(){
            this.$router.push("Product")
        }
    }
   

}
</script>
<style scoped lang="scss">

    html {
        font-size: 37.5px;
    }
    #goodsPage {
        
        li {
            list-style: none;
        }
        width: 4.4rem;
        .goods {
            
            ul {
                background-color: #F2F2F2;
                width: 100vw;
                display: flex;
                flex-wrap: wrap;
                margin-bottom: 1.2rem;
                li {
                    background-color: #fff;
                    width: 4.4rem;
                    height: 6.666667rem;
                    box-sizing: border-box;
                    margin: 0 0 .4rem .4rem;
                    font-size: 11px;
                    border-radius: .266667rem;
                    .img {
                        position: relative;
                        width: 4.4rem;
                        height: 4.266667rem; 
                        img {
                            width: 100%;
                            height: 100%;
                            border-radius: .266667rem .266667rem 0 0;
                        }

                        img[lazy="loading"] {
                            display: block;
                            width: 1.333333rem !important;
                            height: 1.333333rem !important;
                            position: absolute;
                            left: 50%;
                            top: 50%;
                            transform: translate(-50%,-50%);
                        }
                    }

                    .content {
                        
                        padding: 0 .213333rem ;
                        .title {
                        width: 3.733333rem;
                        margin: .16rem 0;
                        font-weight: 600;
                        font-size: 12px;
                        white-space:nowrap;
                        overflow:hidden;
                        text-overflow:ellipsis;
                    }

                    .desc {
                        color: #b5b5b5;
                        margin-bottom: .133333rem;
                        white-space:nowrap;
                        overflow:hidden;
                        text-overflow:ellipsis;
                    }
                    .sales {
                        box-sizing: border-box;
                        width: 1.386667rem;
                        height: .4rem;
                        font-size: 11px;
                        background-color: #ff3a1c;
                        text-align: center;
                        color: #fff;
                        border-radius: .08rem;
                        margin-bottom: .133333rem;
                    }
                    .price {
                        span {
                            &:first-child {
                                color: #df1717;
                                font-weight: 700;
                                margin-right: .266667rem;
                            }
                            &:last-child {
                                color: #b5b5b5;
                            }
                        }
                    }
                    }
                }
            }

      }
    }
</style>
