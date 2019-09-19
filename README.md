# reporter

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">SHOP</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/> -->
    <TabBar />
  </div>
</template>

<script>
import axios from 'axios'
import TabBar from './components/TabBart'
export default {
  components: {
    // HelloWorld,
    TabBar
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