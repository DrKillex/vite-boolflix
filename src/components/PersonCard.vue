<script>
import CountryFlag from 'vue-country-flag-next';
import { store } from '../store';

export default {
    name: 'PersonCard',
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
}    
</script>

<template>
    <article class="mb-4">
        <h2 class="text-center py-2">{{ item.name }}</h2>
        <div class="d-flex">
            <div class="card-img">
                <img src="../assets/img/75c14228828545868fd61f0b7ca2c29d.jpg" alt="no image"
                    v-if="item.profile_path === null" class="img-fluid">
                <img :src="store.config.urlImg + item.profile_path" :alt="item.name" class="img-fluid" v-else>
            </div>
            <div class="info">
                <p>nome originale: {{ item.original_name }}</p>
                <p>ruolo: {{ item.known_for_department }}</p>
                <p v-if="item.known_for.length > 0">conosciuto per: 
                    <ul>
                        <li v-for="info in item.known_for">{{ info.title || info.name }} ({{ info.media_type }})</li>
                    </ul>
                </p>
                <p>popolarità: {{ item.popularity }}</p>
            </div>
        </div>


    </article>
</template>

<style lang="scss" scoped>
    .card-img {
        width: 30%;
    }
    h2 {
        background-color: black;
        color: red;
    }
    .info{
        flex-grow: 1;
        background-color: rgba(150, 14, 14, 0.4);
        padding: 20px;
    }
</style>