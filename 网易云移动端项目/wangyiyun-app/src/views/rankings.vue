<template>
    <div class="RankTopNav">
        <div class="topleft">
        
            <span @click="$router.go(-1)">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-zuojiantou"></use>
                </svg>
            </span>
        </div>

        <div class="topContent">
            排行榜
        </div>
        
    </div>
    <div class="styleList">

        <div class="active">官方</div>
        <div class="style">精选</div>
        <div class="style">曲风</div>
        <div class="style">全球</div>
        <div class="style">语种</div>

    </div>

    <div class="recommendBar">

        <div class="title">榜单推荐</div>
        <div class="recommends">
            <div class="recommend" v-for="(item,index) in state.RecommendList" :key="index">
                <img :src="item.coverImgUrl" >
            </div>
        </div>


    </div>

    <div class="MainContent">
        <div class="title">官方版</div>
        <ul class="TopList">
            <li v-for="(item,index) in state.TopList" :key="index" class="rank">
                <img :src="item.coverImgUrl" alt="">
                <span class="name">{{item.name}}</span>
                <div class="TopSong">
                    {{item.description}}
                </div>
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-jiantouyou"></use>
                </svg>
            </li>
        </ul>

    </div>

</template>
<script>
import { onMounted, reactive } from "vue";
import { getTopList } from "@/request/api/home.js";
import { getItemList } from "@/request/api/item.js";
export default{
    setup() {
    const state = reactive({
        TopList:[],
        RecommendList:[],
        TopListCover:[],
        SongList:[],
    });
    onMounted(async () => {
      
        //   获取歌单详情页
        let res = await getTopList();
        console.log(res);
        state.TopList = res.data.list;
        console.log(state.TopList)

        for(var i = 0;i < 3;i++){
            state.RecommendList[i] = state.TopList.shift();
        }
        console.log(state.RecommendList)
        // for(var i = 0;i < state.TopList.length;i++){
        //     let id = state.TopList[i].id;
        //     let result = await getItemList({ id, limit: 3, offset: 0 });
        //     state.SongList[i] = result.data.songs;
        // }
        //  console.log(state.SongList);




    
    });
    return { state };
  },
}


</script>
<style lang="less" scoped>

.MainContent{
    padding: .2rem;
    .title{
        padding: .05rem;
        border-left: .1rem solid red;
        font-size: larger;
        font-weight: 600;
    }
    .TopList{
        .rank{
        width: 100%;
        height: 2.5rem;
        margin-top: .5rem;
        border-radius: .2rem;
        padding: .2rem;
        //background-color: #fae1e5;
        box-shadow:rgba(0,0,0,.3) 0px 0px .05rem;
        position: relative;
        .icon{
            position: absolute;
            right: .3rem;
        }
        .name{
            font-size: .38rem;
            font-weight: 600;
        }
        img{
            position: absolute;
            bottom: .1rem;
            width:1.5rem;
            border-radius: .2rem;
        }
        .TopSong{
            width: 3rem;
            height: 1.5rem;
            margin-left: 1.6rem;
            position: absolute;
            bottom: .1rem;
            color: black;
            font-size: small;
            // margin-bottom: .1rem;
            overflow: hidden;
            text-overflow: ellipsis;
        }
    }
    }
    
}
.styleList{
    width: 100%;
    height: .6rem;
    color: black;
    padding: .2rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .active{
        border-bottom: .05rem solid red;
        font-weight: 700;
        
    }
    

}
.recommendBar{
    padding: .2rem;
    .title{
        padding: .05rem;
        border-left: .1rem solid red;
        font-size: larger;
        font-weight: 600;
    }
    .recommends{
        width: 100%;
        height: 3rem;
        
        display: flex;
        justify-content: space-between;
        align-items: center;
        .recommend{
            img{
                width:2.1rem;
                border-radius: .2rem;
            }
        }
    }
}
 .RankTopNav{
        width: 100%;
        height: 1rem;
        background-color: red;
        color: white;
        padding: .2rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
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
</style>