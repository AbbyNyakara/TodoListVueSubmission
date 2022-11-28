<template>
  <div class="main">
    <div class="app">
      <div class="app__header">
        <h1 class="app__title">Todo</h1>
        <!-- <img src="./assets/images/ICON-SUN.SVG" alt=""> -->
      </div>
      <TodoList />
      <Footer />
    </div>
  </div>
  
</template>

<script>
  import TodoList from './components/TodoList.vue'
  import Footer from './components/Footer.vue'

  export default {
    name: 'App',
    components: {
      TodoList,
      Footer
    }
  }
</script>

<style scoped>
  .app {
    width: 40%;
    height: auto;
    margin: auto;
  }

  .main {
    background-image: url('./assets/images/bg-desktop-dark.jpg');
    background-size: 100vw 230px;
    background-repeat: no-repeat;
    background-color: hsl(235, 21%, 11%);
    min-height: 100vh;
  }

  .app__header {
    padding-top: 2rem;
    display: flex;
    justify-content: space-between;
  }

  .app__title {
    text-transform: uppercase;
    color: #fff;
    letter-spacing: 10px;
    font-size: 2.3rem;
  }

  .app__header img {
    object-fit: contain;
    cursor: pointer;
  }
</style>