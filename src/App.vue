<template>
  <div id="app">
    <div class="container">
      <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/favorite">收藏</router-link>
      </div>
      <router-view/>
    </div>
  </div>
</template>
