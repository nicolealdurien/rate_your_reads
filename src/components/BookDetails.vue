<template>
  <div class = "book">
    <h3>{{ book.title }}</h3>
    <div class="icons">
      <i class="material-icons">delete</i>
      <i class="material-icons">favorite</i>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['book']
  }
</script>