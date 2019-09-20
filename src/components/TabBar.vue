<template>
  <yd-tabbar fixed=true active-color='#0299fd' class="tabbars">
    <yd-tabbar-item :title="item.title" :link="item.linkTo" v-for="(item,index) in tabbar" :key="index" :active="item.active" >
      <!-- <img slot="icon" style="height: 25px;" src="../assets/icons/statistic.svg" /> -->
      <img slot="icon" :src='item.activeImg' v-if='item.active'>
      <img slot="icon" :src="item.normalImg" v-else>
    </yd-tabbar-item>
    <!-- <yd-tabbar-item title="我的" link="./Echarts.vue">
      <img slot="icon" style="height: 25px;" src="../assets/icons/my.svg" />
    </yd-tabbar-item> -->
  </yd-tabbar>
</template>

<script type="text/babel">
  export default {
    name: 'TabBar',
    data() {
      return {
        tabbar: [
          {
            title: "统计",
            normalImg: '../assets/icons/statistic.png',
            activeImg: '../assets/icons/statisticActive.png',
            linkTo: '../views/List.vue',
            active: true
          },
          {
            title: "我的",
            normalImg: '../assets/icons/mine.png',
            activeImg: '../assets/icons/mineActive.png',
            linkTo: '../views/Echarts.vue',
            active: false
          }
        ]
      }
    },
    watch: {
    //根据路由变化来改变样式
    $route: {
      handler: function(val, oldVal) {
      //得到新的地址和老的地址，得到新的地址时，找到data中的tabbar数据，然后将激活状态设置为true，然后再根据代码中的v-if来显示就行了
        var tabbar = this.tabbar;
        for (var i = 0; i < tabbar.length; i++) {
          if (tabbar[i].linkTo == this.linkTo) {
            tabbar[i].active = true;
          } else {
            tabbar[i].active = false;
          }
        }
        this.tabbar = tabbar;
      },
      // 深度观察监听
      deep: true
    }
  },
  }
</script>

<style>
.tabbars{
  height: 120px !important;
}
img {
  width: 30px !important;
}
span {
  font-size: 25px !important;
}
</style>