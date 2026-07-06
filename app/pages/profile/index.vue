<script setup lang="ts">
definePageMeta({ middleware: "auth" });

const client = useSupabaseClient();
const session = useSupabaseSession();
const profile = ref<Record<string, any> | null>(null);

const logout = async () => {
    await client.auth.signOut();
    navigateTo("/login");
};

onMounted(async () => {
    const id = session.value?.user.id;
    if (!id) return;
    const { data } = await client
        .from("profiles")
        .select("*")
        .eq("id", id)
        .single();
    profile.value = data;
});
</script>

<template>
    <div class="px-5 py-8 space-y-4">
        <div class="flex items-center justify-between">
            <h1 class="text-2xl font-semibold">Profile</h1>
            <NuxtLink to="/profile/edit" class="text-sm underline"
                >Edit</NuxtLink
            >
        </div>

        <div class="space-y-2 text-sm">
            <p>
                <span class="text-gray-400">Name</span>
                {{ profile?.full_name ?? "—" }}
            </p>
            <p>
                <span class="text-gray-400">Birthday</span>
                {{ profile?.birthday ?? "—" }}
            </p>
            <p>
                <span class="text-gray-400">Registration</span>
                {{ profile?.registration ?? "—" }}
            </p>
        </div>
        <button @click="logout" class="bg-orange rounded-card py-2 px-3">
            Logout
        </button>
    </div>
</template>
