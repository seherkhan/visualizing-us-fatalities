<template>
  <div class="hello">
    <img alt="Cover image" src="../assets/cover.jpg" class="coverimg"/>
    <div class="overlay">
        <h1>Your one and only source of US medical data</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  position: relative;
  text-align: center;
  /*color: white;*/
}

.coverimg {
  width: 100%;
}

.overlay {
  position: absolute;
  top: 20%;
  left: 0%;
  right: 5%;
  transform: translate(0%, 0%);
  text-align: right
}
h1 {
  color: #ad2a1d;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #8D7721;
}
</style>
