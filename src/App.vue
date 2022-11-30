<template>
  <div :class="[store.mode ? 'light' : 'main']">
    <div class="app">
      <div class="app__header">
        <h1 class="app__title">Todo</h1>
        <img src="./assets/images/icon-sun.svg" alt="" @click="changeMode()"
         v-if="store.mode === false">
         <img src="./assets/images/icon-moon.svg" alt="" @click="changeMode()"
         v-else-if="store.mode === true">
        <!-- <p>Info from store : {{store.mode}}</p> -->
      </div>
      <TodoList />
      <Footer />
    </div>
  </div>
</template>

<script>
import TodoList from './components/TodoList.vue';
import Footer from './components/Footer.vue';
import { store } from './store';

export default {
  name: 'App',
  components: {
    TodoList,
    // eslint-disable-next-line vue/no-reserved-component-names
    Footer,
  },
  data() {
    return {
      store,
    };
  },
  methods: {
    changeMode() {
      this.store.mode = !store.mode;
    },
  },
};
</script>

<style scoped>
  .app {
    width: 40%;
    height: auto;
    margin: auto;
  }

  .main {
    background-image: url('./assets/images/bg-desktop-dark.jpg'); /*toggle this*/
    background-size: 100vw 230px;
    background-repeat: no-repeat;
    background-color: hsl(235, 21%, 11%);  /*toggle this*/
    min-height: 100vh;
  }

  .light {
    background-image: url('./assets/images/bg-desktop-light.jpg'); /*toggle this*/
    background-size: 100vw 230px;
    background-repeat: no-repeat;
    background-color: hsl(0, 0%, 98%);  /*toggle this*/
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

  @media screen and (min-width: 501px) and (max-width: 800px) {
    .app {
      width: 70%;
    }
  }

  @media screen and (max-width: 500px) {
    .app {
      width: 95%;
    }
  }

</style>
