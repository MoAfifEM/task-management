// stores/workflowStore.ts
import { defineStore } from 'pinia'
import type { Workflow } from '../types/models'
import { workflows } from '../data/mockData'

export const useWorkflowStore = defineStore('workflow', {
  state: () => ({
    workflows: [] as Workflow[],
    workflow: {} as Workflow,
  }),

  actions: {
    loadWorkflows() {
      this.workflows = workflows
    },

    getWorkflowById(id: string): Workflow | undefined {
      return (this.workflow = this.workflows.find((p) => p.id === id) || ({} as Workflow))
    },

    updateWorkflowStatus(id: string, workflow: Workflow) {
      const index = this.workflows.findIndex((t) => t.id === id)
      if (index !== -1) {
        this.workflows[index] = { ...this.workflows[index], ...workflow }
      }
    },

    addWorkflow(workflow: Workflow) {
      this.workflows.push(workflow)
    },

    removeWorkflow(id: string) {
      this.workflows = this.workflows.filter((workflow) => workflow.id !== id)
    },

    selectWorkflow(workflow: Workflow, patientId: string) {
      this.workflow = workflow
      console.log('Selected workflow:', workflow)
      console.log('Patient ID:', patientId)
    },
  },
})
