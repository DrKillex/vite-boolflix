import { reactive } from "vue";

export const store = reactive({
    config:{
        urlSearch: "https://api.themoviedb.org/3/search",
        searchMovie: "/movie",
        searchSeries: "/tv",
        api_key: "c3ef55e2302baf7fcda82cfe154ff68a",
        lang: "it-IT",
    },
    search: "",
    moviesResults: [],
    seriesResults: []
})