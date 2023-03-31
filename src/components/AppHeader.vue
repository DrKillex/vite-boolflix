<script>

import { store } from '../store';
export default {
    name: 'AppHeader',
    emits: ["submit"],
    data() {
        return {
            store,
        }
    },
}    
</script>

<template>
    <header>
        <div class="container h-100">
            <div class="row justify-content-between align-items-center h-100">
                <div class="col-auto">
                    <div class="logo">
                        BOOLFLIX
                    </div>
                </div>
                <div class="col-auto">
                    <div>
                        <input type="text" v-model="store.search" @keyup.enter="$emit('submit')">
                    </div>
                </div>
            </div>
        </div>

    </header>
</template>

<style lang="scss" scoped>
    header{
        height: 70px;
        background-color: black;
        color: red;
    }
</style>