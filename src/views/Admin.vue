<template>

<div class="min-h-screen bg-amber-50 p-8">


<h1 class="text-3xl font-bold text-amber-800 mb-6">
☕ Admin Coffee Shop
</h1>


<!-- Form -->

<div class="bg-white p-6 rounded-xl shadow mb-8">


<h2 class="text-xl font-bold mb-4">
{{ editMode ? "Edit Menu" : "Tambah Menu" }}
</h2>


<input
v-model="form.nama"
placeholder="Nama Menu"
class="border p-3 rounded w-full mb-3"
/>


<input
v-model="form.harga"
type="number"
placeholder="Harga"
class="border p-3 rounded w-full mb-3"
/>


<input
v-model="form.kategori"
placeholder="Kategori"
class="border p-3 rounded w-full mb-3"
/>


<input
v-model="form.stok"
type="number"
placeholder="Stok"
class="border p-3 rounded w-full mb-3"
/>

<input
v-model="form.gambar"
placeholder="URL Gambar Coffee"
class="border p-3 rounded w-full mb-3"
/>

<button
@click="simpan"
class="bg-amber-700 text-white px-5 py-3 rounded">

{{ editMode ? "Update" : "Tambah" }}

</button>


</div>



<!-- Data Produk -->

<div class="bg-white p-6 rounded-xl shadow">


<h2 class="text-xl font-bold mb-5">
Daftar Menu
</h2>


<div
v-for="item in produk"
:key="item.id"
class="border-b py-4 flex justify-between">


<div>

<h3 class="font-bold text-lg">
{{item.nama}}
</h3>


<p>
Rp {{item.harga}}
</p>


<p>
Kategori: {{item.kategori}}
</p>


<p>
Stok: {{item.stok}}
</p>


</div>



<div class="flex gap-3">


<button
@click="edit(item)"
class="bg-yellow-500 text-white px-4 py-2 rounded">

Edit

</button>


<button
@click="hapus(item.id)"
class="bg-red-600 text-white px-4 py-2 rounded">

Hapus

</button>


</div>


</div>


</div>


</div>

</template>



<script setup>

import {ref,onMounted} from "vue"
import api from "../api"



const produk = ref([])


const editMode = ref(false)



const form = ref({

nama:"",
harga:"",
kategori:"",
stok:"",
gambar:""

})



let editId = null


async function ambilData(){

const res = await api.get("")

produk.value = res.data

}


onMounted(()=>{

ambilData()

})



async function simpan(){

try{

let data={

nama:form.value.nama,
harga:Number(form.value.harga),
kategori:form.value.kategori,
stok:Number(form.value.stok),
gambar:form.value.gambar || ""

}



if(editMode.value){

await api.put(
`/${editId}`,
data
)

alert("Update berhasil")


}else{


await api.post(
"",
data
)

alert("Tambah berhasil")


}


reset()

await ambilData()


}catch(error){

console.log(error)

alert("Gagal menyimpan data")

}


}



function edit(item){

editMode.value=true

editId=item.id


form.value={

nama:item.nama,
harga:item.harga,
kategori:item.kategori,
stok:item.stok,
gambar:item.gambar || ""

}


}




async function hapus(id){

try{

if(confirm("Yakin hapus menu ini?")){

await api.delete(`/${id}`)

ambilData()

}

}catch(error){

console.log(error)

}

}





function reset(){

form.value={

nama:"",
harga:"",
kategori:"",
stok:"",
gambar:""

}


editMode.value=false

editId=null

}

</script>