<template>
  <div :class="{ 'm-container': container }" class="container m-container">
    <div :class="{ 'f-row': row, 't-row': trow }" class="row">
      <div :class="{ 'col-md-6': image, 'f-col': col }" class="col-12 col-sm-12">
        <div class="m-outlet-spacer">
          <div class="m-outlet-column">
            <a v-if="back" class="m-link-back mb-5" @click="$emit('to')">
              <span>
                <svg width="24" height="24" viewBox="0 0 36 36" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-left">
                  <line x1="19" y1="12" x2="5" y2="12"/>
                  <polyline points="12 19 5 12 12 5"/>
                </svg>
              </span>
              <span class="m-subtitle">Back</span>
            </a>
            <template v-if="titles">
              <h1 v-for="title in titles" :key="title" class="m-headline">
                <span>{{ title }}</span>
              </h1>
            </template>
            <slot name="title"/>
            <p v-if="subtitle" class="m-lead m-outlet-paragraph m-sub-trans mt-4">{{ subtitle }}</p>
            <a v-anchor:next v-if="scroll" class="m-outlet-icon">
              Learn More
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="12" y1="5" x2="12" y2="19"/>
                <polyline points="19 12 12 19 5 12"/>
              </svg>
            </a>
          </div>
          <slot/>
        </div>
      </div>
      <div v-if="image" :class="{ 'f-col': col, 'm-capture-area': capture }" class="col-12 col-md-6">
        <div class="m-capture">
          <div :style="`background: url(${image});`" class="m-capture-display m-capture-trans"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    container: {
      type: String,
      default: ''
    },
    row: {
      type: String,
      default: ''
    },
    trow: {
      type: String,
      default: ''
    },
    col: {
      type: String,
      default: ''
    },
    spacer: {
      type: String,
      default: ''
    },
    capture: {
      type: String,
      default: ''
    },
    back: {
      type: Boolean,
      default: false
    },
    titles: {
      type: Array,
      default: function() {
        return null
      }
    },
    subtitle: {
      type: String,
      default: ''
    },
    scroll: {
      type: Boolean,
      default: false
    },
    image: {
      type: String,
      default: ''
    }
  }
}
</script>
