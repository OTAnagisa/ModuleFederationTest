<template>
    <header>
        <h1>{{ title }}</h1>
    </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const title = ref('Hello, Vue 3!')
</script>

<style>
header {
    background-color: #f0f0f0;
    padding: 10px;
}
</style>