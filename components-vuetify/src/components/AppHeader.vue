<template>
    <v-app-bar app>
        <v-toolbar-title>{{ title }}</v-toolbar-title>
    </v-app-bar>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const title = ref('Hello, Vue 3!')
</script>s