<script setup lang="ts">
const props = defineProps({
    className: {
        type: String,
        default: "",
    },
});
</script>

<template>
    <div
        :class="[
            'flex border border-olive rounded-card p-[16px]',
            props.className,
        ]"
    >
        <slot></slot>
    </div>
</template>
