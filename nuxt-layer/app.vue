<template>
  <div>
    <NuxtRouteAnnouncer />
    {{ slugify('Test Test') }}
  </div>
</template>
<script setup>
import { slugify } from '@layer/utilities/slugify.js'
</script>
