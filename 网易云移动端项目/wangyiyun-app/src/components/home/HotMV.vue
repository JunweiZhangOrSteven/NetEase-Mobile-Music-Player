<template>

    <div class="HotMVContent">
    <div class="HotMVtitle">热门MV</div>
    
        <van-swipe :loop="false" :width="355" class="my-swpie" :show-indicators="false">
            <van-swipe-item v-for="item,index in state.HotMVList"  @click="showMv(item)" :key="index">
                <a :href="MvUrl">
                <div class="MVBox">
                    <img :src="item.cover" alt="" />
                    <span class="name">{{ item.name }}</span>  
                </div>    
                </a>
            </van-swipe-item>
        </van-swipe>
    
    </div>

    <van-popup
      v-model:show="MvDetailShow"
      position="right"
      :style="{ height: '100%', width: '100%' }"
    >
    <MvDetail
        :MvList="state.HotMVList[MvListIndex]"
        :isbtnShow="isbtnShow"
    />
    </van-popup>

</template>


<script>
import { reactive, onMounted } from "vue";
import { getHotMV } from "@/request/api/home.js";
import { mapMutations, mapState } from "vuex";
import MvDetail from "../item/MvDetail.vue";
import { getMvVideoUrl } from "@/request/api/mv.js";
export default {
    setup(){
      const state = reactive({
        HotMVList: [],
        MvUrl:''
      });
      
      onMounted(async () => {
        let res = await getHotMV();
        console.log(res);
       
        state.HotMVList = res.data.data;
    });
    
    return {state,mapState};
  }, 
  mounted(){
    // console.log(this.playList);
    this.MvList = this.state.HotMVList;
    console.log(this.MvList)
  },
  computed: {
    ...mapState(["isbtnShow","MvList","MvListIndex","MvDetailShow"]),
  },
  methods: {
    ...mapMutations([
      "updateMvDetailShow",
    ]),
    showMv:async function(item){
        let res2 = await getMvVideoUrl(item.id);
        console.log(res2);
        this.state.MvUrl = res2.data.data.url;
        console.log(this.state.MvUrl);
        location.href=this.state.MvUrl;
        
    }
  },
  components:{
      MvDetail,
  }

    

}
</script>

<style lang="less">
.HotMVContent{
  width: 100%;
  height: 3rem;
  padding: 0.2rem; 
    .HotMVtitle {
      font-size: 0.4rem;
      font-weight: 900;
      padding: .05rem;
      border-left: .1rem solid red;
    }

    .my-swpie{
        color: black;
        height: 6rem;
        .van-swipe-item{
            padding: 0.4rem;
                img {
                    width: 100%;
                    height: 177px; 
                    border-radius: 0.2rem;
                }
            }
            
    }

    }



</style>