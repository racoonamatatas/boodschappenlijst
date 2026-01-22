<script setup>
import {ref} from 'vue';
import GroceryForm from '../components/GroceryForm.vue';
import {addGrocery} from '../store';
import {useRouter} from 'vue-router';

const grocery = ref({name: '', price: 0, amount: 0});

const router = useRouter();

const submitGrocery = newGrocery => {
    addGrocery(newGrocery);
    router.push({name: 'grocery.overview'});
};
</script>

<template>
    <GroceryForm :grocery="grocery" @submit="submitGrocery" />
</template>
