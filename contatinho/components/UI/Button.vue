<template>
     <button class="w-full p-4 mt-8 border b-blue-200 rounded bg-blue-500 text-white flex items-center justify-center" 
     :type="props.type"
     @click="handleClick">
        <slot />
    </button>
</template>

<script setup>
const emits = defineEmits(["click"])
const props = defineProps({
    type: {
        type: String,
        default: 'button'
    }
})

const handleClick = () => {
    emits("click")
}
</script>