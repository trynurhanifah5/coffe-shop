<template>
  <section class="bg-gradient-to-r from-amber-900 to-amber-700 text-white">
    <div class="max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center">

      <div class="flex-1">
        <h1 class="text-5xl font-bold mb-4">
          Nikmati Kopi Favoritmu
        </h1>

        <p class="text-lg mb-8">
          Kopi berkualitas, minuman segar, dan camilan lezat dengan harga terjangkau.
        </p>

        <RouterLink
          to="/menu"
          class="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300"
        >
          Lihat Menu
        </RouterLink>
      </div>

      <div class="flex-1 flex justify-center mt-10 md:mt-0">
        <img
          src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600"
          class="rounded-2xl shadow-2xl w-full max-w-md"
        >
      </div>

    </div>
  </section>
</template>