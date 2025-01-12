<template>
  <AuthLayout>
    <AppErrorPage v-if="errorStore.activeError"/>
    <router-view v-else v-slot="{Component,route}">
    <Suspense v-if="Component" :timeout="0">
      <Component :is="Component" :key="route.name"></Component>
      <template #fallback>
        <span>Loading...</span>
      </template>
    </Suspense>
  </router-view>
  </AuthLayout>
</template>
<script setup lang="ts">
const errorStore=useErrorStore()
onErrorCaptured((error)=>{
errorStore.setError({error})
})


</script>

<style lang="scss" scoped>

</style>
