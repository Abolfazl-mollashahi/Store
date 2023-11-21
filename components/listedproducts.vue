<template>
  <div class=" w-full h-max p-3 my-5">

    <div class=" w-full font-bold h-[50px] flex items-center justify-between">
      <button @click=" navigateTo('/serchproducts')" :class="dark ? 'text-green-600 border-green-600 hover:bg-green-600' : ' text-sky-600 border-sky-600 hover:bg-sky-600 ' "
      class=" w-max p-2 rounded-lg transition-all border-2 hover:text-white">مشاهده همه</button>
      <h2 :class="dark ? 'text-green-600 border-green-600' : ' text-sky-600 border-sky-600' "
      class=" w-max p-2 -translate-x-3 border-r-4 rounded-full select-none rotate-6"><span class=" block -rotate-6">{{ title }}</span></h2>
    </div>

    <div dir="rtl" class=" w-full h-max py-2 flex overflow-scroll overflow-y-hidden ">
      <div class=" flex justify-center items-center gap-2">
        <div class="" v-for="item in 10" :key="item">
          <Product />
        </div>ّ
      </div>
    </div>

  </div>
</template>

<script setup>
import useDarkMode from "~/composables/darkmode";
let { isdarkmode: dark } = useDarkMode();

let prop = defineProps(['title'])


</script>
