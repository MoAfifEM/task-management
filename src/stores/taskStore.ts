// stores/taskStore.ts
import { defineStore } from 'pinia'
import type { Task } from '../types/models'
import { tasks } from '../data/mockData'

export const useTaskStore = defineStore('task', {
  state: () => ({
    tasks: [] as Task[],
    task: {} as Task,
  }),

  actions: {
    loadTasks() {
      this.tasks = tasks
    },

    getTaskById(id: string): Task | undefined {
      return (this.task = this.tasks.find((t) => t.id === id) || ({} as Task))
    },

    updateTaskStatus(id: string, task: Task) {
      const index = this.tasks.findIndex((t) => t.id === id)
      if (index !== -1) {
        this.tasks[index] = { ...this.tasks[index], ...task }
      }
    },

    addTask(task: Task) {
      this.tasks.push(task)
    },

    removeTask(id: string) {
      this.tasks = this.tasks.filter((task) => task.id !== id)
    },
  },
})
