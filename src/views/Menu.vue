<template>

<div class="max-w-7xl mx-auto p-6">

<h1 class="text-4xl font-bold mb-6">

Daftar Menu

</h1>

<div class="grid md:grid-cols-2 gap-5 mb-8">

<input
v-model="search"
placeholder="Cari menu..."
class="border p-3 rounded-lg"
/>

<select
v-model="kategori"
class="border p-3 rounded-lg"
>

<option value="">Semua Kategori</option>

<option>Coffee</option>

<option>Non Coffee</option>

<option>Snack</option>

<option>Dessert</option>

</select>

</div>

<div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

<MenuCard

v-for="item in hasil"

:key="item.id"

:menu="item"

@add="tambah"

 />

</div>

</div>

</template>

<script setup>

import { ref,onMounted,computed } from 'vue'

import api from '../services/api'

import MenuCard from '../components/MenuCard.vue'

import { cart } from '../store/cart'

const menu=ref([])

const search=ref('')

const kategori=ref('')

const load=async()=>{

const res=await api.get('/menu')

menu.value=res.data

}

onMounted(load)

const hasil=computed(()=>{

return menu.value.filter(item=>{

const cocokNama=item.nama.toLowerCase().includes(search.value.toLowerCase())

const cocokKategori=!kategori.value || item.kategori===kategori.value

return cocokNama && cocokKategori

})

})

const tambah=(item)=>{

cart.add(item)

alert("Menu ditambahkan ke keranjang")

}

</script>