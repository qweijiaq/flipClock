<script setup lang="ts">
import { useConfigStore } from '@renderer/store/useConfigStore'
const { config } = useConfigStore()
</script>

<template>
  <main class="p-3 text-white bg-white bg-opacity-60 rounded-lg select-none no-drag">
    <div class="bg-[#34495e] rounded-lg w-full p-2 h-[350px] overflow-y-auto">
      <h2 class="first">源码地址</h2>
      <div class="card">
        <div class="body flex justify-center">
          <span class="block">https://github.com/qweijiaq/flipClock</span>
        </div>
      </div>

      <h2>时钟颜色</h2>
      <div class="card">
        <div class="body flex justify-around">
          <div class="block text-center">
            背景颜色
            <el-color-picker v-model="config.clock.bgColor" />
          </div>
          <div class="block text-center">
            文字颜色
            <el-color-picker v-model="config.clock.color" />
          </div>
        </div>
      </div>

      <h2>倒计时时间</h2>
      <div class="card">
        <div class="body flex flex-col gap-2 items-center">
          <div class="block text-center">
            小时
            <el-input-number v-model="config.clock.timing.hour" :min="0" :max="10" size="small" />
          </div>
          <div class="block text-center">
            分钟
            <el-input-number
              v-model="config.clock.timing.minute"
              :min="0"
              :max="100"
              size="small"
            />
          </div>
          <div class="block text-center">
            秒钟
            <el-input-number
              v-model="config.clock.timing.second"
              :min="0"
              :max="100"
              size="small"
            />
          </div>
        </div>
      </div>

      <h2>底部信息</h2>
      <div class="card last">
        <div class="body">
          <div class="block text-center w-full">
            文字内容
            <el-input v-model="config.footer.content" />
          </div>
        </div>

        <div class="body flex justify-around">
          <div class="block text-center">
            背景颜色
            <el-color-picker v-model="config.footer.bgColor" />
          </div>
          <div class="block text-center">
            文字颜色
            <el-color-picker v-model="config.footer.color" />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss">
h2 {
  @apply text-sm opacity-80 font-bold  mb-0 text-center pb-3;
}
.first {
  @apply mt-5;
}
.last {
  @apply mb-0;
}
.card {
  @apply w-full p-2 rounded-lg mb-10 bg-[#2c3e50];
  .body {
    @apply flex gap-2  p-3 rounded-md;
    .block {
      @apply flex flex-col text-xs gap-2;
      -webkit-app-region: no-drag;
    }
  }
}
.el-popper {
  -webkit-app-region: no-drag;
}
</style>
