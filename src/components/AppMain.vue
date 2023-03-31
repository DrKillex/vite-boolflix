<script>
import CardMain from './CardMain.vue';
import { store } from '../store';
export default {
    name: 'AppMain',

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
    <main>
        <div class="container pt-5">
            <h1 class="text-center mb-5 p-3" v-if="store.moviesResults.length > 0">film</h1>
            <div class="row">
                <div v-for="movie in store.moviesResults" class="col-3">
                    <CardMain :item="movie" />
                </div>
            </div>
            <h1 class="text-center my-5 p-3" v-if="store.seriesResults.length > 0">serie</h1>
            <div class="row">
                <div v-for="serie in store.seriesResults" class="col-3">
                    <CardMain :item="serie" />
                </div>
            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped>
main {
    background-color: #434343;
    min-height: calc(100vh - 70px);
    h1 {
        background-color: black;
        color: red;
    }
}
</style>