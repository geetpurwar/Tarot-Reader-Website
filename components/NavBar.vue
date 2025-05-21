<template>
  <header class="bg-indigo-800 text-white p-4">
    <div class="container mx-auto flex justify-between items-center">
      <h1 class="text-2xl font-bold">Tarot Reader</h1>
      
      <nav>
        <ul class="flex space-x-6">
          <li><NuxtLink to="/" class="hover:text-indigo-200 transition">Home</NuxtLink></li>
          <li><NuxtLink to="/services" class="hover:text-indigo-200 transition">Services</NuxtLink></li>
          <li><NuxtLink to="/about" class="hover:text-indigo-200 transition">About</NuxtLink></li>
          <li><a href="#" @click.prevent="toggleContactModal" class="hover:text-indigo-200 transition">Contact</a></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup>
const emit = defineEmits(['openContact'])

const toggleContactModal = () => {
  emit('openContact')
}
</script>
