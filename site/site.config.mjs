export default {
  docs: [
    {
      title: '开始',
      type: 'doc', // 普通文档
      children: [
        {
          title: '快速开始',
          name: 'getting-started',
          path: '/vue-next/getting-started',
          component: () => import('@/site/docs/getting-started.md'),
        },
        {
          title: '最佳实践',
          name: 'quick-start',
          meta: {},
          path: '/vue-next/quick-start',
          component: () => import('@/site/docs/starter.md'),
        },
        {
          title: '更新日志',
          name: 'changelog',
          path: '/vue-next/changelog',
          component: () => import('@/CHANGELOG.md'),
        },
        {
          title: '组件概览',
          name: 'overview',
          meta: {},
          path: '/vue-next/overview',
          component: () => import('@common/docs/web/overview.md'),
        },
      ],
    },
    {
      title: '全局配置',
      name: 'configs',
      children: [
        {
          title: '全局特性配置',
          name: 'config',
          path: '/vue-next/config',
          component: () => import('tdesign-vue-next/config-provider/config-provider.md'),
        },
        {
          title: '自定义主题',
          name: 'custom-theme',
          path: '/vue-next/custom-theme',
          component: () => import('@common/theme.md'),
        },
        {
          title: '暗黑模式',
          name: 'dark-mode',
          path: '/vue-next/dark-mode',
          component: () => import('@common/dark-mode.md'),
        },
      ],
    },
    {
      title: '基础',
      type: 'component', // 组件文档
      children: [
        {
          title: 'Button 按钮',
          name: 'button',
          path: '/vue-next/components/button',
          component: () => import('tdesign-vue-next/button/button.md'),
        },
        {
          title: 'Icon 图标',
          name: 'icon',
          path: '/vue-next/components/icon',
          component: () => import('tdesign-vue-next/icon/icon.md'),
        },
        {
          title: 'Link 链接',
          name: 'link',
          path: '/vue-next/components/link',
          component: () => import('tdesign-vue-next/link/link.md'),
        },
      ],
    },
    {
      title: '布局',
      type: 'component',
      children: [
        {
          title: 'Divider 分割线',
          name: 'divider',
          path: '/vue-next/components/divider',
          component: () => import('tdesign-vue-next/divider/divider.md'),
        },
        {
          title: 'Grid 栅格',
          name: 'grid',
          path: '/vue-next/components/grid',
          component: () => import('tdesign-vue-next/grid/grid.md'),
        },
        {
          title: 'Layout 布局',
          name: 'layout',
          path: '/vue-next/components/layout',
          component: () => import('tdesign-vue-next/layout/layout.md'),
        },
        {
          title: 'Space 间距',
          name: 'space',
          path: '/vue-next/components/space',
          component: () => import('tdesign-vue-next/space/space.md'),
        },
      ],
    },
    {
      title: '导航',
      type: 'component',
      children: [
        {
          title: 'Affix 固钉',
          name: 'affix',
          meta: {},
          path: '/vue-next/components/affix',
          component: () => import('tdesign-vue-next/affix/affix.md'),
        },
        {
          title: 'Anchor 锚点',
          name: 'anchor',
          path: '/vue-next/components/anchor',
          component: () => import('tdesign-vue-next/anchor/anchor.md'),
        },
        {
          title: 'BackTop 回到顶部',
          name: 'back-top',
          path: '/vue-next/components/back-top',
          component: () => import('tdesign-vue-next/back-top/back-top.md'),
        },
        {
          title: 'Breadcrumb 面包屑',
          name: 'breadcrumb',
          path: '/vue-next/components/breadcrumb',
          component: () => import('tdesign-vue-next/breadcrumb/breadcrumb.md'),
        },
        {
          title: 'Dropdown 下拉菜单',
          name: 'dropdown',
          path: '/vue-next/components/dropdown',
          component: () => import('tdesign-vue-next/dropdown/dropdown.md'),
        },
        {
          title: 'Menu 导航菜单',
          name: 'menu',
          path: '/vue-next/components/menu',
          component: () => import('tdesign-vue-next/menu/menu.md'),
        },
        {
          title: 'Pagination 分页',
          name: 'pagination',
          path: '/vue-next/components/pagination',
          component: () => import('tdesign-vue-next/pagination/pagination.md'),
        },
        {
          title: 'Steps 步骤条',
          name: 'steps',
          path: '/vue-next/components/steps',
          component: () => import('tdesign-vue-next/steps/steps.md'),
        },
        {
          title: 'StickyTool 侧边栏',
          titleEn: 'StickyTool',
          name: 'StickyTool',
          path: '/vue-next/components/sticky-tool',
          component: () => import('tdesign-vue-next/sticky-tool/sticky-tool.md'),
        },
        {
          title: 'Tabs 选项卡',
          name: 'tabs',
          path: '/vue-next/components/tabs',
          component: () => import('tdesign-vue-next/tabs/tabs.md'),
        },
      ],
    },
    {
      title: '输入',
      type: 'component', // 组件文档
      children: [
        {
          title: 'AutoComplete 自动完成',
          name: 'auto-complete',
          path: '/vue-next/components/auto-complete',
          component: () => import('tdesign-vue-next/auto-complete/auto-complete.md'),
        },
        {
          title: 'Cascader 级联组件',
          name: 'cascader',
          meta: {},
          path: '/vue-next/components/cascader',
          component: () => import('tdesign-vue-next/cascader/cascader.md'),
        },
        {
          title: 'Checkbox 多选框',
          name: 'checkbox',
          path: '/vue-next/components/checkbox',
          component: () => import('tdesign-vue-next/checkbox/checkbox.md'),
        },
        {
          title: 'ColorPicker 颜色选择器',
          name: 'color-picker',
          path: '/vue-next/components/color-picker',
          component: () => import('tdesign-vue-next/color-picker/color-picker.md'),
        },
        {
          title: 'DatePicker 日期选择器',
          name: 'date-picker',
          path: '/vue-next/components/date-picker',
          component: () => import('tdesign-vue-next/date-picker/date-picker.md'),
        },
        {
          title: 'Form 表单',
          name: 'form',
          path: '/vue-next/components/form',
          component: () => import('tdesign-vue-next/form/form.md'),
        },
        {
          title: 'Input 输入框',
          name: 'input',
          path: '/vue-next/components/input',
          component: () => import('tdesign-vue-next/input/input.md'),
        },
        {
          title: 'InputAdornment 输入装饰器',
          name: 'input-adornment',
          path: '/vue-next/components/input-adornment',
          component: () => import('tdesign-vue-next/input-adornment/input-adornment.md'),
        },
        {
          title: 'InputNumber 数字输入框',
          name: 'input-number',
          path: '/vue-next/components/input-number',
          component: () => import('tdesign-vue-next/input-number/input-number.md'),
        },
        {
          title: 'Radio 单选框',
          name: 'radio',
          path: '/vue-next/components/radio',
          component: () => import('tdesign-vue-next/radio/radio.md'),
        },
        {
          title: 'RangeInput 范围输入框',
          name: 'range-input',
          path: '/vue-next/components/range-input',
          component: () => import('tdesign-vue-next/range-input/range-input.md'),
        },
        {
          title: 'Select 选择器',
          name: 'select',
          path: '/vue-next/components/select',
          component: () => import('tdesign-vue-next/select/select.md'),
        },
        {
          title: 'SelectInput 筛选器输入框',
          name: 'select-input',
          path: '/vue-next/components/select-input',
          component: () => import('tdesign-vue-next/select-input/select-input.md'),
        },
        {
          title: 'Slider 滑块',
          name: 'slider',
          path: '/vue-next/components/slider',
          component: () => import('tdesign-vue-next/slider/slider.md'),
        },
        {
          title: 'Switch 开关',
          name: 'switch',
          path: '/vue-next/components/switch',
          component: () => import('tdesign-vue-next/switch/switch.md'),
        },
        {
          title: 'TagInput 标签输入框',
          name: 'tag-input',
          path: '/vue-next/components/tag-input',
          component: () => import('tdesign-vue-next/tag-input/tag-input.md'),
        },
        {
          title: 'Textarea 多行文本框',
          name: 'textarea',
          path: '/vue-next/components/textarea',
          component: () => import('tdesign-vue-next/textarea/textarea.md'),
        },
        {
          title: 'Transfer 穿梭框',
          name: 'transfer',
          path: '/vue-next/components/transfer',
          component: () => import('tdesign-vue-next/transfer/transfer.md'),
        },
        {
          title: 'TimePicker 时间选择器',
          name: 'time-picker',
          path: '/vue-next/components/time-picker',
          component: () => import('tdesign-vue-next/time-picker/time-picker.md'),
        },
        {
          title: 'TreeSelect 树选择',
          name: 'tree-select',
          path: '/vue-next/components/tree-select',
          component: () => import('tdesign-vue-next/tree-select/tree-select.md'),
        },
        {
          title: 'Upload 上传',
          name: 'upload',
          path: '/vue-next/components/upload',
          component: () => import('tdesign-vue-next/upload/upload.md'),
        },
      ],
    },
    {
      title: '数据展示',
      type: 'component', // 组件文档
      children: [
        {
          title: 'Avatar 头像',
          name: 'avatar',
          meta: {},
          path: '/vue-next/components/avatar',
          component: () => import('tdesign-vue-next/avatar/avatar.md'),
        },
        {
          title: 'Badge 徽标',
          name: 'badge',
          path: '/vue-next/components/badge',
          component: () => import('tdesign-vue-next/badge/badge.md'),
        },
        {
          title: 'Calendar 日历',
          name: 'calendar',
          path: '/vue-next/components/calendar',
          component: () => import('tdesign-vue-next/calendar/calendar.md'),
        },
        {
          title: 'Card 卡片',
          name: 'card',
          path: '/vue-next/components/card',
          component: () => import('tdesign-vue-next/card/card.md'),
        },
        {
          title: 'Collapse 折叠面板',
          name: 'collapse',
          path: '/vue-next/components/collapse',
          component: () => import('tdesign-vue-next/collapse/collapse.md'),
        },
        {
          title: 'Comment 评论',
          name: 'comment',
          meta: {},
          path: '/vue-next/components/comment',
          component: () => import('tdesign-vue-next/comment/comment.md'),
        },
        {
          title: 'Image 图片',
          titleEn: 'Image',
          name: 'image',
          path: '/vue-next/components/image',
          component: () => import('tdesign-vue-next/image/image.md'),
          componentEn: () => import('tdesign-vue-next/image/image.en-US.md'),
        },
        {
          title: 'ImageViewer 图片预览',
          name: 'image-viewer',
          meta: {},
          path: '/vue-next/components/image-viewer',
          component: () => import('tdesign-vue-next/image-viewer/image-viewer.md'),
        },
        {
          title: 'List 列表',
          name: 'list',
          path: '/vue-next/components/list',
          component: () => import('tdesign-vue-next/list/list.md'),
        },
        {
          title: 'Loading 加载',
          name: 'loading',
          path: '/vue-next/components/loading',
          component: () => import('tdesign-vue-next/loading/loading.md'),
        },
        {
          title: 'Progress 进度条',
          name: 'progress',
          path: '/vue-next/components/progress',
          component: () => import('tdesign-vue-next/progress/progress.md'),
        },
        {
          title: 'Skeleton  骨架屏',
          name: 'skeleton',
          path: '/vue-next/components/skeleton',
          component: () => import('tdesign-vue-next/skeleton/skeleton.md'),
        },
        {
          title: 'Swiper 轮播框',
          name: 'swiper',
          path: '/vue-next/components/swiper',
          component: () => import('tdesign-vue-next/swiper/swiper.md'),
        },
        {
          title: 'Table 表格',
          name: 'table',
          path: '/vue-next/components/table',
          component: () => import('tdesign-vue-next/table/table.md'),
        },
        {
          title: 'Tag 标签',
          name: 'tag',
          path: '/vue-next/components/tag',
          component: () => import('tdesign-vue-next/tag/tag.md'),
        },
        {
          title: 'Timeline 时间轴',
          name: 'timeline',
          path: '/vue-next/components/timeline',
          component: () => import('tdesign-vue-next/timeline/timeline.md'),
        },
        {
          title: 'Tooltip 文字提示',
          name: 'tooltip',
          path: '/vue-next/components/tooltip',
          component: () => import('tdesign-vue-next/tooltip/tooltip.md'),
        },
        {
          title: 'Tree 树',
          name: 'tree',
          path: '/vue-next/components/tree',
          component: () => import('tdesign-vue-next/tree/tree.md'),
        },
        {
          title: 'Watermark 水印',
          name: 'watermark',
          docType: 'data',
          path: '/vue-next/components/watermark',
          component: () => import('tdesign-vue-next/watermark/watermark.md'),
        },
        {
          title: 'Rate 评分',
          name: 'rate',
          docType: 'data',
          path: '/vue-next/components/rate',
          component: () => import('tdesign-vue-next/rate/rate.md'),
        },
      ],
    },
    {
      title: '消息提醒',
      type: 'component', // 组件文档
      children: [
        {
          title: 'Alert 警告提醒',
          name: 'alert',
          path: '/vue-next/components/alert',
          component: () => import('tdesign-vue-next/alert/alert.md'),
        },
        {
          title: 'Dialog 对话框',
          name: 'dialog',
          path: '/vue-next/components/dialog',
          component: () => import('tdesign-vue-next/dialog/dialog.md'),
        },
        {
          title: 'Drawer 抽屉',
          name: 'drawer',
          path: '/vue-next/components/drawer',
          component: () => import('tdesign-vue-next/drawer/drawer.md'),
        },
        {
          title: 'Guide 引导',
          name: 'guide',
          path: '/vue-next/components/guide',
          component: () => import('tdesign-vue-next/guide/guide.md'),
        },
        {
          title: 'Message 全局提示',
          name: 'message',
          path: '/vue-next/components/message',
          component: () => import('tdesign-vue-next/message/message.md'),
        },
        {
          title: 'Notification 消息通知',
          name: 'notification',
          path: '/vue-next/components/notification',
          component: () => import('tdesign-vue-next/notification/notification.md'),
        },
        {
          title: 'Popconfirm 气泡确认框',
          name: 'popconfirm',
          path: '/vue-next/components/popconfirm',
          component: () => import('tdesign-vue-next/popconfirm/popconfirm.md'),
        },
        {
          title: 'Popup 弹出层',
          name: 'popup',
          path: '/vue-next/components/popup',
          component: () => import('tdesign-vue-next/popup/popup.md'),
        },
      ],
    },
  ],
};