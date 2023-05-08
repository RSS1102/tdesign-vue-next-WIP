<template>
  <t-space direction="vertical">
    <t-tag-input v-model="tags1" clearable @paste="onPaste" @enter="onTagInputEnter" />

    <t-tag-input :value="tags2" label="Controlled: " clearable @change="onChange" />

    <t-tag-input :default-value="tags3" label="UnControlled: " clearable />
  </t-space>
</template>

<script setup lang="ts">
import { InputValue, TagInputChangeContext, TagInputValue } from 'tdesign-vue-next';
import { ref } from 'vue';

const tags1 = ref(['Vue', 'React']);
const tags2 = ref(['Vue', 'React']);
const tags3 = ref(['Vue', 'React']);

const onTagInputEnter = (value: TagInputValue, context: { e: KeyboardEvent; inputValue: InputValue }) => {
  console.log(value, context);
};
const onChange = (value: TagInputValue, context: TagInputChangeContext) => {
  console.log(value, context);
  tags2.value = value;
};
const onPaste = (context: { e: ClipboardEvent; pasteValue: string }) => {
  console.log(context);
};
</script>
