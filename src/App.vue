<script setup>
import {ref} from 'vue';
import GroceriesTable from './components/GroceriesTable.vue';

const products = ref([
    {item: 'Rice', price: 1.0, quantity: 0},
    {item: 'Broccoli', price: 0.99, quantity: 0},
    {item: 'Biscuits', price: 1.2, quantity: 0},
    {item: 'Nuts', price: 2.99, quantity: 0},
]);
</script>

<template>
    <div>
        <GroceriesTable :products="products" />
    </div>
</template>

<style scoped></style>
