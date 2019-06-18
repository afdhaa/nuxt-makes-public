<template>
  <section class="m-outlet">
    <div class="m-outlet-container">
      <div :style="`background: url(${image}) center/cover`" class="m-outlet-onboard m-outlet-display"/>
      <div class="m-outlet-text">
        <div class="m-outlet-text-inner m-container-fluid">
          <div class="row">
            <slot />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      default: ''
    }
  }
}
</script>
