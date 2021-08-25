<template>
  <AchievementCreator />
  <AchievementOutput msg="You've got an achievement? Well we've got a generator!" />
</template>

<script setup>
import AchievementCreator from "./components/achievement-editor/AchievementCreator.vue";
import AchievementOutput from "./components/achievement-editor/AchievementOutput.vue";
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
