<template>

<div class="min-h-screen bg-amber-50 p-8">


<h1 class="text-3xl font-bold text-amber-800 mb-6">
🛒 Keranjang Coffee
</h1>



<div 
v-if="cart.length===0"
class="bg-white p-6 rounded-xl shadow text-center">

Belum ada pesanan ☕

<router-link
to="/produk"
class="block mt-4 text-amber-700 font-bold">

Lihat Menu

</router-link>

</div>



<div
v-else
class="bg-white rounded-xl shadow p-6">


<div
v-for="item in cart"
:key="item.id"
class="flex justify-between items-center border-b py-4">



<div>

<h2 class="font-bold text-lg">
{{item.nama}}
</h2>


<p>
Rp {{formatRupiah(item.harga)}}
</p>


</div>



<div class="flex items-center gap-3">


<button
@click="kurang(item)"
class="bg-gray-200 px-3 py-1 rounded">

-

</button>



<span class="font-bold">
{{item.qty}}
</span>



<button
@click="tambah(item)"
class="bg-amber-700 text-white px-3 py-1 rounded">

+

</button>



<button
@click="hapus(item.id)"
class="bg-red-600 text-white px-3 py-1 rounded">

Hapus

</button>


</div>


</div>



<div class="mt-6 text-right">


<h2 class="text-xl font-bold">

Total :
Rp {{formatRupiah(total)}}

</h2>



<router-link
to="/checkout"
class="inline-block mt-4 bg-green-600 text-white px-6 py-3 rounded-lg">

Checkout

</router-link>


</div>


</div>


</div>

</template>



<script setup>

import {ref,computed} from "vue"



const cart = ref(

JSON.parse(localStorage.getItem("cart")) || []

)



function simpan(){

localStorage.setItem(
"cart",
JSON.stringify(cart.value)
)

}



function tambah(item){

item.qty++

simpan()

}



function kurang(item){


if(item.qty>1){

item.qty--

}else{

hapus(item.id)

}


simpan()

}



function hapus(id){


cart.value =
cart.value.filter(
(item)=>item.id!==id
)


simpan()


}



const total = computed(()=>{


return cart.value.reduce(

(total,item)=>
total+(item.harga*item.qty),

0

)


})




function formatRupiah(angka){

return new Intl.NumberFormat(
"id-ID"
).format(angka)

}


</script>