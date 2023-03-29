<script>
import { store } from '../store';
export default {
    name: 'AppMain',
    data() {
        return {
            store
        }
    },
}    
</script>

<template>
    <input type="text" v-model="store.search" @keyup.enter="$emit('submit')">
    <button @click="$emit('submit')">cerca</button>

    <div v-for="movie in store.moviesResults">
        <h1>{{ movie.title }}</h1>
        <h2>{{ movie.original_title }}</h2>
        <h3>{{ movie.original_language }}</h3>
        <h4>{{ movie.vote_average }}</h4>
    </div>
</template>

<style lang="scss" scoped>
div{
    border: 1px solid black;
}
</style>