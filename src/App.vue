<script setup>
import GroceriesTable from './components/GroceriesTable.vue';

import {ref} from 'vue';

const products = ref([
    {item: 'Rice', price: 1.0, quantity: 0},
    {item: 'Broccoli', price: 0.99, quantity: 0},
    {item: 'Biscuits', price: 1.2, quantity: 0},
    {item: 'Nuts', price: 2.99, quantity: 0},
]);
</script>

<template>
    <div>
        <GroceriesTable />
    </div>
</template>

<style scoped></style>
