// Stores are globally accessible => any component con import and use them
// without the need of props beeing passed down.
//
// While global, they do offer encapsulation.
//      => State is NOT exported.
//      => Getters and Actions ARE exported.
// This is how excapsulation is achived. You export controlled access.
//
// Stores are reactive! Any change is automatically propagated.

import {computed, ref} from 'vue';

// state
const groceries = ref([
    {name: 'Rice', price: 1.0, amount: 0},
    {name: 'Broccoli', price: 0.99, amount: 0},
    {name: 'Biscuits', price: 1.2, amount: 0},
    {name: 'Nuts', price: 2.99, amount: 0},
]);

// getters
export const getAllGroceries = computed(() => groceries.value);
export const getGroceryById = id => computed(() => groceries.value.find(grocery => grocery.id == id));

// Actions
export const addGrocery = grocery => groceries.value.push(grocery);
