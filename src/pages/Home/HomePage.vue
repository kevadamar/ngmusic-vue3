<script setup>
import HomeLayout from '@/components/BaseLayout/HomeLayout.vue'
import { ref } from '@vue/reactivity'
import { useRouter } from 'vue-router'
const router = useRouter()
const inputSearch = ref('')

const routeToMusicPage = () => {
    router.push({ path: '/music', query: { search: inputSearch.value } })
}

</script>

<template>
    <HomeLayout>
        <img alt="Vue logo" src="@/assets/logos.png" class="w-[8vw] m-auto" />
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
            type="text"
            placeholder="Artist / Album / Title"
            v-model="inputSearch"
        />
        <button
            class="
                py-5
                bg-white/20
                hover:text-black hover:bg-white
                text-white
                mb-8
                rounded-[50px]
                w-[80%]
                mx-auto
            "
            @click="routeToMusicPage()"
        >
            Search
        </button>
    </HomeLayout>
</template>