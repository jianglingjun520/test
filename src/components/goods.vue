
<template>
    <div id='goodsPage'>
        <div class="goods">
            <ul>
                <li v-for="item in goodsList" :key = "item.id" @click="goToProduct">
                    <div class="img">
                        <img v-lazy = item.image alt="">
                    </div>
                    <div class="content">
                        <div class="title">{{item.title}}</div>
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
    #goodsPage {
        
        li {
            list-style: none;
        }
        .goods {
            ul {
                background-color: #F2F2F2;
                width: 100vw;
                display: flex;
                flex-wrap: wrap;
                margin-bottom: 1.066667rem;

                li {
                    // background-color: #fff;
                    width: 50%;
                    // height: 6.666667rem;
                    box-sizing: border-box;
                    font-size: .293333rem;
                    border-radius: .266667rem;
                    margin-bottom: .4rem;

                    &:nth-child(even) {
                        padding-left: .2rem;
                        padding-right: .4rem;
                    }
                    &:nth-child(odd) {
                        padding-left: .4rem;
                        padding-right: .2rem;
                    }

                    .img {
                        position: relative;
                        width: 100%;
                        padding-top: 96.6%;
                    
                        img {
                            width: 100%;
                            height: 100%;
                            position: absolute;
                            left: 0;
                            top: 0;
                            border-radius: .266667rem .266667rem 0 0;
                            vertical-align: top;
                        }

                        img[lazy="loading"] {
                            display: block;
                            position: absolute;
                            left: 50%;
                            top: 50%; 
                            transform: translate(-50%,-50%);
                            width: 1.333333rem !important;
                            height: 1.333333rem !important;
                        }

                       
                    }

                    .content {
                        background-color: #fff;
                        box-sizing: border-box;
                        width: 100%;
                        padding: 0 .213333rem ;
                        border-radius: 0 0 .266667rem .266667rem;
                        .title {
                        width: 3.733333rem;
                        padding: .16rem 0;
                        font-weight: 600;
                        font-size: .32rem;
                        white-space:nowrap;
                        overflow:hidden;
                        text-overflow:ellipsis;
                    }

                    .desc {
                        color: #b5b5b5;
                        font-size: .293333rem;
                        margin-bottom: .133333rem;
                        white-space:nowrap;
                        overflow:hidden;
                        text-overflow:ellipsis;
                    }
                    .sales {
                        box-sizing: border-box;
                        width: 1.386667rem;
                        height: .4rem;
                        line-height: .4rem;
                        font-size: .3rem;
                        background-color: #ff3a1c;
                        text-align: center;
                        color: #fff;
                        border-radius: .08rem;
                        margin-bottom: .133333rem;
                    }
                    .price {
                        padding-bottom: .213333rem;
                        span {
                            &:first-child {
                                color: #df1717;
                                font-weight: 700;
                                font-size: .32rem;
                                margin-right: .266667rem;
                            }
                            &:last-child {
                                color: #b5b5b5;
                                font-size: .266667rem;
                            }
                        }
                    }
                    }
                }
            }

      }
    }
</style>
