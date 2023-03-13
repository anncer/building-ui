
<template>
  <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /> -->
  <header style="padding:20px;">
    <v-stage :config="configKonva" background-color="#fff">
      <v-layer>
        <!-- <v-rect :config="config"></v-rect> -->
        <template v-for="it in data.data" :key="it.name">
          <v-rect v-if="it.type === 'rect'" :config="it.pos" ></v-rect>
          <template v-for="line in it.lines" :key="line.points">
            <v-line :points="line.points" :closed="false" stroke='red'></v-line>
          </template>
        </template>
        <!-- <component /> -->
      </v-layer>
    </v-stage>
    <!-- <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div> -->
  </header>

  <!-- <RouterView /> -->
</template>
<script setup lang="ts">
import getRowData from './data/row.ts'
import {getCss} from '@/utils/dom'
// import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
const data = getRowData()
console.log(data)
// const config = {
//   width: 100,
//   height: 100,
//   fill: 'red',
//   stroke: 'black',
//   strokeWidth: 1,
//   x: 300,
//   y: 300
//   // pos: {
//   //   x: 0,
//   //   y: 50
//   // }
// }
const body = document.body
const width = Number(getCss(body, 'width').split('px')[0]) - 40
const height = Number(getCss(body, 'height').split('px')[0]) - 40
const configKonva = {
  width,
  height,
  fill: "#fff"
}

// const configCircle = {
//   x: 100,
//   y: 100,
//   radius: 70,
//   fill: "#fff",
//   stroke: "black",
//   strokeWidth: 1
// }
</script>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
