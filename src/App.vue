<template>
  <main><router-view /></main>
</template>
<script setup lang="ts">
import { supabase } from '@/lib/supabaseClient'

console.log(supabase)

</script>

<style lang="scss" scoped>

</style>
