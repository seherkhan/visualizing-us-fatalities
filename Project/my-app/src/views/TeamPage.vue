<template>
  <div class="teampage">
    <div style="margin-left:25px;margin-right:25px">
      <h1 class="display-4">Team Page</h1>
      <div style="text-align:center;margin-top:25px">
        <h3>Demo Video</h3>
        <iframe allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" frameborder="0" height="315" src="https://www.youtube.com/watch?v=_8V5o2UHG0E" width="560"/>
        <h3 style="margin-top:25px">Conference paper</h3>
        <object data="public/paper.pdf" height="600px" type="application/pdf" width="70%"/>
        <p>The paper can be found <a href="public/paper.pdf">here</a>.</p>
        <h3 style="margin-top:25px">Team</h3>
        <hr style="margin-left:120px; margin-right:120px">
        <div class="row" style="text-align:center">
          <div class="col-lg-4">
            <img height="100px" src="../assets/shraddha.jpg" style="border-radius:50%;margin-top:10px;" width="100px">
            <p>Shraddha Kulkarni<br>shraddhak@usc.edu<br>(Team Member)</p>
          </div>
          <div class="col-lg-4">
            <img height="100px" src="../assets/seher.jpg" style="border-radius:50%;margin-top:10px;" width="100px">
            <p>Seher Khan<br >seherkha@usc.edu<br>(Team Member)</p>
          </div>
          <div class="col-lg-4"><img height="100px" src="../assets/prof.jpg" style="border-radius:50%;margin-top:10px;" width="100px">
              <p>Dr. Luciano Nocera<br >nocera@usc.edu<br>(Advisor)</p>
          </div>
      </div>
    </div>
</div>

  </div>
</template>

<script>
export default {
  name: 'chart',
  mounted () {

  }
}
</script>