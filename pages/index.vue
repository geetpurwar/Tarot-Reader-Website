<template>
  <div class="container mx-auto p-8">
    <h1 class="text-4xl font-bold mb-6 text-center">Tarot Reader</h1>
    
    <div class="grid md:grid-cols-3 gap-8">
      <div v-for="service in services" :key="service.id" class="bg-white p-6 rounded-lg shadow-md">
        <h2 class="text-2xl font-semibold mb-2">{{ service.title }}</h2>
        <p class="text-gray-600 mb-4">{{ service.description }}</p>
        <div class="font-bold text-xl mb-4">${{ service.price.toFixed(2) }}</div>
        <button class="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition">
          Book Now
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const services = [
  {
    id: 1,
    title: "Personal Tarot Reading",
    description: "Illuminate possibilities and make confident decisions with a personalized tarot reading session.",
    price: 49.99
  },
  {
    id: 2,
    title: "Relationship Guidance",
    description: "Gain clarity on relationships with a focused tarot reading that helps you understand patterns.",
    price: 59.99
  },
  {
    id: 3,
    title: "Future Path Reading",
    description: "Shine a light through the mental fog with a comprehensive tarot reading focused on your life path.",
    price: 69.99
  }
]
</script>

<style scoped>
.container {
  max-width: 1200px;
}
</style>
