<script setup>
import {ref, reactive, computed} from 'vue';

const products = ref([
    {item: 'Rice', price: 1.00, quantity: 0},
    {item: 'Broccoli', price: 0.99, quantity: 0},
    {item: 'Biscuits', price: 1.20, quantity: 0},
    {item: 'Nuts', price: 2.99, quantity: 0}
]);

const subtotals = () => {
    
}

// const subTotal = computed(() => products.value.price * products.value.quantity);
</script>

<template>
    <table>
        <tbody>
            <tr>
                <th>Item</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Subtotal</th>
            </tr>
            <tr v-for="(product, index) in products" :key="index">
                <td>{{ product.item }}</td>
                <td>{{ product.price}}</td>
                <td>
                    <input v-model.number="product.quantity" min="0" />
                </td>
                <td>{{(product.price * product.quantity).toFixed(2) }}</td>
            </tr>
            <tr >
                <td colspan="3">Total:</td>
                <td></td>
            </tr>
        </tbody>
    </table>
</template>

<style scoped></style>
