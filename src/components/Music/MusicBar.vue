<script setup>
import { useStore } from 'vuex'

const store = useStore()
</script>
<template>
    <div class="absolute top-[0] w-full">
        <div class="outer">
            <div class="inner"></div>
            <div
                class="
                    flex
                    justify-between
                    h-[11vh]
                    w-full
                    absolute
                    py-[15px]
                    px-[40px]
                "
            >
                <div class="space-y-2 hover:cursor-pointer">
                    <div class="w-8 h-1 bg-white rounded-lg"></div>
                    <div class="w-8 h-1 bg-white rounded-lg"></div>
                    <div class="w-8 h-1 bg-white rounded-lg"></div>
                </div>
                <h1 class="text-3xl text-white tracking-wider">ngmusic</h1>
                <span
                    @click="store.commit('showingPopup', true)"
                    class="hover:cursor-pointer"
                >
                    <font-awesome-icon icon="fas fa-search" inverse size="xl" />
                </span>
            </div>
        </div>
    </div>
</template>
<style scoped>
.outer {
    width: 100%;
    height: 6vh;
    position: relative;
    background: linear-gradient(153deg, #712bda, #a45deb 100%);
}

.inner {
    background: linear-gradient(153deg, #712bda, #a45deb 100%);
    position: absolute;
    height: 9vh;
    width: 100%;
    top: 2px;
    border-bottom-right-radius: 40%;
    border-bottom-left-radius: 40%;
}
</style>