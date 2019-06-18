<template>
  <div id="fullpage" class="root">
    <Header v-if="$route.name !== 'search'" id="top"/>
    <nuxt/>
    <Footer v-if="$route.name !== 'search'" @scrollTo="scrollTo($event)"/>
    <!-- <div class="m-popup m-popup-panel">
      <div class="m-popup-inner">
        <h3 class="m-popup-title mb-2">We use cookies</h3>
        <span class="text-white">We use cookies to ensure that we give you the best experience on our website. </span>
        <a class="m-popup-x">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x">
            <line x1="18" y1="6" x2="6" y2="18"/>
            <line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </a>
      </div>
    </div> -->
  </div>
</template>

<script>
import Header from '~/components/base/Header'
import Footer from '~/components/base/Footer'

export default {
  components: {
    Header,
    Footer
  }
}
</script>
