<template>
  <AchievementCreator />
  <AchievementOutput msg="Welcome to Your Vue.js App" />
</template>

<script>
import AchievementCreator from "./components/achievement-editor/AchievementCreator.vue";
import AchievementOutput from "./components/achievement-editor/AchievementOutput.vue";

export default {
  name: "App",
  components: {
    AchievementCreator,
    AchievementOutput,
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,500;0,700;1,400&display=swap");

@font-face {
  font-family: "Croogla 4F";
  src: local("croogla"),
   url(./fonts/croogla/Croogla4F.ttf) format("truetype");
}

#app {
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
