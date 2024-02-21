export const users= [
  {
    name: '九转灵山',
    id: '001',
    type: 'user',
    group: '1',
    icon: 'https://p3-pc.douyinpic.com/img/aweme-avatar/tos-cn-avt-0015_a86e56c980b7955312b5702a547a4cf0~c5_300x300.jpeg?from=2956013662',
    banner: {
      display: 'grid',
      gridTemplateRows: 'repeat(3,1fr)',
      gridArea: '1 / 3 / span 2 / -1'
    },
    title: {
      data: ['抖音', '记录美好生活'],
      style: {
        gridArea: '1 / 1 / span 2 / -1'
      }
    },
    status: {
      star: ['3.8', '⭐'],
      tag: ['娱乐', '视频', '动漫']
    }
  },
  {
    name: '虾仁不眨眼！',
    id: '002',
    type: 'user',
    group: '2',
    banner: {
      display: 'grid',
      gridTemplateRows: 'repeat(3,1fr)',
      gridArea: '1 / 3 / span 2 / -1'
    },
    app: {
      style: {
        gridArea: '1 / 1 / span 2 / -1'
      }
    },
    status: {
      data: ['虾仁不眨眼！', '《穿越大秦》']
    }
  },
  {
    name: '《大明朱三爷》',
    type: 'app',
    id: '10001',
    parent: '002',
    icon: 'https://api.iconify.design/skill-icons:vite-dark.svg?color=%23f31212',
    url: 'https://www.douyin.com/user/MS4wLjABAAAAwCF9lNamTpx-8ENFQauLVaKucBuRjO3VrRUDWf3BN3s?modal_id=7291961030303862066'
  }
]
