<template>
  <div class="container">
    <div class="flex">
      <div class="flex-v">
        <Klokke />
        <Ver />
        <iframe src="https://meny.cissky.net/maned.php" style="height: 50vh; border-radius: 20px;" frameborder="0"></iframe>
      </div>
      <div class="flex-v">
        <iframe src="https://www.youtube.com/embed/36YnV9STBqc" frameborder="0"></iframe>
      </div>
      <div class="flex-v">
        <Nyheter />

      </div>
    </div>
  </div>
</template>

<script>

import Klokke from './components/Klokke.vue';
import Nyheter from './components/Nyheter.vue';
import Ver from './components/Ver.vue';
// import Messa from './components/Messa.vue';

export default {
    components: {
        Klokke,
        Nyheter,
        Ver
        // Messa
    }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;400&display=swap');
* {
  font-family: 'Roboto', sans-serif;
  box-sizing: border-box;
}
html,
body{
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  background-image: url("../public/bg.jpg"); /* https://i.prcdn.co/img?regionKey=wMAe6KyLfn3OgKlQF8tWzg%3D%3D*/
  background-size: cover;
}
h1 {
  font-weight: 100;
}
.container {
  backdrop-filter: blur(5px);
  height: 100vh;
  padding: 20px;
}
.flex {
  display: flex;
  justify-content: space-between;
}
.flex-v{
  display: flex;
  flex-direction: column;
}
</style>