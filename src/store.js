import { reactive } from "vue";

export const store = reactive({
    config:{
        // searchMovie: "/search/movie",
        api_key: "c3ef55e2302baf7fcda82cfe154ff68a"
    },
    search: "",
    moviesResults: [],
})