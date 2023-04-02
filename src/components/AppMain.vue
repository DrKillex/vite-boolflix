<script>
import CardMain from './CardMain.vue';
import PersonCard from './PersonCard.vue';
import { store } from '../store';
export default {
    name: 'AppMain',

    components: {
        CardMain,
        PersonCard
    },
    data() {
        return {
            store,
        }
    },
    computed: {
        displayOrderMovies(){
            switch (this.store.ordine) {
                case "noOrder":
                    return this.store.moviesResults;
                case "lower":
                    return this.store.moviesResults.sort((firstItem, secondItem) => firstItem.vote_average - secondItem.vote_average);
                case "higher":
                    return this.store.moviesResults.sort((firstItem, secondItem) => firstItem.vote_average - secondItem.vote_average).reverse();
        }
    },
    displayOrderSeries(){
            switch (this.store.ordine) {
                case "noOrder":
                    return this.store.seriesResults;
                case "lower":
                    return this.store.seriesResults.sort((firstItem, secondItem) => firstItem.vote_average - secondItem.vote_average);
                case "higher":
                    return this.store.seriesResults.sort((firstItem, secondItem) => firstItem.vote_average - secondItem.vote_average).reverse();
        }
}
}
}   
</script>

<template>
    <main>
        <div class="container pt-5">
            <h1 class="text-center mb-5 p-3" v-if="store.moviesResults.length > 0">film</h1>
            <div class="row">
                <div v-for="movie in displayOrderMovies" class="col-3">
                    <CardMain :item="movie" />
                </div>
            </div>
            <h1 class="text-center my-5 p-3" v-if="store.seriesResults.length > 0">serie</h1>
            <div class="row">
                <div v-for="serie in displayOrderSeries" class="col-3">
                    <CardMain :item="serie" />
                </div>
            </div>
            <h1 class="text-center my-5 p-3" v-if="store.personResults.length > 0">persona cercata</h1>
            <div class="row flex-column">
                <div v-for="persona in store.personResults" class="col-12">
                    <PersonCard :item="persona"/>
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