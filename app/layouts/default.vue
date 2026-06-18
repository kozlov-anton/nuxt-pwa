<script setup lang="ts">
import BottomNav from "~/components/nav/BottomNav.vue";
</script>

<template>
    <main class="pb-20 bg-secondary w-full max-w-2xl mx-auto p-3">
        <slot />
    </main>
    <BottomNav />
</template>
