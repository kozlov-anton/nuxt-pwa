<script setup lang="ts">
definePageMeta({ middleware: "auth" });

const client = useSupabaseClient();
const session = useSupabaseSession();
const user = useSupabaseUser();
const router = useRouter(); //unused

const form = reactive({ full_name: "", birthday: "", registration: "" });
const loading = ref(false);
const error = ref<string | null>(null);

const { data: profile, refresh } = await useAsyncData("profile", async () => {
    if (!user.value?.id) return null;
    const { data } = await client
        .from("profiles")
        .select("*")
        .eq("id", user.value.id)
        .single();
    return data;
});

if (profile.value) {
    form.full_name = profile.value.full_name ?? "";
    form.birthday = profile.value.birthday ?? "";
    form.registration = profile.value.registration ?? "";
}

const save = async () => {
    const id = session.value?.user.id;
    if (!id) return (error.value = "Not authenticated");

    loading.value = true;
    const { error: err } = await client
        .from("profiles")
        .update({ ...form, updated_at: new Date().toISOString() })
        .eq("id", id);
    loading.value = false;

    if (err) return (error.value = err.message);
    navigateTo("/profile");
};

onMounted(async () => {
    const id = session.value?.user.id;
    if (!id) return;

    const { data } = await client
        .from("profiles")
        .select("*")
        .eq("id", id)
        .single();
    if (data)
        Object.assign(form, {
            full_name: data.full_name ?? "",
            birthday: data.birthday ?? "",
            registration: data.registration ?? "",
        });
});
</script>

<template>
    <div class="px-5 py-8 space-y-6">
        <h1 class="text-2xl font-semibold">Edit Profile</h1>

        <div class="space-y-3">
            <input
                v-model="form.full_name"
                type="text"
                placeholder="Full name"
                class="w-full h-13 px-4 border border-gray-200 rounded-xl"
            />
            <input
                v-model="form.birthday"
                type="date"
                class="w-full h-13 px-4 border border-gray-200 rounded-xl"
            />
            <input
                v-model="form.registration"
                type="text"
                placeholder="Registration address"
                class="w-full h-13 px-4 border border-gray-200 rounded-xl"
            />
        </div>

        <p v-if="error" class="text-sm text-red-500">{{ error }}</p>

        <button
            :disabled="loading"
            class="w-full h-13 bg-black text-white rounded-xl disabled:opacity-50"
            @click="save"
        >
            {{ loading ? "Saving..." : "Save" }}
        </button>
    </div>
</template>
