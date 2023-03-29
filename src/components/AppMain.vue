<script>
import CountryFlag from 'vue-country-flag-next';
import { store } from '../store';
export default {
    name: 'AppMain',
    components: {
        CountryFlag
    },
    data() {
        return {
            store,
            x: "it",
        }
    },
}    
</script>

<template>
    <input type="text" v-model="store.search" @keyup.enter="$emit('submit')">
    <button @click="$emit('submit')">cerca</button>
    <h1>film</h1>   
    <div v-for="movie in store.moviesResults">
        <h1>{{ movie.title }}</h1>
        <h2>{{ movie.original_title }}</h2>
        <h3>{{ movie.original_language }}</h3>
        <h4>{{ movie.vote_average }}</h4>
    </div>
    <h1>serie</h1>
    <div v-for="serie in store.seriesResults">
        <h1>{{ serie.name }}</h1>
        <h2>{{ serie.original_name }}</h2>
        <h3>{{ serie.original_language }}</h3>
        <h4>{{ serie.vote_average }}</h4>
    </div>
</template>

<style lang="scss" scoped>
div{
    border: 1px solid black;
}
</style>