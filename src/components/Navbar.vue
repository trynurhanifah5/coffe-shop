<template>

<nav class="bg-amber-900 text-white shadow">

<div class="max-w-7xl mx-auto flex justify-between items-center p-4">

<RouterLink
to="/"
class="text-2xl font-bold"
>

☕ Coffee Shop

</RouterLink>

<div class="space-x-6">

<RouterLink to="/">Home</RouterLink>

<router-link to="/produk">Menu</router-link>

<RouterLink to="/cart">Pesan</RouterLink>

<RouterLink to="/admin">Admin</RouterLink>

</div>

</div>

</nav>

</template>