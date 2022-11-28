<template>
  <div class="footer">
    <small>Drag and drop to reorder list</small>
  </div>
</template>

<script>
  export default {
    name: "Footer"
  }

</script>

<style scoped>
  .footer {
    display: grid;
    place-items: center;
    margin-top: 2rem;
    color: hsl(234, 39%, 85%);
  }

  small {
    text-align: center;
  }
</style>