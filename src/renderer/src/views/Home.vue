<template>
  <main>
    <div id="flipClock" class="drag"></div>
  </main>
</template>

<script lang="ts" setup>
import FlipClock from '@renderer/composables/FlipClock'
import { onMounted } from 'vue'
import '@renderer/assets/flipClock.scss'

onMounted(() => {
  const instance = new FlipClock({
    el: '#flipClock',
    type: 'clock',
    timing: {
      second: 100
    }
  })

  instance.render()
})
</script>

<style lang="scss"></style>
