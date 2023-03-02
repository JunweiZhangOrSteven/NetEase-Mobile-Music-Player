<template>

  <div>
    <!-- 上部导航栏 -->
      <TopNav />
      <!-- 轮播图 -->
      <SwpierTop />
      <!-- 功能icon列表 -->
      <IconList />
      <!-- 歌单推荐list -->
      <MusicList />

      <HotSongsList />

      <HotMV />
  </div>

</template>

<script>
// @ is an alias to /src

import TopNav from '@/components/home/TopNav.vue'
import SwpierTop from '@/components/home/SwpierTop.vue'
import IconList from '@/components/home/IconList.vue'
import MusicList from "@/components/home/MusicList.vue";
import HotSongsList from "@/components/home/HotSongsList.vue";
import HotMV from "@/components/home/HotMV.vue";
export default {
  name: 'HomeView',
  components: {
    TopNav,SwpierTop,IconList,MusicList,HotSongsList,HotMV
},
}
</script>
