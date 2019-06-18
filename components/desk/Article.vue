<template>
  <div class="row">
    <div class="col-12 col-md-12">
      <div class="m-meta mb-2">
        <span v-if="highlights" class="mr-1">Highlights</span>
        <span>{{ meta }}</span>
      </div>
      <h3 class="m-title">{{ title }}
        <span class="m-article-exlink">
          <svg width="24" height="24" viewBox="0 0 36 36" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="external-link">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
            <polyline points="15 3 21 3 21 9"/>
            <line x1="10" y1="14" x2="21" y2="3"/>
          </svg>
        </span>
      </h3>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    meta: {
      type: String,
      default: ''
    },
    highlights: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    }
  }
}
</script>
