<template>
  <t-tree-select
    v-model="value"
    :data="options"
    clearable
    placeholder="请选择"
    :tree-props="{
      load: loadFunc,
    }"
  />
</template>
<script setup lang="ts">
import { ref } from 'vue';

type Option = {
  label: string;
  value: string;
  children: boolean;
};

const options: Option[] = [
  {
    label: '1',
    value: '1',
    children: true,
  },
  {
    label: '2',
    value: '2',
    children: true,
  },
];

const value = ref('');

// const loadFunc = (node: TreeNodeModel<Option[]>) =>
//   new Promise((resolve) => {
//     let timer = setTimeout(() => {
//       let nodes = [];
//       if (node.level < 2) {
//         nodes = [
//           {
//             label: `${node.label}.1`,
//             value: `${node.value}.1`,
//             children: true,
//           },
//           {
//             label: `${node.label}.2`,
//             value: `${node.value}.2`,
//             children: true,
//           },
//         ];
//       }
//       resolve(nodes);
//       clearTimeout(timer);
//       timer = null;
//     }, 1000);
//   });
</script>
