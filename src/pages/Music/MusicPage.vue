<script setup>
import MusicBar from '@/components/Music/MusicBar.vue'
import MusicCard from '@/components/Music/MusicCard.vue'
import MusicLayout from '@/components/BaseLayout/MusicLayout.vue'
import PopupSearch from '@/components/PopupSearch.vue'
import { reactive } from '@vue/reactivity'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'

const store = useStore()
const route = useRoute()
const fetchData = async () => {
    store.dispatch('fetchMusicBySearch', route.query.search)
}

fetchData()
</script>

<template>
    <MusicLayout>
        <div class="h-full bg-[#f8fafc] relative">
            <MusicBar />
            <button
                type="button"
                class="mt-20 text-black"
                disabled
                v-if="store.state.musicStore.isLoading"
            >
                Processing...
            </button>
            <div v-else>
                <div class="mt-16">
                    <h1 class="text-xl text-gray-500">
                        Search result for :
                        <span class="ml-2 font-bold text-[#7b34dd]">
                            {{ route.query.search }}
                        </span>
                    </h1>
                </div>
                <div class="mt-14">
                    <MusicCard
                        v-for="(item, index) in store.state.musicStore
                            ?.resultData?.data?.results"
                        :key="index"
                        :data="item"
                    />
                </div>
            </div>
        </div>
    </MusicLayout>
</template>