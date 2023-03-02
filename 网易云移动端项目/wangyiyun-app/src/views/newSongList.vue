<template>
  <div class="itemMusicTop">
    <img alt="" class="bgimg" />
    <div class="itemLeft">
      <svg class="icon" aria-hidden="true" @click="$router.go(-1)">
        <use xlink:href="#icon-zuojiantou"></use>
      </svg>
    </div>
    <div class="itemRight">  
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-liebiao2"></use>
      </svg>
    </div>

    <svg class="calendar" aria-hidden="true">
        <use xlink:href="#icon-rili"></use>
    </svg>

  </div>


<div class="manipulateBar">
    <svg class="AllBoFang" aria-hidden="true">
        <use xlink:href="#icon-bofang"></use>
    </svg>
    <span>播放全部</span>


</div>

  <!-- 歌单歌曲页 -->
  <div class="itemMusicList">

    <div class="itemList">
      <div class="item" v-for="(item, i) in state.songs" :key="i">
        <div class="itemLeft" @click="playMusic(i)">
            <img class="leftSpan" :src="item.picUrl"/>
          <!-- <span class="leftSpan">{{ i + 1 }}</span> -->
          <div>
            <p>{{ item.name }}</p>
            <span v-for="(item1, index) in item.song.album.artists" :key="index">
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
import { getRecommendSong,getHotSongs } from "@/request/api/home.js";
import { reactive, onMounted } from "vue";
import { mapMutations } from 'vuex'
export default {
  setup() {
    const state = reactive({
        coverUrl:'',
        songs:[]
    });

    onMounted(async () => {
        let res = await getHotSongs();
        console.log(res);
        state.songs = res.data.result;
        console.log(state.songs);
        state.coverUrl = state.songs[2].picUrl;

        // console.log(this.state.songs);
        console.log(state.coverUrl);
    });
    return { state };
  },
    methods: {
        playMusic:function(i){
            this.updatePlayList(this.itemList);
            this.updatePlayListIndex(i)
        },
        ...mapMutations(['updatePlayList','updatePlayListIndex'])
    },
};
</script>
<style lang="less" scoped>
.itemMusicTop {
  width: 100%;
  height: 3rem;
  display: flex;
  justify-content: space-between;
//   align-items: center;
  // padding: .2rem;
  position: relative;
  .calendar{
      width: 1.5rem;
      height: 1.5rem;
      margin-top: 1.2rem;
      position: absolute;
      left: .5rem;
      fill: white;
  }

  .itemLeft
  {
    width: 25%;
    height: 100%;
    padding: .2rem;
    display: flex;
    justify-content: space-between;
    // align-items: center;
    margin: 0 0.2rem;
    span {
        
        font-size: 0.4rem;
        color: #fff;
    }
    .icon {
      fill: #fff; //填充颜色
    }
  }
  .itemRight {
    // width: 25%;
    height: 100%;
    padding: .2rem;
      .icon {
      fill: #fff; //填充颜色
    }
  }
  .bgimg {
    width: 100%;
    height: 5rem;
    position: absolute;
    z-index: -1;
    background-color: red;
    filter: blur(30px);
  }
}
  .manipulateBar{
      width:100%;
      height: 1rem;
      background-color: white;
      align-items: center;
      position: relative;

    //   text-align: center;
      .AllBoFang{
          width: .6rem;
          height: .6rem;
          fill: red;
          margin: .1rem;
      }
      span{
        display: inline-block;
        color: red;  
        position: absolute;
        top:.2rem;
      }
  }
.itemTopContent {
  width: 100%;
  height: 3rem;
  padding: 0.2rem;
  margin-top: 0.4rem;
  display: flex;
  justify-content: space-between;
  .contentLeft {
    width: 36%;
    height: 2.6rem;
    position: relative;

    img {
      width: 2.6rem;
      height: 2.6rem;
      border-radius: 0.2rem;
      position: absolute;
      z-index: -1;
    }
    .palyCount {
      position: absolute;
      right: 0.1rem;
      margin-top: 0.1rem;
      .icon {
        width: 0.26rem;
        height: 0.26rem;
        margin-top: -0.02rem;
        vertical-align: middle;
      }
      span {
        font-size: 0.26rem;
        color: #fff;
      }
    }
  }
  .contentRight {
    width: 60%;
    height: 2.6rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .rightP_one {
      font-size: 0.3rem;
      font-weight: 900;
      color: #fff;
      font-family: "微软雅黑";
    }
    .right_img {
      width: 100%;
      height: 0.6rem;
      line-height: 0.6rem;
      color: #ccc;
      img {
        width: 0.6rem;
        height: 0.6rem;
        border-radius: 50%;
        vertical-align: middle;
      }
      span {
        margin-left: 0.1rem;
      }
      .icon {
        width: 0.26rem;
        height: 0.26rem;
        margin-top: -0.08rem;
        vertical-align: middle;
      }
    }
    .rightP_two {
      width: 100%;
      height: 0.6rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      span {
        display: inline-block;
        width: 95%;
        height: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        font-size: 0.24rem;
        color: #ccc;
      }
      .icon {
        width: 0.24rem;
        height: 0.24rem;
      }
    }
  }
}
// .itemTopFooter{
//   width: 100%;
//   height: 1.4rem;
//   display: flex;
//   justify-content: space-around;
//   margin-top: .2rem;
//   .footerItem{
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     color: #fff;
//     .icon{
//       fill: #fff;
//     }
//     span{
//       margin-top: .1rem;
//     }
//   }

// }
.itemMusicList {
  width: 100%;
  height: 10rem;
  background-color: #fff;
  padding: 0 0.2rem;
//   margin-top: 0.2rem;
//   border-top-left-radius: 0.4rem;
//   border-top-right-radius: 0.4rem;
  .itemListTop {
    width: 100%;
    height: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .listLeft {
      width: 3rem;
      height: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .icon {
        stroke: #333333;
        stroke-width: 20;
      }
      span {
        font-weight: 700;
        span {
          font-weight: 400;
          font-size: 0.24rem;
          color: #999;
        }
      }
    }
    .listRight {
      display: flex;
      align-items: center;
      background-color: red;
      padding: 0.2rem;
      border-radius: 0.4rem;
      color: #fff;
      .icon {
        width: 0.3rem;
        height: 0.3rem;
        fill: #fff;
        margin-right: 0.1rem;
        stroke: #fff;
        stroke-width: 50;
      }
    }
  }
  .itemList {
    width: 100%;
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
        .leftSpan {
          display: inline-block;
          width: 0.6rem;
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
            width: .4rem;
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