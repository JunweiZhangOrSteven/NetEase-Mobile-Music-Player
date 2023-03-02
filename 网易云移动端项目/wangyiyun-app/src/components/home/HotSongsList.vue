<template>

 
      

    <div class="HotSongContent">
    <div class="HotSongstitle">新歌速递</div>
    <div class="itemList2">      
     
      <div class="item" v-for="(item, i) in state.HotMusicList" :key="i">
        <div class="itemLeft" @click="updateIndex(item)">
        
          <span class="leftSpan">{{ i + 1 }}</span>
          <img :src="item.picUrl" alt="" />
          <div>
            <p>{{ item.name }}</p>
            <span v-for="(item1, index) in item.ar" :key="index">
            {{item1.name}}
            </span>
          </div>
        </div>
        <div class="itemRight">
          <svg class="icon bofang" aria-hidden="true" v-if='item.mv !=0'>
            <use xlink:href="#icon-24gl-playCircle"></use>
          </svg>
          <svg class="icon liebiao" aria-hidden="true">
            <use xlink:href="#icon-liebiao2"></use>
          </svg>
        </div>
      </div>
    </div>


    </div>



     


</template>


<script>
import { reactive, onMounted } from "vue";
import { getHotSongs } from "@/request/api/home.js";
import { mapMutations } from 'vuex'
export default {
    setup(){
      const state = reactive({
        HotMusicList: [],
      });
      onMounted(async () => {
        let res = await getHotSongs();
        console.log(res);
        state.HotMusicList = res.data.result;
    });
    return {state};
  }, 
  methods: {
      playMusic:function(i){
        this.updatePlayList(this.itemList);
        this.updatePlayListIndex(i)
      },
      updateIndex:function(item){
        item.al=item.song.album
        item.al.picUrl=item.song.album.picUrl
        this.$store.commit("pushPlayList",item)
        this.$store.commit("updatePlayListIndex",this.$store.state.playList.length-1)
      },
      ...mapMutations(['updatePlayList','updatePlayListIndex'])
  },

    

}
</script>

<style lang="less">
.HotSongContent{
  width: 100%;
  height: 6rem;
  padding: 0.2rem; 
  // box-shadow: .02rem .02rem .03rem grey; 
  
  .HotSongstitle {
      font-size: 0.4rem;
      font-weight: 900;
      padding: .05rem;
      border-left: .1rem solid red;
    }
  .itemList2 {
    width: 100%;
    height: 5rem;
    overflow: scroll;
   
   
    .item {
      width: 100%;
      height: 1.4rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .itemLeft {
        width: 85%;
        height: 100%;
        display: flex;
        align-items: center;
        img{
          margin-left: .2rem;
          width: .6rem;
        }
        .leftSpan {
          display: inline-block;
          width: 0.2rem;
          font-weight: 800;
          text-align: center;
        }
        div {
          p {
            width: 4.54rem;
            height: .4rem;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            font-weight: 700;
          }
          span{
            font-weight: 400;
            font-size: .24rem;
            color: #999;
          }
          margin-left: 0.3rem;
        }
      }
      .itemRight{
        width: 20%;
        height: 100%;
        display: flex;
        // justify-content: space-between;
        align-items: center;
        position: relative;
        .icon{
          fill: #999;
        }
         .bofang{
            position: absolute;
            left: 0;
          }
         .liebiao{
            position: absolute;
            right: 0;
          }
      }
    }
  }
}


</style>