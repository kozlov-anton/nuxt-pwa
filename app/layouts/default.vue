<script setup lang="ts">
import BottomNav from "~/components/nav/BottomNav.vue";
</script>

<template>
    <main class="pb-20 bg-secondary">
        <slot />
    </main>
    <BottomNav />
</template>
