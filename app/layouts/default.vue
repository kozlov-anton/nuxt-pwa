<script setup lang="ts">
import BottomNav from "~/components/nav/BottomNav.vue";
</script>

<template>
    <div class="min-h-dvh w-full max-w-2xl mx-auto flex flex-col bg-secondary">
        <main class="flex-1 px-5 py-6 overflow-y-auto">
            <slot />
        </main>
        <BottomNav />
    </div>
</template>
