<script>
import axios from 'axios';
import { store } from './store';
import AppMain from './components/AppMain.vue';
export default {
  name:'App',
  components: {
    AppMain
  },
  data() {
    return {
      store
    }
  },
  methods: {
    searchMovie(){
      axios.get('https://api.themoviedb.org/3/search/movie?',
      {params: {
        api_key: store.config.api_key,
        query: store.search
      }})
      .then((response) => {
        console.log(response.data.results);
        this.store.moviesResults= response.data.results
      })      
    },
    searchSeries(){
      axios.get('https://api.themoviedb.org/3/search/tv?',
      {params: {
        api_key: store.config.api_key,
        query: store.search
      }})
      .then((response) => {
        console.log(response.data.results);
        this.store.seriesResults= response.data.results
      })      
    },
    search(){
      this.searchMovie(),
      this.searchSeries()
    }
  },
}
</script>

<template>
  <AppMain @submit="this.search()"/>
</template>


<style lang="scss">

</style>
