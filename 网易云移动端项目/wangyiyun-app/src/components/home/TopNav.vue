<template>
  <div class="topNav">
    <div class="topleft">
      <!-- <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-liebiao2"></use>
      </svg> -->
      <span @click="$router.push('/login')">我的</span>
    </div>

    <div class="topContent">
    
    </div>
    <div class="topRight">
      <svg class="icon" aria-hidden="true" @click="$router.push('/search')">
        <use xlink:href="#icon-sousuo"></use>
      </svg>
    </div>
  </div>
  
</template>
<style lang="less" scoped>
    .topNav{
        width: 100%;
        height: 1rem;
        background-color: red;
        color: white;
        padding: .2rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .topContent{
            width: 65%;
            height: 100%;
            display: flex;
            justify-content: space-around;
            // align-items: center;
            font-size: .36rem;
            .active{
                border-bottom: 2px solid white;
            }
        }
        .icon{
          fill: white;
        }
    }
</style>