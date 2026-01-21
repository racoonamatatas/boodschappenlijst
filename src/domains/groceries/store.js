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
    {item: 'Rice', price: 1.0, quantity: 0},
    {item: 'Broccoli', price: 0.99, quantity: 0},
    {item: 'Biscuits', price: 1.2, quantity: 0},
    {item: 'Nuts', price: 2.99, quantity: 0},
]);

// getters
export const getAllGroceries = computed(() => groceries.value);
export const getGroceryById = id => computed(() => groceries.value.find(grocery => grocery.id == id));

// Actions
export const addGrocery = grocery => groceries.value.push(grocery);
