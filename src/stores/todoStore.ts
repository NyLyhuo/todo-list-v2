import { defineStore } from "pinia";
interface Todo {
    title: string;
    complete: boolean;
}

export const useTodoStore = defineStore("todo", {
  state: () => ({
    todos: [] as Todo[],
  }),

  actions: {
    addTodo(title: string) {
      this.todos.push({ title: title, complete: false });
    },
    toggleTodo(index: number) {
      this.todos[index].complete = !this.todos[index].complete;
    },
    removeTodo(index: number) {
      this.todos.splice(index, 1)
    }
  },
});
