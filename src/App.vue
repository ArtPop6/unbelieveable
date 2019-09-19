<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">SHOP</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/> -->
    <List />
    <TabBar />

  </div>
</template>

<script>
import axios from 'axios'
import TabBar from './components/TabBar'
import List from './views/List'

export default {
  components: {
    // HelloWorld,
    TabBar,
    List
  },
  data() {
    return {

    }
  },
  methods: {
    getData: function() {
      var url = 'http://yapi.ampmfit.net/mock/40/reportForm/name';
      axios.get(url).then(function(res) {
        console.log(res.data, res.data[18]);
      })
    }
  },
  created: function() {
    this.getData()
  }
}
</script>
<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
