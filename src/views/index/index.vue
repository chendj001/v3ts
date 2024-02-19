<template>
  <div>
    <div class="menu">
      <div class="menu-content">
        <div class="menu-cell" v-for="(item, index) in data" :key="index">{{ item }}</div>
      </div>
    </div>
    <div class="menu">
      <div class="menu-content">
        <div class="menu-cell" style="grid-column: 1 /span  2; grid-row: 1 /span 2;background: none;">
          <n-avatar :style="{
            width: '100%',
            height: '100%',
            color: 'yellow',
            background: 'none',
            backgroundSize: '100% 100%',
            backgroundImage: 'url(https://api.iconify.design/logos:prospect.svg)'
          }">
          </n-avatar>
        </div>
        <div class="menu-cell menu-body" style="grid-column: 3 / -1; grid-row: 1 /span 2;">
          <div style="grid-row: 1 /span 2; grid-column: 1/ -1;padding:7px 10px 0px" class="menu-title">抖音<br />记录美好生活
          </div>
          <div class="menu-desc" style="padding-left: 10px;font-size: 12px;">3.8⭐
            娱乐
            视频
            动漫
          </div>
        </div>
        <n-avatar :style="{
          color: 'yellow',
          background: 'none',
          backgroundSize: '100% 100%',
          backgroundImage: 'url(https://api.iconify.design/skill-icons:adonis.svg)'
        }">
        </n-avatar>
        <n-avatar :style="{
          color: 'yellow',
          background: 'none',
          backgroundSize: '100% 100%',
          backgroundImage: 'url(https://api.iconify.design/skill-icons:adonis.svg)'
        }">
        </n-avatar>
        <n-avatar :style="{
          color: 'yellow',
          background: 'none',
          backgroundSize: '100% 100%',
          backgroundImage: 'url(https://p3-pc.douyinpic.com/img/aweme-avatar/tos-cn-avt-0015_a86e56c980b7955312b5702a547a4cf0~c5_300x300.jpeg?from=2956013662)'
        }">
        </n-avatar>
        <n-avatar :style="{
          color: 'yellow',
          background: 'none',
          backgroundSize: '100% 100%',
          backgroundImage: 'url(https://p3-pc.douyinpic.com/img/aweme-avatar/tos-cn-avt-0015_39693928502f941fa5c29c8cb66cf731~c5_300x300.jpeg?from=2956013662)'
        }">
        </n-avatar>
        <n-avatar :style="{
          color: 'yellow',
          background: 'none',
          backgroundSize: '100% 100%',
          backgroundImage: 'url(https://p3-pc.douyinpic.com/img/aweme-avatar/tos-cn-i-0813_80e1f254408b45eab977eb2792d5e6ab~c5_300x300.jpeg?from=2956013662)'
        }">
        </n-avatar>
      </div>
    </div>
    <div class="menu">
      <div class="menu-content">
        <div class="menu-cell" style="grid-column: 1 /span  2; grid-row: 1 /span 2;background: none;">
          <n-avatar :style="{
            width: '100%',
            height: '100%',
            color: 'yellow',
            background: 'none',
            backgroundSize: '100% 100%',
            backgroundImage: 'url(https://api.iconify.design/logos:prospect.svg)'
          }">
          </n-avatar>
        </div>
        <div class="menu-cell menu-body" style="grid-column: 3 / -1; grid-row: 1 /span 2;">
          <div style="grid-row: 1 /span 2; grid-column: 1/ -1;padding:10px 10px 0px" class="menu-title">

            <n-avatar :style="{
              color: 'yellow',
              background: 'none',
              backgroundSize: '100% 100%',
              backgroundImage: 'url(https://api.iconify.design/skill-icons:adonis.svg)'
            }"></n-avatar>
          </div>
          <div class="menu-desc" style="padding-left: 10px;font-size: 12px;">
            抖音 记录美好生活
          </div>
        </div>
        <n-avatar :style="{
          color: 'yellow',
          background: 'none',
          backgroundSize: '100% 100%',
          backgroundImage: 'url(https://api.iconify.design/skill-icons:adonis.svg)'
        }">
        </n-avatar>
        <n-avatar :style="{
          color: 'yellow',
          background: 'none',
          backgroundSize: '100% 100%',
          backgroundImage: 'url(https://api.iconify.design/skill-icons:adonis.svg)'
        }">
        </n-avatar>
        <n-avatar :style="{
          color: 'yellow',
          background: 'none',
          backgroundSize: '100% 100%',
          backgroundImage: 'url(https://p3-pc.douyinpic.com/img/aweme-avatar/tos-cn-avt-0015_a86e56c980b7955312b5702a547a4cf0~c5_300x300.jpeg?from=2956013662)'
        }">
        </n-avatar>
        <n-avatar :style="{
          color: 'yellow',
          background: 'none',
          backgroundSize: '100% 100%',
          backgroundImage: 'url(https://p3-pc.douyinpic.com/img/aweme-avatar/tos-cn-avt-0015_39693928502f941fa5c29c8cb66cf731~c5_300x300.jpeg?from=2956013662)'
        }">
        </n-avatar>
        <n-avatar :style="{
          color: 'yellow',
          background: 'none',
          backgroundSize: '100% 100%',
          backgroundImage: 'url(https://p3-pc.douyinpic.com/img/aweme-avatar/tos-cn-i-0813_80e1f254408b45eab977eb2792d5e6ab~c5_300x300.jpeg?from=2956013662)'
        }">
        </n-avatar>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const data = ref(new Array(21).fill('').map((value, index) => index + 1))
</script>

<style lang="scss" scoped>
.menu {
  display: inline-block;
  vertical-align: top;
  background: rgba(24, 160, 88, 0.16);
  margin-right: 10px;
  $size: 36px;
  $gap: 5px;
  $padding: 10px;

  &-content {
    display: grid;
    width: $size*7+$gap*(7-1)+$padding*2;
    height: $size*3+$gap*(3-1)+$padding*2;
    grid-template-columns: repeat(7, 1fr);
    grid-template-rows: repeat(3, 1fr);
    gap: $gap;
    padding: $padding;
  }

  &-cell {
    color: #fff;
    background: #18a058;
    border-radius: 4px;
    cursor: pointer;
  }

  &-icon {
    display: block;
    width: 100%;
  }

  &-title {
    font-weight: bold;
    font-size: 14px;
    line-height: 20px;
  }

  &-body {
    display: grid;
    grid-template-rows: repeat(3, 1fr);
  }

  &-status {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
  }
}
</style>