<script setup lang="ts">
import Modal from "../common/Modal.vue";
const routes = [
    //{ path: "/", icon: "i-heroicons-home", label: "Home" },
    { path: "/id", icon: "i-heroicons-identification", label: "Резерв ID" },
    { path: "/services", icon: "i-heroicons-credit-card", label: "Сервіси" },
    { path: "/vacancies", icon: "i-heroicons-user", label: "Вакансії" },
];

const route = useRoute();
const isActive = (path: string) => route.path === path;
const isOpen = ref(false);
</script>

<template>
    <nav
        class="fixed bottom-0 left-0 right-0 flex justify-around items-center px-2 pb-safe pt-3 bg-white border-t border-gray-100"
    >
        <NuxtLink
            v-for="item in routes"
            :key="item.path"
            :to="item.path"
            class="flex flex-col items-center gap-1 px-4 py-2 rounded-xl transition-colors"
            :class="isActive(item.path) ? 'text-gray-900' : 'text-gray-400'"
        >
            <span :class="[item.icon, 'text-2xl']" />
            <span class="text-[11px] font-medium">{{ item.label }}</span>
        </NuxtLink>
        <div>
            <button @click="isOpen = true" class="text-[11px] font-medium">
                Меню
            </button>
            <Modal v-if="isOpen" isCloseBtn @close="isOpen = false">
                <ul>
                    <li class="p-3 hover:bg-gray-700 hover:text-white">
                        <span>Повна Інформація</span>
                    </li>
                    <li class="p-3 hover:bg-gray-700 hover:text-white">
                        <span>Завантажити PDF</span>
                    </li>
                    <li class="p-3 hover:bg-gray-700 hover:text-white">
                        <span>Оновити документ</span>
                    </li>
                    <li class="p-3 hover:bg-gray-700 hover:text-white">
                        <span>Повідомити про проблему</span>
                    </li>
                </ul>
            </Modal>
        </div>
    </nav>
</template>
