<template>
  <div class="iconList">
    
      <div @click="$router.push('/newSongList')" class="iconItem">
        
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-meirituijian"></use>
          </svg>
          <!-- <router-link :to="{path:'/newSongList'}"> -->
            <span>每日推荐</span>
        <!-- </router-link> -->
      </div>
    
    <div class="iconItem">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-sirenFM1"></use>
      </svg>
      <span>私人FM</span>
    </div>
    <div @click="$router.push('/hotArtists')"  class="iconItem">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-geshou-copy"></use>
      </svg>
      <span>歌手</span>
    </div>
    <div @click="$router.push('/enterRankings')" class="iconItem">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-paihangbang"></use>
      </svg>
      <span>排行榜</span>
    </div>
    <div class="iconItem">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-woyaozhibo"></use>
      </svg>
      <span>直播</span>
    </div>
  </div>
</template>
<style lang="less" scoped>
    .iconList{
        width: 100%;
        height: 1.8rem;
        margin-top: .2rem;
        display: flex;
        justify-content: space-around;
        align-items: center;
        .iconItem{
            width: 25%;
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            .icon{
                width: 1rem;
                height: 1rem;
                
            }
        }
    }
</style>