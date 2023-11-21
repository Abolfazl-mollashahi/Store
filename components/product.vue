<template>
  <div :class="dark ? 'text-white bg-[#1b1b4d84] border-[3px] border-[#1b1b4d84] hover:border-green-600' : ' bg-gray-300 border-[3px] hover:border-green-600'"
    class="w-[160px] h-[260px] md:w-[200px] md:h-[300px] text-center px-2 text-[13px] md:text-[14px] font-bold overflow-hidden rounded-lg  transition-all ">
    <NuxtLink class=" w-full h-full flex flex-col gap-2 justify-start items-center" to="/">
      <img class=" w-[140px] h-[140px] md:w-[190px] md:h-[190px]" src="/imgg/p2.png" alt="">
      <span>کفش اسپورت مدل 232323</span>
      <p class=" line-through text-red-600">1,900,000</p>
      <div class=" flex gap-2 items-center justify-between">
        <span class=" px-1 rounded-full bg-red-600 text-white">20%</span>
        <div class=" flex gap-1 text-[#258e2c]">
          <span>1,600,000</span>
          <span>تومان</span>
        </div>
      </div>
    </NuxtLink>
  </div>
</template>

<script setup>
import useDarkMode from "~/composables/darkmode";
let { isdarkmode: dark } = useDarkMode();

</script>

<style></style>