<template>
  <div id="app">
    <div class="container">
      <div id="nav">
        <router-link to="/"><font-awesome-icon :icon="['fas', 'home']" /></router-link> |
        <router-link to="/favorite"><font-awesome-icon :icon="['fas', 'heart']" /></router-link>
      </div>
      <router-view/>
    </div>
  </div>
</template>
