<template>
  <div id="app">
    <div id="nav" style="margin-bottom:10px">
      <div style="display:block;">
        <p style="text-align:left;display:inline;position:absolute;">Diease Control and Prevention Analysis</p>
        <p style="text-align:right;padding-right:10px">GroupOne</p>
      </div>
      <div class="lead" style="margin-top:-15px;text-align:center;padding-bottom:5px">
        <router-link to="/">Home</router-link> |
        <router-link to="/diseasecate">Disease-Category Correlation</router-link> |
        <router-link to="/age1">Age Group Analysis - I</router-link> |
        <router-link to="/age2">Age Group Analysis - II</router-link> |
        <router-link to="/geomort">Geo-Mortality Exploration</router-link> |
        <router-link to="/expend">Healthcare Expenditure</router-link> |
        <router-link to="/areawise">Area-wise Clustering</router-link> |
        <router-link to="/teampage">Team Page</router-link>  
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
  color:#2c3e50;
}

#nav {
  padding: 5px;
  color: #d2d1dd;
  background-color: #6b476b;
}

#nav a {
  color: white;
  font-size:14px;
  text-decoration: none;
  padding-right: 0px;
  padding-left: 0px; 
}

#nav a.router-link-exact-active {
  color: #e0797c;
  font-weight: bold;
  font-size: 15px;
}
#nav #websitename{
  text-align:left;
  color:white;
}
#nav span#groupname{
  color:#65788a;
  font-size:15px;
  font-style:italic;
  margin-top: 0px;
  margin-right: 0px; 
}
</style>
