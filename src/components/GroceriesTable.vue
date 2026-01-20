<script setup>
import {computed} from 'vue';

const calculateSubtotal = product => product.price * product.quantity;

const calculateTotal = computed(() => {
    let total = 0;
    products.value.forEach(product => {
        total += calculateSubtotal(product);
    });
    return total;
});
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
                <td>{{ product.price }}</td>
                <td>
                    <input v-model.number="product.quantity" min="0" />
                </td>
                <td>{{ calculateSubtotal(product).toFixed(2) }}</td>
            </tr>
            <tr>
                <td colspan="3">Total:</td>
                <td>{{ calculateTotal.toFixed(2) }}</td>
            </tr>
        </tbody>
    </table>
</template>

<style scoped></style>
