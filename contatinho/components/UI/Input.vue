<template>
          <fieldset class="2-full p-1 flex flex-col gap-2 ny-2">
            <label :for="props.label" class="text-lg">
                {{ props.label }}
            </label>
            <input 
            class="w-full py-2 px-4 border b-gray-100 rounded" 
            :type="props.type" 
            :id="props.label"
            :value="props.modelValue" 
            @input="$emit('update:modelValue',$event.target.value)"/>
        </fieldset>
</template>

<script setup>
    const props = defineProps({
        label: {
            type: String,
            required: true
        },
        type: {
            type: String,
            default: 'text'
        },
        modelValue: {
            type: String,
            required: true
        }
    })
</script>