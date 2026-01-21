<script setup>
import GroceriesTable from '../components/GroceriesTable.vue';
import {getAllGroceries} from '../store';

const products = getAllGroceries;
</script>

<template>
    <div>
        <GroceriesTable :products="products" />
    </div>
</template>
