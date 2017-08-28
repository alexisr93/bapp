<template>
  <div id="app">
    <div class="ui tabular menu">
      <a class="item active">
        <router-link to="/dashboardteacher">Dashboard</router-link>
      </a>
      <a class="item">
        <router-link to="/newincident">New Incident</router-link>
      </a>
      <div class="right menu"><a class="ui item">
        <router-link to="/logout">Logout</router-link>
      </a>
    </div>
  </div>

  <router-view></router-view>
</div>
</template>

<script>
export default {
  name: 'app'

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 80px;
  max-width: 600px;
  display:block;
  margin-left:auto;
  margin-right: auto;

}

</style>
