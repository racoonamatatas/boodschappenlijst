<script setup>
import {ref} from 'vue';

const props = defineProps(['grocery']);
const emit = defineEmits(['submit']);

const name = ref(props.grocery.name);
const price = ref(props.grocery.price);
const amount = ref(props.grocery.amount);

const createGrocery = () => ({name: name.value, price: price.value, amount: amount.value});

const resetGrocery = () => {
    name.value = props.grocery.name;
    price.value = props.grocery.price;
    amount.value = props.grocery.amount;
};

const emitEvent = () => {
    emit('submit', createGrocery());
    resetGrocery();
};
</script>

<template>
    <input v-model.trim="name" type="text" />
    <input v-model.number="price" />
    <input v-model.number="amount" />
    <button @click="emitEvent">Submit</button>
</template>
