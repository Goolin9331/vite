<template>
  <div class="about">
    <h1 class="content">这是配置页</h1>
    <a-input-search
      v-model:value="musicName"
      placeholder="请输入歌名"
      enter-button
      style="width: auto"
      @search="confirm"
    />
    <p>{{ appStore.count }}</p>
    <Button type="primary" @click="increase">增加</Button>
  </div>
</template>
<script setup lang="ts">
import { searchSongs } from "@/api/song";
import { useAppStore } from "@/store/modules/app";
import { Button } from "ant-design-vue";
import { ref } from "vue";
const appStore = useAppStore();
const musicName = ref("");
const confirm = () => {
  searchSongs(musicName.value).then((response) => {
    console.log(response);
  });
};

const increase = () => {
  appStore.setCount(appStore.count + 1);
};
</script>
<style scoped lang="less">
.content {
  color: red;
}
</style>
