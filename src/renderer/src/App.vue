<script setup lang="ts">
import { Crown } from '@icon-park/vue-next'
import useMouseEvent from '@renderer/composables/useMouseEvent'
import Footer from '@renderer/components/Footer.vue'

const { setIgnoreMouseEvents } = useMouseEvent()
setIgnoreMouseEvents()
</script>

<template>
  <Suspense>
    <RouterView v-slot="{ Component }">
      <div class="bg-white"></div>
      <div class="">
        <div class="flex justify-center w-full mb-2 drag">
          <crown theme="outline" size="35" class="text-yellow-400" />
        </div>
        <component :is="Component" class="flex flex-col justify-center items-center" />
        <Footer />
      </div>
    </RouterView>
  </Suspense>
</template>

<style lang="less"></style>
