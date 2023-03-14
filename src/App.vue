
<template>
  <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /> -->
  <header class='header-top'>
    <div class="header-title">数据中心一层分布图</div>
    <v-stage :config="configKonva" background-color="#fff">
      <v-layer>
        <!-- <v-rect :config="config"></v-rect> -->
        <template v-for="it in data.data" :key="it.name">
          <v-rect @click="handleClick($event, it)" v-if="it.type === 'rect'" :closed="false" :config="setRectPos(it.pos)" ></v-rect>
          <v-text @click="handleClick($event, it)" v-if=" it.text &&  it.text.x" :config="{text:it.label, x: it.text.x, y: it.text.y, fontSize: it.text.fontSize || 12}"></v-text>
          <template v-for="line in it.lines" :key="line.points">
            <v-line :config="{points:line.points, strokeWidth: 1, closed:line.closed ,stroke:'#000'}" ></v-line>
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
const data = getRowData()
const body = document.body
const width = Number(getCss(body, 'width').split('px')[0]) - 80
const height = Number(getCss(body, 'height').split('px')[0]) - 40
const configKonva = {
  width,
  height,
  fill: "#fff"
}

const setRectPos = (pos) => {
  pos.x = pos.x + 1
  pos.y = pos.y + 1
  pos.width = pos.width - 2
  pos.height = pos.height - 2
  return pos
}

const handleClick = (e:any, row: any ) => {
  alert(`您点击的是房间${row.room}房间名称是${row.label}`)
}

</script>

<style scoped>
.header-top {
  max-height: 100vh;
  padding:20px;
  background-color:#fff;
  padding-top: 60px;
  position: relative;
}
.header-title {
  position: absolute;
  top:0;
  width: calc(100% - 40px);
  font-size: 18px;
  font-weight: bold;
  height: 40px;
  line-height: 40px;
  text-align:center; 
  color: #000
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
