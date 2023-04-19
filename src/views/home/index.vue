<template>
  <div class="about">
    <h1 class="content">home</h1>
    <a-input-search
      v-model:value="musicName"
      placeholder="请输入歌名"
      enter-button
      style="width: auto"
      @search="confirm"
    />
    <p>{{ appStore.count }}</p>
    <Modal v-model:visible="visible" title="Basic Modal" @ok="handleOk">
      <p>一些内容</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Modal>
    <div class="btnGroup">
      <button @click="increase">增加</button>
      <button @click="info">message</button>
      <button @click="showDialog">对话框</button>
      <img :src="imgUrl" />
      <router-link to="/login">登录</router-link>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useAppStore } from "@/store/modules/app";
import { message, Modal } from "ant-design-vue";
import * as crypto from "crypto-js";
import { h, ref } from "vue";
// const imageUrl =
// "api/media2/uploads-images/default/other/2022-04-13/4b367b0ffd856918a8dc337c7d5b8e86.bnc?ext=.jpg&_v=20220617";

// https://www.jianshu.com/p/033d2a309d18
const imageUrl = "http://localhost:9999/man.webp";
const appStore = useAppStore();
const imgUrl = ref("");
const musicName = ref("");
const visible = ref(false);
const info = () => {
  let e = new XMLHttpRequest();
  e.open("GET", imageUrl, true),
    (e.responseType = "arraybuffer"),
    e.send(),
    (e.onreadystatechange = function () {
      if (4 == e.readyState)
        if (200 == e.status) {
          const str = decryptBase64(e.response);
          imgUrl.value = "data:image/webp;base64,".concat(str);
          // console.log(str);
        }
    });
};
const showDialog = () => {
  visible.value = !visible.value;
};
const handleOk = () => {
  console.log(99);
  visible.value = !visible.value;
};

const arraybufferToBase64 = (t: any) => {
  return new Promise(function (resole) {
    var blob = new Blob([t]),
      fileReader = new FileReader();

    (fileReader.onload = function (t) {
      var result = t?.target?.result,
        r = (result as string).substring((result as string).indexOf(",") + 1);
      resole(r);
    }),
      fileReader.readAsDataURL(blob);
  });
};
const decryptBase64 = (t: any) => {
  let e = crypto.enc.Utf8.parse("my2ecret782ecret"),
    l = crypto.lib.WordArray.create(t),
    d,
    f = crypto.AES.decrypt({ ciphertext: l } as crypto.lib.CipherParams, e, {
      iv: e,
      padding: crypto.pad.Pkcs7,
    });
  console.log(l.toString(crypto.enc.Base64));
  return f.toString(crypto.enc.Base64);
};

const confirm = () => {
  Modal.success({
    title: () => "This is a success message",
    content: () =>
      h("div", {}, [
        h("p", "some messages...some messages..."),
        h("p", "some messages...some messages..."),
      ]),
  });
};

const increase = () => {
  if (appStore.getCount > 10) {
    message.info("hello");
    return;
  } else {
    appStore.setCount(appStore.count + 1);
  }
};
</script>
<style scoped lang="less">
.content {
  color: red;
}
.btnGroup {
  button {
    margin: 10px;
  }
}
</style>
