<template>

<div class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl duration-300">

<img
:src="menu.gambar"
class="w-full h-56 object-cover"
/>

<div class="p-5">

<h2 class="text-xl font-bold">

{{ menu.nama }}

</h2>

<p class="text-gray-500 mt-2">

{{ menu.kategori }}

</p>

<p class="text-amber-800 text-xl font-bold mt-3">

Rp {{ Number(menu.harga).toLocaleString('id-ID') }}

</p>

<button
class="mt-5 w-full bg-amber-800 text-white py-2 rounded-lg hover:bg-amber-900"
@click="$emit('add',menu)"
>

Tambah ke Keranjang

</button>

</div>

</div>

</template>

<script setup>

defineProps({

menu:Object

})

defineEmits(['add'])

</script>