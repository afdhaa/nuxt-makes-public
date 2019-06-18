<template>
  <ul :class="{ 'm-features': block }" class="m-outlet-features">
    <h6 class="o-features-title mb-4">{{ title }}</h6>
    <li v-for="(list, index) in items" :key="index" :class="{ 'm-list-features': features }">
      <a class="o-features-link">{{ list.title }}</a>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Browse by'
    },
    block: {
      type: String,
      default: ''
    },
    features: {
      type: String,
      default: ''
    },
    items: {
      type: Array,
      required: true
    }
  }
}
</script>
