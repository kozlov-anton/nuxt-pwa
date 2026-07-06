<script setup lang="ts">
const router = useRouter();
onMounted(() => router.push("/"));
</script>

<template>
    <div class="min-h-screen flex items-center justify-center">
        <p class="text-gray-400">Redirecting...</p>
    </div>
</template>
