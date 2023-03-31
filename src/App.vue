<script>
import axios from 'axios';
import { store } from './store';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
export default {
  name:'App',
  components: {
    AppHeader,
    AppMain
  },
  data() {
    return {
      store,
      typeSearch: ""
    }
  },
  methods: {
    searchMethod(url, type){
      axios.get( url + type ,
      {params: {
        api_key: this.store.config.api_key,
        language: this.store.config.lang,
        query: this.store.search       
      }})
      .then((response) => {
        console.log(type);
        console.log(response.data.results);
        if (type === '/movie') {
          this.store.moviesResults = response.data.results
        } else {
          this.store.seriesResults = response.data.results
        }
      })      
    },
    // searchMovie(){
    //   axios.get('https://api.themoviedb.org/3/search/movie',
    //   {params: {
    //     api_key: store.config.api_key,
    //     language: store.config.lang,
    //     query: store.search
        
    //   }})
    //   .then((response) => {
    //     console.log(response.data.results);
    //     this.store.moviesResults= response.data.results
    //   })      
    // },
    // searchSeries(){
    //   axios.get('https://api.themoviedb.org/3/search/tv',
    //   {params: {
    //     api_key: store.config.api_key,
    //     query: store.search
    //   }})
    //   .then((response) => {
    //     console.log(response.data.results);
    //     this.store.seriesResults= response.data.results.map(element => {
    //       element.original_title = element.original_name
    //       element.title = element.name
    //       return element
    //     })
    //   })      
    // },
    search(){
      this.searchMethod(this.store.config.urlSearch, this.store.config.searchMovie)
      this.searchMethod(this.store.config.urlSearch, this.store.config.searchSeries)
      // this.searchMovie(),
      // this.searchSeries()
    }
  },
}
</script>

<template>
  <AppHeader @submit="this.search()"/>
  <AppMain />
</template>


<style lang="scss">

</style>
