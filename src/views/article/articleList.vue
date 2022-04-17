<template>
  <div>
    article
    {{ name }}
  </div>
</template>
<script setup>
import { ref } from 'vue'
const name = ref('article')
</script>
<style lang="scss" scoped></style>
