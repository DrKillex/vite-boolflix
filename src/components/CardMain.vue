<script>
import CountryFlag from 'vue-country-flag-next';

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
            urlImg: "https://image.tmdb.org/t/p/w342"
        }
    },
    computed: {
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
        getScore() {
            return Math.ceil(this.item.vote_average / 2)
        }
    }
}    
</script>

<template>
    <article class="mb-4">
        <div class="img">
            <img :src="urlImg + item.poster_path" :alt="item.title" class="img-fluid">
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
    overflow-y: scroll;
    text-overflow: ellipsis;
    min-height: 300px;
    

    .img {
        position: relative;
        z-index: 10;

        img:hover {
            opacity: 0;
        }
    }
    .info {
        position: absolute;
        top: 0;
        left: 0;
        color: white;
        margin: 5px;
    }

}
article:hover img {
    opacity: 0;
}

article::-webkit-scrollbar,#boxContacts .userList::-webkit-scrollbar {    width: 0;    height: 0;}
</style>