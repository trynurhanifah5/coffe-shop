<template>
<div class="min-h-screen bg-gray-100 p-6">

    <h1 class="text-3xl font-bold mb-6">
        💳 Checkout
    </h1>


    <div class="grid md:grid-cols-2 gap-6">


        <!-- Form Pembeli -->
        <div class="bg-white p-6 rounded-xl shadow">

            <h2 class="text-xl font-bold mb-4">
                Data Pembeli
            </h2>


            <input
            v-model="nama"
            placeholder="Nama Lengkap"
            class="w-full border p-3 rounded mb-3">


            <textarea
            v-model="alamat"
            placeholder="Alamat"
            class="w-full border p-3 rounded mb-3">
            </textarea>


            <input
            v-model="hp"
            placeholder="Nomor HP"
            class="w-full border p-3 rounded mb-3">


            <select
            v-model="pembayaran"
            class="w-full border p-3 rounded">

                <option>
                    Transfer Bank
                </option>

                <option>
                    COD
                </option>

                <option>
                    E-Wallet
                </option>

            </select>


        </div>



        <!-- Ringkasan -->
        <div class="bg-white p-6 rounded-xl shadow">


            <h2 class="text-xl font-bold mb-4">
                Ringkasan Belanja
            </h2>


            <div
            v-for="item in cart"
            :key="item.id"
            class="flex justify-between border-b py-3">


                <span>
                    {{item.nama}} x {{item.qty}}
                </span>


                <span>
                    Rp {{item.harga * item.qty}}
                </span>


            </div>



            <h2 class="text-xl font-bold mt-5">

                Total :
                Rp {{total}}

            </h2>



            <button
            @click="pesan"
            class="w-full mt-5 bg-green-600 text-white p-3 rounded-lg">

                Pesan Sekarang

            </button>


        </div>


    </div>


</div>
</template>



<script setup>

import {ref,computed} from "vue"
import {useRouter} from "vue-router"



const router = useRouter()


const cart = ref(
JSON.parse(localStorage.getItem("cart")) || []
)



const nama = ref("")
const alamat = ref("")
const hp = ref("")
const pembayaran = ref("COD")



const total = computed(()=>{

return cart.value.reduce(
(a,b)=>a+(b.harga*b.qty),0
)

})



function pesan(){


if(!nama.value || !alamat.value || !hp.value){

alert("Data pembeli belum lengkap")
return

}


alert(
"Pesanan berhasil dibuat!"
)


localStorage.removeItem("cart")


router.push("/")


}



</script>