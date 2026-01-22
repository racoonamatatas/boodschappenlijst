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
    {id: 0, name: 'Rice', price: 1.0, amount: 0},
    {id: 1, name: 'Broccoli', price: 0.99, amount: 0},
    {id: 2, name: 'Biscuits', price: 1.2, amount: 0},
    {id: 3, name: 'Nuts', price: 2.99, amount: 0},
]);

// getters
export const getAllGroceries = computed(() => groceries.value);
export const getGroceryById = id => computed(() => groceries.value.find(grocery => grocery.id === id));

// Actions
let nextId = groceries.value.length; // Ids start at zero so length is the next possible one.

export const addGrocery = grocery => {
    grocery.id = nextId++;
    groceries.value.push(grocery);
};

export const updateGrocery = groceryUpdates => {
    const grocery = groceries.value.find(item => item.id === groceryUpdates.id);

    if (grocery) {
        Object.assign(grocery, groceryUpdates);
    }
};

export const deleteGrocery = id => {
    const index = groceries.value.findIndex(grocery => grocery.id === id);

    if (index !== -1) {
        groceries.value.splice(index, 1);
    }
};
