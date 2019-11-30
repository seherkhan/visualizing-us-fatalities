<template>
  <div class="hello">
    <img alt="Cover image" src="../assets/cover.jpg" class="coverimg"/>
    <div class="overlay">
        <p>Your one and only source of US medical data</p>
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
  overflow: hidden;
  width: 100%;
  /*color: white;*/
}

.coverimg {
  width: 100%;
  transform: translate(0%, -10%);
}

.overlay {
  position: absolute;
  top: 20%;
  left: 0%;
  right: 5%;
  transform: translate(0%, 0%);
  text-align: right
}
p {
  color: #ad2a1d;
  font-size:30px;
}
a {
  color: #8D7721;
}
</style>
