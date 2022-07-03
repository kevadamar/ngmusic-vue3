<script setup>
const props = defineProps({
    data: Object,
})
</script>

<template>
    <div class="flex justify-center m-8">
        <div
            class="
                flex flex-col
                md:flex-row md:max-w-xl
                rounded-xl
                bg-white
                shadow-lg
                h-[25vh]
                w-full
                p-3
            "
        >
            <div class="w-2/5 h-full">
                <img
                    class="w-[15vw] h-full rounded-xl object-cover"
                    style="max-width: 20vw"
                    :src="data?.artworkUrl100"
                    :alt="`${data?.artistName} - ${data?.artistName}`"
                />
            </div>

            <div class="ml-2 py-4 flex flex-col justify-between text-left">
                <div>
                    <h5 class="text-gray-900 text-medium mb-2">
                        {{ data?.artistName }}
                    </h5>
                    <p class="text-black font-bold text-xl">
                        {{ data?.trackCensoredName }}
                    </p>
                </div>
                <div
                    class="mt-6"
                    style="display: flex;"
                >
                    <button
                        class="
                            bg-green-500
                            w-[50px]
                            rounded-[20px]
                            text-white
                            p-1
                        "
                    >
                        Pop
                    </button>
                    <p class="ml-20 text-[#f5b014] font-bold text-right">
                        $ {{ data?.trackPrice }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>