<template>

<div>

<!-- HERO -->
<section class="bg-amber-800 text-white py-20">

<div class="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

<div>

<h1 class="text-5xl font-bold mb-5">
Nikmati Kopi Favoritmu
</h1>

<p class="text-lg mb-8">
Kopi berkualitas, minuman segar, dan camilan lezat dengan harga terjangkau.
</p>


<router-link
to="/produk"
class="bg-yellow-400 text-black px-6 py-3 rounded-lg font-bold hover:bg-yellow-300">

Lihat Menu

</router-link>


</div>


<img
src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085"
class="rounded-3xl shadow-xl w-full h-[400px] object-cover"
/>


</div>

</section>



<!-- KATEGORI -->

<section class="max-w-7xl mx-auto px-6 py-16">


<h2 class="text-3xl font-bold mb-8">
Kategori Menu
</h2>


<div class="grid grid-cols-2 md:grid-cols-4 gap-6">


<div
v-for="item in kategori"
:key="item.nama"
class="bg-white rounded-xl shadow hover:shadow-xl overflow-hidden">


<img
:src="item.gambar"
class="w-full h-36 object-cover"
/>


<div class="p-5 text-center">

<h3 class="font-bold text-lg">
{{item.nama}}
</h3>

</div>


</div>


</div>


</section>



<!-- MENU FAVORIT -->

<section class="bg-gray-100 py-16">


<div class="max-w-7xl mx-auto px-6">


<h2 class="text-3xl font-bold mb-8">
☕ Menu Favorit
</h2>



<div class="grid md:grid-cols-3 gap-6">


<div
v-for="item in produk"
:key="item.id"
class="bg-white rounded-xl shadow overflow-hidden">


<img
:src="item.gambar"
class="w-full h-52 object-cover"
/>


<div class="p-5">


<h3 class="text-xl font-bold">
{{item.nama}}
</h3>


<p class="text-gray-600">
{{item.kategori}}
</p>


<p class="font-bold text-amber-700 mt-2">
Rp {{item.harga}}
</p>


<router-link
to="/produk"
class="inline-block mt-4 bg-amber-700 text-white px-4 py-2 rounded">

Pesan

</router-link>


</div>


</div>


</div>


</div>


</section>




<!-- KEUNGGULAN -->

<section class="max-w-7xl mx-auto px-6 py-16">


<h2 class="text-3xl font-bold text-center mb-10">
Kenapa Pilih Coffee Shop Kami?
</h2>


<div class="grid md:grid-cols-3 gap-6">


<div class="bg-white rounded-xl shadow p-6 text-center">

<div class="text-5xl">
☕
</div>

<h3 class="font-bold text-xl mt-4">
Kopi Berkualitas
</h3>

<p>
Menggunakan biji kopi pilihan.
</p>

</div>



<div class="bg-white rounded-xl shadow p-6 text-center">

<div class="text-5xl">
🚀
</div>

<h3 class="font-bold text-xl mt-4">
Pelayanan Cepat
</h3>

<p>
Pesanan mudah dan praktis.
</p>

</div>



<div class="bg-white rounded-xl shadow p-6 text-center">

<div class="text-5xl">
💰
</div>

<h3 class="font-bold text-xl mt-4">
Harga Terjangkau
</h3>

<p>
Nikmati kopi favoritmu.
</p>

</div>


</div>


</section>




<!-- PROMO -->

<section class="bg-yellow-400 py-12 text-center">


<h2 class="text-3xl font-bold">
Promo Hari Ini 🎉
</h2>


<p class="mt-3">
Diskon 20% menu pilihan Coffee Shop
</p>


<router-link
to="/produk"
class="inline-block mt-5 bg-amber-800 text-white px-6 py-3 rounded-lg">

Pesan Sekarang

</router-link>


</section>


</div>

</template>



<script setup>

import {ref,onMounted} from "vue"
import api from "../api"



const kategori=[

{
nama:"Coffee",
gambar:"https://images.unsplash.com/photo-1510707577719-ae7c14805e3a"
},

{
nama:"Non Coffee",
gambar:"https://images.unsplash.com/photo-1515823064-d6e0c04616a7"
},

{
nama:"Snack",
gambar:"https://images.unsplash.com/photo-1555507036-ab1f4038808a"
},

{
nama:"Dessert",
gambar:"https://images.unsplash.com/photo-1551024506-0bccd828d307"
}

]



const produk=ref([])



onMounted(async()=>{

try{

const res=await api.get("")

produk.value=res.data.slice(0,3)

}catch(error){

console.log(error)

}

})


</script>