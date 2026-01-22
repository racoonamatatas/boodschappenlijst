<script setup>
import {ref} from 'vue';

const props = defineProps(['grocery']);
const emit = defineEmits(['submit']);

const copyGrocery = ref({...props.grocery});

// const name = ref(props.grocery.name);
// const price = ref(props.grocery.price);
// const amount = ref(props.grocery.amount);

// const createGrocery = () => ({name: name.value, price: price.value, amount: amount.value});

// const resetGrocery = () => {
//     name.value = props.grocery.name;
//     price.value = props.grocery.price;
//     amount.value = props.grocery.amount;
// };

const emitEvent = () => {
    emit('submit', copyGrocery.value);
    // resetGrocery();
};
</script>

<template>
    <input v-model.trim="copyGrocery.name" type="text" />
    <input v-model.number="copyGrocery.price" />
    <input v-model.number="copyGrocery.amount" />
    <button @click="emitEvent">Submit</button>
</template>
