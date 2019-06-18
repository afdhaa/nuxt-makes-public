<template>
  <div class="">
    <div>
      <div class="row">
        <div class="col-12 col-md-12">
          <h2 class="m-title mb-5">{{ title }}</h2>
          <div class="row">
            <div class="col-12 col-md-5">
              <p class="m-lead">{{ headline }}</p>
            </div>
            <div class="col-12 col-md-6 offset-md-1">
              <p>{{ paragraph }}</p>
            </div>
          </div>
        </div>
        <!-- <div v-for="i in 3" :key="i" class="col-12 col-md-4">
          <div class="mt-5">
            <div class="m-capture">
              <div style="background: url(https://res.cloudinary.com/makeslaw-com/image/upload/v1539767884/Website/inaki-del-olmo-602632-unsplash.jpg)" class="m-capture-image"/>
            </div>
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    headline: {
      type: String,
      default: ''
    },
    paragraph: {
      type: String,
      default: ''
    }
  }
}
</script>
