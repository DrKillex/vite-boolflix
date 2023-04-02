<script>
import axios from 'axios';
import { store } from './store';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
export default {
  name: 'App',
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
    searchMethod(url, type) {
      axios.get(url + type,
        {
          params: {
            api_key: this.store.config.api_key,
            language: this.store.config.lang,
            query: this.store.search
          }
        })
        .then((response) => {
          if (type === '/movie') {
            this.store.moviesResults = response.data.results
          } else if (type === '/tv') {
            this.store.seriesResults = response.data.results.map(element => {
              element.original_title = element.original_name
              element.title = element.name
              delete element.original_name;
              delete element.name
              return element
            })
          } else if (type === '/person') {
            this.store.personResults = response.data.results
          }
        })
    },
    search() {
      if (this.store.searchType === "titolo") {
        this.store.personResults=[]
        this.searchMethod(this.store.config.urlSearch, this.store.config.searchMovie)
        this.searchMethod(this.store.config.urlSearch, this.store.config.searchSeries)
      } else if (this.store.searchType === "persona") {
        this.store.moviesResults=[]
        this.store.seriesResults=[]
        this.searchMethod(this.store.config.urlSearch, this.store.config.searchPerson)
      }
    },
    easter(){
      axios.get("https://flynn.boolean.careers/exercises/api/random/word")
      .then((response) => {
        console.log(response.data.response)
        this.store.search=response.data.response
        this.search()
      })
    }
   
  },
}
</script>

<template>
  <AppHeader @submit="this.search()" @easter="this.easter()"/>
  <AppMain />
</template>


<style lang="scss"></style>
