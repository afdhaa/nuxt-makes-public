<template>
  <div>
    <span v-if="rounded" :style="{ 'width': size + 'px', 'height': size + 'px' }" class="_rounded-preload _animated-preload"/>
    <span v-else :style="{ 'width': width + '%', 'height': height + 'px' }" class="_preload _animated-preload"/>
  </div>
</template>

<script>
export default {
  props: {
    width: {
      type: Number,
      default: 100
    },
    height: {
      type: Number,
      default: 10
    },
    size: {
      type: Number,
      default: 50
    },
    rounded: {
      type: Boolean,
      default: false
    }
  }
}
</script>
<style>
._preload {
  display: inline-block;
  margin-bottom: 5px;
}

._rounded-preload {
  display: inline-block;
  border-radius: 50%;
}

@keyframes placeHolderShimmer {
  0% {
    background-position: -468px 0;
  }
  100% {
    background-position: 468px 0;
  }
}

._animated-preload {
  animation-duration: 1s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-name: placeHolderShimmer;
  animation-timing-function: linear;
  background: #f6f7f8;
  background: linear-gradient(to right, #eeeeee 8%, #dddddd 18%, #eeeeee 33%);
  background-size: 800px 104px;
  position: relative;
}
</style>
