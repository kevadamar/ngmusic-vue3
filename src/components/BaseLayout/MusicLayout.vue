<script setup>
import PopupSearch from '@/components/PopupSearch.vue'
import { useStore } from 'vuex'

const store = useStore()
</script>
<template>
    <div class="w-100 bg-gray-300 h-[100%] p-0 m-0">
        <div
            class="
                sm:w-100
                md:w-[45vw]
                xl:w-[35vw]
                h-[100vh]
                m-auto
                text-center
                flex flex-col
                relative
            "
        >
            <div v-show="store.state.utilityStore.showPopup">
                <PopupSearch />
            </div>
            <slot></slot>
        </div>
    </div>
</template>
