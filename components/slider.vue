<template>
    <div class=" w-[100%] px-5 flex flex-col gap-2 justify-center items-center lg:flex-row-reverse">
        <div class=" w-full h-[250px] sm:w-[600px] sm:h-[300px] lg:w-[850px] lg:h-[405px] relative">
            <button @click="" class=" w-[30px] h-[30px] rounded-full absolute bottom-1 left-[43%] text-white bg-violet-500 hover:bg-violet-800">-</button>
            <img class=" z-[1] w-full h-full rounded-xl" :src="sliderbar[index]" alt="">
            <button @click="" class=" w-[30px] h-[30px] rounded-full absolute bottom-1 right-[43%] text-white bg-violet-500 hover:bg-violet-800">+</button>
        </div>
        <div class=" w-[100%] h-[150px] flex justify-center items-center gap-2 lg:w-max lg:h-max lg:flex-col">
            <img class="z-[1] w-1/2 h-full sm:w-[300px] lg:w-[400px] lg:h-[200px] rounded-xl" src="/imgg/main-banner-top.jpg" alt="">
            <img class="z-[1] w-1/2 h-full sm:w-[300px] lg:w-[400px] lg:h-[200px] rounded-xl" src="/imgg/main-bot.gif" alt="">
        </div>
    </div>
</template>


<script setup>

const sliderbar = [
    '/imgg/main-slider-1.jpg',
    '/imgg/main-slider-2.jpg',
    '/imgg/main-slider-3.jpg',
]
let index = ref(0)

setInterval(()=>{
    if(index.value >= sliderbar.length -1){
        index.value = -1
    }
    index.value++
},5000)

</script>