<script setup lang="ts">
import { useConfigStore } from '@renderer/store/useConfigStore'
import Navbar from '@renderer/components/Navbar.vue'
const { config } = useConfigStore()
</script>

<template>
  <main
    class="drag w-full px-2 text-center mt-2 rounded-md text-white flex justify-between items-center"
    :style="{ backgroundColor: config.footer.bgColor, color: config.footer.color }"
  >
    <div class="w-4/5 flex overflow-hidden">
      <div class="text-sm run text-nowrap">
        {{ config.footer.content }}
      </div>
    </div>
    <div class="w-1/6 flex">
      <Navbar />
    </div>
  </main>
</template>

<style lang="scss" scoped>
main {
  user-select: none;
}
.run {
  animation: identifier 10s infinite both;
}
@keyframes identifier {
  from {
    transform: translateX(0);
  }
  50% {
    transform: translateX(calc(230px - 100%));
  }
  to {
    transform: translateX(0);
  }
}
</style>
