<template>
  <div class="container">
    <div class="menu">
      <div class="menu-content">
        <MenuIcon icon="https://api.iconify.design/logos:prospect.svg" :style="{ gridArea: '1/1/span 2/span 2' }">
        </MenuIcon>
        <div class="menu-cell menu-body" style="grid-column: 3 / -1; grid-row: 1 /span 2;">
          <div style="grid-row: 1 /span 2; grid-column: 1/ -1;padding:7px 10px 0px" class="menu-title">抖音<br />记录美好生活
          </div>
          <div class="menu-desc" style="padding-left: 10px;font-size: 12px;">3.8⭐
            娱乐
            视频
            动漫
          </div>
        </div>
        <n-avatar draggable :style="{
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
        <n-avatar draggable="true" :style="{
          color: 'yellow',
          background: 'none',
          backgroundSize: '100% 100%',
          backgroundImage: 'url(https://p3-pc.douyinpic.com/img/aweme-avatar/tos-cn-i-0813_80e1f254408b45eab977eb2792d5e6ab~c5_300x300.jpeg?from=2956013662)'
        }">
        </n-avatar>
        <div draggable="true" class="menu-cell" style="grid-row: 3 / span 1; grid-column: 6 / span 2;display: flex;
  align-items: center;
  justify-content: center;">
          {{ time }}</div>
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
        <n-avatar draggable :style="{
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
            backgroundImage: 'url(https://p3-pc.douyinpic.com/img/aweme-avatar/tos-cn-avt-0015_a86e56c980b7955312b5702a547a4cf0~c5_300x300.jpeg?from=2956013662)'
          }">
          </n-avatar>
        </div>
        <div class="menu-cell menu-body" style="grid-column: 3 / -1; grid-row: 1 /span 2;">
          <div style="grid-row: 1 /span 2; grid-column: 1/ -1;padding:10px 10px 0px" class="menu-title menu-title2">
            <n-avatar :style="{
              color: 'yellow',
              background: 'none',
              backgroundSize: '100% 100%',
              backgroundImage: 'url(https://p95-bj-sign.douyinpic.com/obj/tos-cn-i-dy/cbd944c249c042f6b609fbe4b4c4fbde?x-expires=1708419600&x-signature=9FF9gcpMLeCaa2rGdCPyw0YQROY%3D&from=4080365293)'
            }">
            </n-avatar>
            <n-avatar :style="{
              color: 'yellow',
              background: 'none',
              backgroundSize: '100% 100%',
              backgroundImage: 'url(https://api.iconify.design/skill-icons:github-dark.svg?color=%23f31212)'
            }">
            </n-avatar>
            <n-avatar :style="{
              color: 'yellow',
              background: 'none',
              backgroundSize: '100% 100%',
              backgroundImage: 'url(https://api.iconify.design/skill-icons:vite-dark.svg?color=%23f31212)'
            }">
            </n-avatar>
          </div>
          <div class="menu-desc" style="padding-left: 10px;font-size: 12px;">
            虾仁不眨眼！《穿越大秦》
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
        <n-avatar draggable :style="{
          color: 'yellow',
          background: 'none',
          backgroundSize: '100% 100%',
          backgroundImage: 'url(https://p3-pc.douyinpic.com/img/aweme-avatar/tos-cn-i-0813_80e1f254408b45eab977eb2792d5e6ab~c5_300x300.jpeg?from=2956013662)'
        }">
        </n-avatar>
      </div>
    </div>
    <Menu></Menu>
    <div class="orz">
      <div class="orz-item" v-for="(item, index) in data" :key="index" :style="{ gridArea: item.gridArea }"
        v-bind="item.attr">{{ index }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts" name="Index">
import { NAvatar } from 'naive-ui';
import { users } from './user';
const data = [{
  attr: { draggable: false },
  gridArea: '1/1/span 2/span 2'
},
{
  attr: { draggable: false },
  gridArea: '1/3/span 2/-1'
},
{
  attr: { draggable: true },
  gridArea: '3/1'
},
{
  attr: { draggable: true },
  gridArea: '3/2'
},
{
  attr: { draggable: true },
  gridArea: '3/3'
},
{
  attr: { draggable: true },
  gridArea: '3/4'
},
{
  attr: { draggable: true },
  gridArea: '3/5'
},
{
  attr: { draggable: false },
  gridArea: '3/6/span 1/span 2'
}]
const group = users.filter(item => {
  return item.group
})

console.log(groupBy(group, 'group'))



const time = ref('00:00:00');
onMounted(() => {
  setInterval(() => {
    time.value = new Date().toLocaleTimeString()
  }, 1000)
})
const MenuIcon = defineComponent({
  name: 'MenuIcon',
  props: {
    style: {
      type: Object,
      default: null
    },
    icon: {
      type: String,
      default: ''
    }
  },
  render() {
    return h('div', {
      class: 'menu-cell menu-cell2',
      style: this.style
    },
      h(NAvatar, {
        draggable: true,
        style: {
          width: '100%',
          height: '100%',
          color: 'yellow',
          background: 'none',
          backgroundSize: '100% 100%',
          backgroundImage: this.icon && `url(${this.icon})`
        }
      })
    )
  }
})
const MenuBanner = defineComponent({
  name: 'MenuBanner',
  props: {
    style: {
      type: Object,
      default: null
    }
  },
  render() {
    return h('div', {
      class: 'menu-body menu-cell',
      style: this.style
    }, { default: () => null })
  }
})

const Menu = defineComponent({
  name: 'MenuCard',
  props: {
    style: {
      type: Object,
      default: null
    }
  },
  render() {
    return h('div', {
      class: 'menu',
    }, h('div', { class: 'menu-content' }, [
      h(MenuIcon, {
        icon: 'https://api.iconify.design/logos:prospect.svg',
        style: {
          gridArea: '1 / 1 / span 2 / span 2'
        }
      }),
      h(MenuBanner, {
        style: {
          display: 'grid',
          gridTemplateRows: 'repeat(3,1fr)',
          gridArea: '1 / 3 / span 2 / -1'
        }
      })
    ]))
  }
})

</script>

<style lang="scss">
$size: 36px;
$gap: 5px;
$padding: 10px;
$width: $size*7+$gap*(7-1)+$padding*2;
$height: $size*3+$gap*(3-1)+$padding*2;

.container {
  display: grid;
  grid-template-columns: repeat(4, $width);
  grid-template-rows: repeat(4, $height);
  gap: 10px;
  justify-content: center;
}

.menu {
  display: inline-block;
  vertical-align: top;
  background: rgba(24, 160, 88, 0.16);

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

  &-cell2 {
    background: none;
    background-color: transparent;
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

  &-title2 {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
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

.orz {
  $size: 36px;
  $gap: 5px;
  $padding: 10px;
  display: grid;
  width: $size*7+$gap*(7-1)+$padding*2;
  height: $size*3+$gap*(3-1)+$padding*2;
  gap: $gap;
  padding: $padding;
  background: rgba(24, 160, 88, 0.16);
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(7, 1fr);


  &-item {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    background: #18a058;
    border-radius: 4px;
    cursor: pointer;
  }
}
</style>