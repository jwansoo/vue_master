// eslint-disable-next-line vue/multi-word-component-names
<script setup lang="ts">
import { useErrorStore } from '@/stores/error'
import {tasksWithProjectsQuery} from '@/utils/supaQueries'
import type { tasksWithProjects } from '@/utils/supaQueries'
import { columns } from '@/utils/tableColumns/tasksColumns'
usePageStore().pageData.title = 'My Tasks'

const tasks = ref<tasksWithProjects | null>(null)
const getTasks = async () => {
  const { data, error,status } = await tasksWithProjectsQuery

  if (error) useErrorStore().setError({error,customCode:status})

  tasks.value = data
}

await getTasks()

</script>

<template>
  <DataTable v-if="tasks" :columns="columns" :data="tasks" />
</template>
