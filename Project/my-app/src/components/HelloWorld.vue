<template>
  <div class="hello"> 
    <img alt="Cover image" src="https://blog.matcharesident.com/wp-content/uploads/2017/07/iStock-480203908.jpg" class="coverimg"/>
    <div class="overlay">
        <p class="display-4">Diease Control and Prevention Analysis</p>
        
        <p class="lead">
          Some of the leading causes of death in the United States include heart disease, cancer, alcoholism and injuries caused by accidents. Many of these are preventable, and being able to visualize the numbers could help us develop improved strategies to avoid and alleviate their occurrence.
        </p>

        <a class="btn btn-outline-light" href="https://www.cdc.gov/" role="button">Data Source</a>
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
  background-color:black;
  color: #ffffff;
  height:680px
}

.coverimg {
  width: 130%;
  height: 130%;
  transform: translate(-10%, 0%);
  opacity: 0.4;
}

.overlay {
  position: absolute;
  top: 20%;
  left: 25%;
  right: 0%;
  text-align: center;
  width: 50%
  
}

</style>
