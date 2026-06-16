<script setup lang="ts">
defineProps<{
    title?: string;
    isCloseBtn?: boolean;
}>();
const emit = defineEmits<{ close: [] }>();
</script>

<template>
    <Teleport to="body">
        <div
            class="fixed inset-0 z-50 flex items-end justify-center bg-black/40"
            @click.self="emit('close')"
        >
            <div class="w-full max-w-lg bg-white rounded-t-2xl py-6 pb-safe">
                <div
                    v-if="title || isCloseBtn"
                    class="flex items-center justify-between mb-4"
                >
                    <h2 v-if="title" class="text-base font-medium">
                        {{ title }}
                    </h2>
                    <button v-if="isCloseBtn" @click="emit('close')">
                        <span class="i-heroicons-x-mark text-xl">←</span>
                    </button>
                </div>
                <slot />
            </div>
        </div>
    </Teleport>
</template>
