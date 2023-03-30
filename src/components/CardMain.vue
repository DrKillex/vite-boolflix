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
    data(){
        return {
            urlImg: "https://image.tmdb.org/t/p/w342"
        }
    },
    computed: {
        getLang() {
            switch (this.item.original_language){
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
    <article>
        <div class="img">
            <img :src="urlImg + item.poster_path" alt="">
        </div>
        <p>{{ item.title }}</p>
        <p>{{ item.original_title }}</p>
        <div class="flag">
            <country-flag :country='getLang' size='normal'/>
        </div>
        <div class="score">
            <font-awesome-icon icon="fa-solid fa-star" v-for="i in getScore"/>
            <font-awesome-icon icon="fa-regular fa-star" v-for="i in 5 - getScore"/>
        </div>        
    </article>
</template>

<style lang="scss" scoped>

</style>