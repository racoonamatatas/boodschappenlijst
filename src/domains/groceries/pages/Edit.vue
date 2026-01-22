<script setup>
import GroceryForm from '../components/GroceryForm.vue';
import {useRoute, useRouter} from 'vue-router';
import {getGroceryById, updateGrocery} from '../store';

const route = useRoute();
const groceryId = Number(route.params.id); // conversion needed. router params are strings.
const grocery = getGroceryById(groceryId);

const router = useRouter();

const onSubmit = updatedGrocery => {
    updatedGrocery.id = groceryId;
    updateGrocery(updatedGrocery);

    router.push({name: 'grocery.overview'});
};
</script>

<template>
    <div>
        <GroceryForm :grocery="grocery" @submit="onSubmit" />
    </div>
</template>
