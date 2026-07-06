<script setup lang="ts">
const client = useSupabaseClient();
const router = useRouter();

const email = ref("");
const password = ref("");
const error = ref<string | null>(null);
const loading = ref(false);

const register = async () => {
    loading.value = true;
    error.value = null;

    const { error: err } = await client.auth.signUp({
        email: email.value,
        password: password.value,
    });

    if (err) {
        error.value = err.message;
        loading.value = false;
        return;
    }

    router.push("/");
};
</script>

<template>
    <div class="min-h-screen flex items-center justify-center px-5">
        <div class="w-full max-w-sm space-y-6">
            <h1 class="text-2xl font-semibold">Create account</h1>

            <div class="space-y-3">
                <input
                    v-model="email"
                    type="email"
                    placeholder="Email"
                    class="w-full h-13 px-4 border border-gray-200 rounded-xl"
                />
                <input
                    v-model="password"
                    type="password"
                    placeholder="Password"
                    class="w-full h-13 px-4 border border-gray-200 rounded-xl"
                />
            </div>

            <p v-if="error" class="text-sm text-red-500">{{ error }}</p>

            <button
                :disabled="loading"
                class="w-full h-13 bg-black text-white rounded-xl disabled:opacity-50"
                @click="register"
            >
                {{ loading ? "Creating..." : "Create account" }}
            </button>

            <p class="text-sm text-center text-gray-500">
                Have an account?
                <NuxtLink to="/login" class="text-black underline"
                    >Sign in</NuxtLink
                >
            </p>
        </div>
    </div>
</template>
