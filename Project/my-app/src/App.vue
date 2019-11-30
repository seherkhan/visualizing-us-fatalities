<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color:#2c3e50;
}

#nav {
  padding: 30px;
  color: white;
  background-color: #2c3e50
}

#nav a {
  font-weight: bold;
  color: #DCDDE2;
}

#nav a.router-link-exact-active {
  color: #CC6366;
}
</style>
