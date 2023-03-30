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
        <h1>{{ item.title }}</h1>
        <h2>{{ item.original_title }}</h2>
        <h3>{{ item.original_language }}</h3>
        <country-flag :country='getLang' size='normal'/>
        <h4>{{ getScore }}</h4>
    </article>
</template>

<style lang="scss" scoped>
div{
    border: 1px solid black;
}
</style>