<template>
  <main>
    <!-- heading -->
    <header>
      <img src="./assets/book.png" alt="pinia pineapple logo"/>
      <!-- image from freepik.com  -->
      <h1>Rate Your Reads</h1>
    </header>

    <!-- book list-->
    <div class="book-list">
      <div v-for="book in bookStore.books">
        <BookDetails :book="book"/>
      </div>
    </div>

  </main>
</template>

<script>
  import BookDetails from './components/BookDetails.vue'
  // @ts-ignore
  import { useBookStore } from './stores/BookStore'

  export default {
    components: { BookDetails },
    setup() {
      const bookStore = useBookStore()

      return  { bookStore }
    }
    
  }
</script>