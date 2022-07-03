<script setup>
import { ref } from '@vue/reactivity'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

const store = useStore()
const router = useRouter()
const inputSearch = ref('')

const searchMusic = async () => {
    store.commit('showingPopup', false)
    store.dispatch('fetchMusicBySearch', inputSearch.value)
    router.push({ path: '/music', query: { search: inputSearch.value } })
    inputSearch.value = ''
}
</script>

<template>
    <div
        class="
            bg-black/70
            absolute
            w-full
            h-full
            flex flex-col
            justify-center
            z-[999]
        "
    >
        <div
            class="absolute top-[2vh] right-[2vw] hover:cursor-pointer"
            @click="store.commit('showingPopup', false)"
        >
            <font-awesome-icon icon="fa-solid fa-xmark" inverse size="xl" />
        </div>
        <h1 class="text-3xl mb-10 text-white">Search</h1>

        <input
            class="
                py-5
                mb-7
                bg-white
                rounded-[50px]
                text-[#64748b]
                w-[80%]
                mx-auto
                placeholder:uppercase
                placeholder:font-weight-bold
                placeholder:text-center
                text-center
            "
            v-model="inputSearch"
            type="text"
            placeholder="Artist / Album / Title"
        />

        <button
            class="
                py-5
                bg-white/20
                hover:bg-base-style
                text-white
                mb-8
                rounded-[50px]
                w-[80%]
                mx-auto
            "
            @click="searchMusic()"
        >
            Search
        </button>
    </div>
</template>
