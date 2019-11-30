<template>
  <div id="app">
    <div id="nav">
      <div style="padding: 5px;">
        <span id="websitename">Diease Control and<br>
        Prevention Analysis</span>
      </div>
      <div class=text>
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> |
        <router-link to="/cost">Cost</router-link>
        <span id="groupname">GroupOne</span>
      </div>
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
  padding: 10px;
  height: 50px;
  color: white;
  background-color: #2c3e50
}
.text {
  padding-top: 5px
}

#nav a {
  font-weight: bold;
  color: #DCDDE2;
}

#nav a.router-link-exact-active {
  color: #e0797c;
}
#nav span#websitename{
  float:left;
  color:white;
  font-size:20px;
  font-style:bold;
}
#nav span#groupname{
  float:right;
  color:#65788a;
  font-size:20px;
  font-style:italic;
}
</style>
