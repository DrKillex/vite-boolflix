<script>

import { store } from '../store';
export default {
    name: 'AppHeader',
    emits: ["submit", "easter"],
    data() {
        return {
            store,
        }
    },
}    
</script>

<template>
    <header>
        <div class="easter" @click="$emit('easter')"></div>
        <div class="container h-100">           
            <div class="row justify-content-between align-items-center h-100">
                <div class="col-auto">
                    <div class="logo">
                        BOOLFLIX
                    </div>
                </div>
                <div class="col-auto d-flex">
                    <div class="d-flex align-items-center">
                        <input type="text" v-model="store.search" @keyup.enter="$emit('submit')">

                        <input type="radio" id="Title" name="search-type" value="titolo" v-model="store.searchType">
                        <label for="Title">Titolo</label>
                        <input type="radio" id="peson" name="search-type" value="persona" v-model="store.searchType">
                        <label for="person">Persona</label>
                    </div>
                    <div>
                        <select name="" id="rate order" v-model="store.ordine" @change="$emit('submit')">
                            <option value="noOrder">nessun ordine</option>
                            <option value="higher">dal voto piu alto</option>
                            <option value="lower">dal voto piu basso</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>

    </header>
</template>

<style lang="scss" scoped>
header {
    height: 70px;
    background-color: black;
    color: red;
    position: relative;
        .easter{
            position: absolute;
            height: 20px;
            width: 20px;
        }
    
    input {
        height: 30px;
        margin-left: 10px;
    }

    select {
        height: 30px;
        margin-left: 10px;
    }
}
</style>