<script setup>
import { ref } from "vue";

const circleFill = ref(false);

const toggleCircle = () => {
  circleFill.value = !circleFill.value;
};
</script>

<template>
  <div class="min-h-full flex flex-1 flex-col justify-center px-6 py-12">
    <div class="sm:mx-auto sm:w-full sm:mix-w-sm">
      <img src="../assets/vue.svg" class="mx-auto h-20" />
      <h1
        class="text-center text-2xl/9 font-bold mt-10 text-primary tracking-tight"
      >
        To Do
      </h1>
    </div>
    <div class="sm:mx-auto sm:w-full sm:max-w-sm mt-6">
      <div class="flex items-center space-x-2">
        <input
          type="text"
          placeholder="Add your note."
          class="flex-1 w-full rounded-md px-3 py-1.5 text-gray-900 outline -outline-offset-1 outline-gray-300 focus:outline-2 focus:outline-offset-2 focus:outline-primary"
        />
        <button
          class="px-3 py-1.5 bg-primary text-white font-semibold text-base rounded-md shadow-xs hover:bg-primary-dark"
        >
          Add
        </button>
      </div>
    </div>
    <div class="sm:mx-auto sm:w-full sm:max-w-sm mt-5">
      <ul>
        <li
          class="flex items-center justify-between px-3 py-1.5 rounded-md outline"
        >
          <div class="flex items-center space-x-3">
            <button @click="toggleCircle">
              <i :class="circleFill ? 'pi pi-circle-fill' : 'pi pi-circle'"></i>
            </button>
            <p>I am who I am</p>
          </div>
          <button>
            <i class="pi pi-trash hover:text-red-600"></i>
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
</style>