<script setup>
import {ref} from 'vue';
import GroceryForm from '../components/GroceryForm.vue';
import {addGrocery} from '../store';

const grocery = ref({name: '', price: 0, amount: 0});
</script>

<template>
    <GroceryForm :grocery="grocery" @submit="addGrocery" />
</template>
