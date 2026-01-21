<script setup>
import {ref} from 'vue';
import GroceriesTable from '../components/GroceriesTable.vue';
import {getAllGroceries} from '../store';

const products = getAllGroceries(); // pass the getter directly?
</script>

<template>
    <div>
        <GroceriesTable :products="products" />
    </div>
</template>
