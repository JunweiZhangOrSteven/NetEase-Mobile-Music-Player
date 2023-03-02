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
            歌手榜
        </div>
        
    </div>

    <div class="recommendBar">

        <div class="title">热门歌手</div>
        <ul class="recommends">
            
            <li class="recommend" v-for="(item,index) in state.ArtistList" :key="index">
                <router-link :to="{path:'/artistDetail',query:{id:item.id}}">
                    <img :src="item.img1v1Url"/>
                    <span class="name">{{item.name}}</span>
                </router-link>
            </li>
            
            
        </ul>

    </div>


</template>
<script>
import { onMounted, reactive } from "vue";
import { getTopList,getTopArtist } from "@/request/api/home.js";
import { getItemList } from "@/request/api/item.js";
export default{
    setup() {
    const state = reactive({
        ArtistList:[],
        RecommendList:[],
        TopListCover:[],
        SongList:[],
    });
    onMounted(async () => {
      
        //   获取歌单详情页
        let res = await getTopArtist();
        console.log(res);
        state.ArtistList = res.data.artists;
        console.log(state.ArtistList)

        // for(var i = 0;i < 3;i++){
        //     state.RecommendList[i] = state.TopList.shift();
        // }
        // console.log(state.RecommendList)
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

.recommendBar{
    padding: .2rem;
    width: 100%;
    .title{
        padding: .05rem;
        border-left: .1rem solid red;
        font-size: larger;
        font-weight: 600;
    }
    .recommends{
        width: 100%;
        // height: 10;
        
        display: block;
        .recommend{
            float:left; 
            list-style:none;
            display:block;
            white-space: nowrap;
            margin: .25rem;
            position: relative;
            .name{
                position: absolute;
                left: 0;
                bottom: 0;
                background-color: black;
                opacity: 70%;
                width: 1.8rem;
                border-bottom-left-radius: .2rem;
                border-bottom-right-radius: .2rem;
                text-align: center;
                color: white;
            }
            img{
                width:1.8rem;
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
</style>