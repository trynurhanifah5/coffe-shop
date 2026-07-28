<template>
  <div class="min-h-screen bg-amber-50 p-8">

    <h1 class="text-3xl font-bold text-amber-800 mb-6">
      ☕ Menu Coffee Shop
    </h1>

    <div class="grid md:grid-cols-3 gap-6">

      <div
        v-for="item in produk"
        :key="item.id"
        class="bg-white rounded-xl shadow p-5"
      >

       <img
        v-if="item.gambar"
        :src="item.gambar"
        class="w-full h-48 object-cover rounded-xl mb-4"
        />

        <div
        v-else
        class="text-6xl text-center mb-4">
        ☕
        </div>
        
        <h2 class="text-xl font-bold">
          {{ item.nama }}
        </h2>

        <p>
          Kategori: {{ item.kategori }}
        </p>

        <p class="font-bold mt-2">
          Rp {{ item.harga }}
        </p>

        <p>
          Stok: {{ item.stok }}
        </p>


        <button
          @click="tambahCart(item)"
          class="mt-4 bg-amber-700 text-white px-4 py-2 rounded"
        >
          + Pesan
        </button>


      </div>

    </div>

  </div>
</template>


<script setup>

import { ref, onMounted } from "vue"
import api from "../api"


const produk = ref([])


onMounted(async()=>{

  try{

    const response = await api.get("")

    produk.value = response.data

    console.log(response.data)

  }catch(error){

    console.log(error)

  }

})


function tambahCart(item){

  let cart =
  JSON.parse(localStorage.getItem("cart")) || []


  cart.push({

    id:item.id,
    nama:item.nama,
    harga:item.harga,
    qty:1

  })


  localStorage.setItem(
    "cart",
    JSON.stringify(cart)
  )


  alert(item.nama+" masuk keranjang")

}

</script>