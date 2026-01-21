<script setup>
import {computed} from 'vue';
import {useRouter} from 'vue-router';
import {deleteGrocery} from '../store';

const router = useRouter();

const props = defineProps(['products']);

const calculateSubtotal = product => product.price * product.amount;

const calculateTotal = computed(() => {
    let total = 0;
    props.products.forEach(product => {
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
            <tr v-for="(product, index) in props.products" :key="index">
                <td>{{ product.name }}</td>
                <td>{{ product.price }}</td>
                <td>
                    <input v-model.number="product.amount" min="0" />
                </td>
                <td>{{ calculateSubtotal(product).toFixed(2) }}</td>
                <td>
                    <button @click="router.push(`/edit/${product.id}`)">Edit</button>
                </td>
                <td>
                    <button @click="deleteGrocery(product.id)">Delete</button>
                </td>
            </tr>
            <tr>
                <td colspan="3">Total:</td>
                <td>{{ calculateTotal.toFixed(2) }}</td>
            </tr>
        </tbody>
    </table>
</template>

<style scoped></style>
