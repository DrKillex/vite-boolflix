<script>
import CardMain from './CardMain.vue';
import { store } from '../store';
export default {
    name: 'AppMain',
    emits: ["submit"],
    components: {
        CardMain
    },
    data() {
        return {
            store,
        }
    },
}    
</script>

<template>
    <input type="text" v-model="store.search" @keyup.enter="$emit('submit')">
    <button @click="$emit('submit')">cerca</button>
    <h1>film</h1>   
    <div v-for="movie in store.moviesResults">
        <CardMain :item="movie"/>
    </div>
    <h1>serie</h1>
    <div v-for="serie in store.seriesResults">
        <CardMain :item="serie"/>
    </div>
</template>

<style lang="scss" scoped>
div{
    border: 1px solid black;
}
</style>