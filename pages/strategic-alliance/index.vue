<template>
  <main>
    <section class="m-section m-bg-secondary">
      <div class="container m-container">
        <div class="row">
          <div class="col-12 col-md-12">
            <h1 class="m-headline mb-5">
              <span>Offices</span>
            </h1>
            <div class="row white-map">
              <div class="col-12 col-md-3">
                <Accord @change="selected = $event"/>
              </div>
              <div class="col-12 col-md-9">
                <div class="m-img-spacer">
                  <img src="https://res.cloudinary.com/makeslaw-com/image/upload/v1539803794/Main/Web/assets/asia-map-edit.svg" alt="Strategic Alliance" class="m-img">
                  <div class="m-location">
                    <span v-for="(point, index) in location" :key="index" :class="[selected == point.name ? 'is-active': '', point.class]" class="m-point"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import Top from '~/components/desk/Top'
import Tab from '~/components/desk/Tab'
import Accord from '~/components/addons/Accord'

export default {
  components: {
    Top,
    Tab,
    Accord
  },
  head() {
    return {
      title: 'Strategic Alliance | Makes & Partners'
    }
  },
  data() {
    return {
      selected: 1,
      categories: [
        { title: 'Our Philosophy' },
        { title: 'Our Social Responsibilities' },
        { title: 'Our Relationships' }
      ],
      location: [
        { class: 'd-1', name: 1 },
        { class: 'd-2', name: 2 },
        { class: 'd-3-1', name: 3 },
        { class: 'd-3-2', name: 3 },
        { class: 'd-4', name: 4 },
        { class: 'd-5', name: 5 },
        { class: 'd-6', name: 6 }
      ]
    }
  }
}
</script>
