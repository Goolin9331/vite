<script lang="ts" setup>
import router, { routes } from "@/router";
import { ref } from "vue";
const selectedKey = ref("首页");

selectedKey.value = router.currentRoute.value.name as string;
</script>

<template>
  <div id="topNav">
    <span
      v-for="route in routes"
      :key="route.name"
      :class="route.name == selectedKey ? 'selected' : ''"
    >
      <router-link :to="route.path">{{ route.name }}</router-link>
    </span>
  </div>
  <router-view id="content" v-slot="{ Component, route }">
    <transition name="zoom" mode="out-in">
      <component :is="Component" :key="route.path" />
    </transition>
  </router-view>
</template>

<style lang="less" scoped>
#topNav {
  width: 100%;
  height: 44px;
  background-color: rgb(161, 116, 170);
  font-size: 20px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;

  span {
    padding: 5px 10px;
    display: inline-block;
    height: 100%;
    &.selected {
      background-color: rgb(255, 255, 255);
    }
  }
}
#content {
  margin: 44px 30px;
}
</style>
