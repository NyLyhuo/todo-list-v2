<script setup>
import { ref } from "vue";
import { useTodoStore } from "../stores/todoStore";

const circleFill = ref(false);
const newTodo = ref("");
const todo = useTodoStore();

const toggleCircle = () => {
  circleFill.value = !circleFill.value;
};

const handleAdd = () => {
  if (!newTodo.value.trim()) return;

  todo.addTodo(newTodo.value);
  newTodo.value = "";
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
          v-model="newTodo"
          type="text"
          placeholder="Add your note."
          class="flex-1 w-full rounded-md px-3 py-1.5 text-gray-900 outline -outline-offset-1 outline-gray-300 focus:outline-2 focus:outline-offset-2 focus:outline-primary"
        />
        <button
          @click="handleAdd"
          class="px-3 py-1.5 bg-primary text-white font-semibold text-base rounded-md shadow-xs hover:bg-primary-dark"
        >
          Add
        </button>
      </div>
    </div>
    <div class="sm:mx-auto sm:w-full sm:max-w-sm mt-5">
      <ul>
        <li
          v-for="(todoItem, index) in todo.todos"
          :key="index"
          class="flex items-center justify-between px-3 py-1.5 mt-2 rounded-md outline"
        >
          <div class="flex items-center space-x-3">
            <button @click="todo.toggleTodo(index)">
              <i :class="circleFill ? 'pi pi-circle-fill' : 'pi pi-circle'"></i>
            </button>
            <p :class="{ 'line-through': todoItem.complete }">
              {{ todoItem.title }}
            </p>
          </div>
          <button @click="todo.removeTodo">
            <i class="pi pi-trash hover:text-red-600"></i>
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
</style>