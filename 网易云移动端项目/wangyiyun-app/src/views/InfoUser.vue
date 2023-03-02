<template>

    <div class="RankTopNav">
    <div class="topleft">
        <router-link :to="{path:'/'}">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-zuojiantou"></use>
            </svg>
        </router-link>
    </div>
        
    </div>
  <div class="infoUserTop">
    
    <img :src="user.data.profile.avatarUrl" alt="" class="profileimg" />
    <div class="name">{{ user.data.profile.nickname }}</div>
  </div>

    <div class="iconMap">
            <div class="iconItem">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-zuijinbofang"></use>
            </svg>
            <span>最近播放</span>
            </div>
            <div class="iconItem">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-xiazai2"></use>
            </svg>
            <span>本地下载</span>
            </div>
            <div class="iconItem">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-yunpan2"></use>
            </svg>
            <span>云盘</span>
             </div>
            
    </div>
    <div class="iconMap2">
        <div class="iconItem">
        <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-haoyou"></use>
        </svg>
        <span>我的好友</span>
            </div>
            <div class="iconItem">
            <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-shoucang"></use>
        </svg>
        <span>收藏和赞</span>
            </div>
            <div class="iconItem">
        <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-mingshiboke"></use>
        </svg>
        <span>我的播客</span>
        </div>
    </div>

    <div class="MyFavoriteSong">
        <img :src="MyFavorite.coverImgUrl" alt="">
        <div class="detail">
            <span class="name">{{MyFavorite.name}}</span>
            <!-- 心动模式 -->
            
            <!-- <span class="count" v-if="Myfavorite.trackCount != null">{{Myfavorite.trackCount}}</span> -->
        </div>
        <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-sirenFM1"></use>
        </svg>
        
    </div>
    <div class="selectList">
        <span class="active">创建歌单</span>
        <span class="selection">收藏歌单</span>
        <span class="selection">歌单助手</span>
    </div>
    <div class="favoritePlayList">
        <!-- 收藏歌单数 -->
        <div class="favoriteListNum">
            收藏歌单:120个
        </div>
        <ul>
            <li v-for="item in MyPlayList">
            <img :src="item.coverImgUrl" alt="">
            <div class="detail">
                <span class="name">{{item.name}}</span>
                <span class="count" v-if="item.trackCount != null">歌曲数：{{item.trackCount}}</span>
            </div>
            
            </li>
        </ul>
    </div>

</template>
<script>
import { getUserFavorite } from "@/request/api/user.js";
import { mapState } from "vuex";
import { reactive, onMounted } from "vue";
export default {
    data(){
        return{
            MyPlayList:[],
            MyFavorite:"",
        }
    },
  computed: {
    ...mapState(["user"]),
  },
  mounted() {
    console.log(this.user);


  },
    beforeMount: async function () {
    let resFav = await getUserFavorite(this.user.data.profile.userId);
    console.log(resFav);
    this.MyPlayList = resFav.data.playlist;
    console.log(this.MyPlayList);
    this.MyFavorite = this.MyPlayList[0];
    console.log(this.MyFavorite);
    console.log(this.MyFavorite.trackCount);
    console.log(this.MyPlayList[0].trackCount);
    this.MyPlayList.shift();
},

  

};
</script>
<style lang="less" scoped>
 .RankTopNav{
        width: 100%;
        height: 1rem;
        background-color: red;
        color: white;
        padding: .2rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .icon{
            fill: white;
        }
        .topContent{
            // width: 65%;
            height: 100%;
            // margin-left: 156px;
            font-weight: 600;
            display: flex;
            justify-content: space-around;
            // align-items: center;
            font-size: .42rem;
            .active{
                border-bottom: 2px solid white;
            }
        }
}
.infoUserTop {
    width: 100%;
    height: 2rem;
    margin-top: .5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  .profileimg {
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
  }
  .name{
      font-weight: 700;
      font-size: .4rem;
  }
}
.iconMap{
    width: 80%;
    margin-left: 10%;
    margin-top: .3rem;
    height: 1.7rem;
    // border: 1px solid black;
    border-radius: .3rem;
    
    display: flex;
    justify-content: space-around;
    .iconItem{
        width: 25%;
        display: flex;
        flex-direction: column;
        align-items: center;
        .icon{
            width: 1rem;
            height: 1rem;
            fill:red;
        }
    }

}
.iconMap2{
    width: 80%;
    margin-left: 10%;
    height: 1.7rem;
    // border: 1px solid black;
    border-radius: .3rem;
    
    display: flex;
    justify-content: space-around;
    .iconItem{
        width: 25%;
        display: flex;
        flex-direction: column;
        align-items: center;
        .icon{
            width: 1rem;
            height: 1rem;
            fill:red;
        }
    }

}
.MyFavoriteSong{
    width: 80%;
    margin-left: 10%;
    margin-top: 5%;
    height: 1.6rem;
    // border: 1px solid black;
    border-radius: .1rem;
    box-shadow: 0 0 .05rem grey;
    display: flex;
    align-items: center;
    img{
        border-radius: .3rem;
        margin-left: .2rem;
        width: 1.2rem;
    }
    .icon{
        margin-left: .6rem;
    }
    .name{
        font-weight: 600;
        margin-left: .2rem;
    }
}
.selectList{
    width: 80%;
    margin-left: 10%;
    display: flex;
    font-size: medium;
    justify-content: space-around;
    align-items: center;
    padding-top: .3rem;
    .active{
        border-bottom: .1rem solid red;
        font-weight: 700;
    }
}
.listActive{
    font-weight: 800;
    border-bottom: .1x solid red;
}
.favoritePlayList{
    width: 80%;
    margin-left: 10%;
    margin-top: 5%;
    height: 6rem;
    // border: 1px solid black;
    border-radius: .1rem;
    box-shadow: 0 0 .05rem grey;
    overflow: scroll;
    ul{
        padding: .2rem;
        
        li{
            display: flex;
            align-items: center;
            margin-top: .05rem;
            img{
                border-radius: .3rem;
                width: 1rem;
            }
            .detail{
                display: flex;
                flex-direction: column;
                
                .name{
                    font-weight: 600;
                    margin-left: .2rem;
                }
                .count{
                    margin-left: .2rem;
                    color: grey;
                }
            }
            
        }
    }
    
}
</style>