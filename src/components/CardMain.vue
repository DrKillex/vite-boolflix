<script>
import CountryFlag from 'vue-country-flag-next';
import { store } from '../store';

export default {
    name: 'CardMain',
    components: {
        CountryFlag
    },
    props: {
        item: Object
    },
    data() {
        return {
            store,
        }
    },
    computed: {
        // gestione casistiche lingue non coerenti con countryflag
        getLang() {
            switch (this.item.original_language) {
                case "en":
                    return "gb";
                case "ja":
                    return "jp"
                default:
                    return this.item.original_language;
            }
        },
        // calcolo punteggio
        getScore() {
            return Math.ceil(this.item.vote_average / 2)
        }
    }
}    
</script>

<template>
    <article class="mb-4">
        <div class="img">
            <img src="../assets/img/75c14228828545868fd61f0b7ca2c29d.jpg" alt="no image" v-if="item.poster_path===null" class="img-fluid">
            <img :src="store.config.urlImg + item.poster_path" :alt="item.title" class="img-fluid" v-else>
        </div>
        <div class="info">
            <p class="my-1">titolo: {{ item.title }}</p>
            <p class="my-1">titolo originale: {{ item.original_title }}</p>
            <div class="flag">
                <country-flag :country='getLang' size='normal' />
            </div>
            <div class="score d-flex my-1">
                <span>voto:</span>
                <div class="ps-2">
                    <font-awesome-icon icon="fa-solid fa-star" v-for="i in getScore" />
                    <font-awesome-icon icon="fa-regular fa-star" v-for="i in 5 - getScore" />
                </div>               
            </div>
            <p class="overview">{{ item.overview }}</p>
        </div>
    </article>
</template>

<style lang="scss" scoped>
article {
    position: relative;
    background-color: black;
    font-size: 14px;
    min-height: 300px;
    

    .overview{
        overflow-y: scroll;
        max-height: 200px;
        z-index: 5;
    }
    

    .img {
        position: relative;
        z-index: 10;

    }
    .info {
        position: absolute;
        top: 0;
        left: 0;
        color: white;
        margin: 5px;
    }

}
article:hover .img {
    z-index: 0;
}
article:hover img {
    z-index: 0;
    opacity: 0;
}
.overview::-webkit-scrollbar {    width: 6px;    height: 6px;}
.overview::-webkit-scrollbar-track {    border-radius: 10px;    background: rgba(172, 12, 12, 0);}
.overview::-webkit-scrollbar-thumb {    border-radius: 10px;    background: rgba(225, 9, 9, 0.2);}
.overview::-webkit-scrollbar-thumb:hover {    background: rgba(150, 14, 14, 0.4);}
.overview::-webkit-scrollbar-thumb:active {    background: rgba(210, 8, 8, 0.5);}
</style>