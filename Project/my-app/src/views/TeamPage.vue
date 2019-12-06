<template>
  <div class="teampage">
    <div class="container" style="margin:25px">
      <br/>
      <h1 class="display-4" style="font-size:25px;font-weight:bold;text-align:center">TEAM</h1>
      <div style="text-align:center;margin-top:25px">
      <div class="row">
        <div class="col-lg-6">
            <img width="150px" height="150px" src="shraddha.jpg" style="border-radius:10%;margin-top:10px;">
            <p><a href="https://www.linkedin.com/in/shraddha-k27/">Shraddha Kulkarni</a><br>shraddhak@usc.edu<br>(Team Member)</p>
          </div>
          <div class="col-lg-6">
            <img width="150px" height="150px" src="seher.jpg" style="border-radius:10%;margin-top:10px;">
            <p><a href="https://www.linkedin.com/in/khanseher/">Seher Khan</a><br >seherkha@usc.edu<br>(Team Member)</p>
          </div>
      </div>
      <br/><br/>
        <h1 class="display-4" style="font-size:25px;font-weight:bold;text-align:center">Demo Video</h1>
        <br/>
        <iframe allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" frameborder="0" height="315" src="https://www.youtube.com/embed/9LY0rr_nhG0" width="560"/>
        <br/><br/><br/><br/>
        <h1 class="display-4" style="font-size:25px;font-weight:bold;text-align:center">Conference Paper</h1>
        <br/>
        <object data="paper.pdf" height="600px" type="application/pdf" width="70%"/>
        <p>The paper can be found <a href="paper.pdf">here</a>.</p>
        <br/><br/>
        <h1 class="display-4" style="font-size:25px;font-weight:bold;text-align:center">Source Code</h1>
        <br/>
        <a class="btn btn-outline-dark" href="https://github.com/INF554/a5-group1/" role="button">GitHub Repo</a>
    </div>
    <br/><br/><br/>
</div>

  </div>
</template>

<script>
export default {
  name: 'teampage',
  mounted () {

  }
}
</script>
