<template>
  <ul class="m-outlet-features">
    <h6 class="o-features-title">{{ title }}</h6>
    <h1 class="m-title">{{ count }}</h1>
    <slot name="text"/>
  </ul>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    count: {
      type: Number,
      default: null
    }
  }
}
</script>
