<!-- ListItem.vue -->
<template>
    <div class="w-full p-4 border border-gray-200 flex items-center justify-between">
        <span class="text-xl font-semibold">
            <slot></slot> 
        </span>

        <!-- Botões de ação -->
        <div class="w-32 space-x-2">
            <slot name="actions"></slot> <!-- Slot nomeado para as ações -->
        </div>
    </div>
</template>
