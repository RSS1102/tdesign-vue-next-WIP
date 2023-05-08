<template>
  <t-space>
    <t-tree-select v-model="value" :data="options" clearable placeholder="请选择">
      <template #valueDisplay="{ value: valueDisplay }: { value: Option }">
        {{ valueDisplay.label }}({{ valueDisplay.value }})
      </template>
    </t-tree-select>
    <t-tree-select v-model="mulValue" :data="options" multiple clearable filterable placeholder="请选择">
      <template
        #valueDisplay="{
          value: valueDisplay,
          onClose,
        }: {
          value: Option[],
          onClose: (index: number, item?: any) => void,
        }"
      >
        <t-tag v-for="(item, index) in valueDisplay" :key="index" closable :on-close="() => onClose(index)">
          {{ item.label }}({{ item.value }})
        </t-tag>
      </template>
    </t-tree-select>
  </t-space>
</template>
<script setup lang="ts">
import { ref } from 'vue';

const value = ref('shenzhen');
const mulValue = ref(['shenzhen', 'guangzhou']);

type Option = {
  label: string;
  value: string;
  children: {
    label: string;
    value: string;
    children?: {
      label: string;
      value: string;
    }[];
  }[];
};

const options: Option[] = [
  {
    label: '广东省',
    value: 'guangdong',
    children: [
      {
        label: '广州市',
        value: 'guangzhou',
      },
      {
        label: '深圳市',
        value: 'shenzhen',
        children: [
          {
            label: '深圳市南山区海天二路33号腾讯滨海大厦',
            value: 'Tencent',
          },
        ],
      },
    ],
  },
  {
    label: '江苏省',
    value: 'jiangsu',
    children: [
      {
        label: '南京市',
        value: 'nanjing',
      },
      {
        label: '苏州市',
        value: 'suzhou',
      },
    ],
  },
];
</script>
