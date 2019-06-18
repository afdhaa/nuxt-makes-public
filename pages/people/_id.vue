<template>
  <main>
    <section class="m-bg-secondary">
      <Top
        :image="image"
        back
        container="true"
        row="true"
        trow="true"
        col="true"
        capture="true"
        @to="$router.back()"
      >
        <h1 slot="title" class="m-post-title">
          {{ name }}
        </h1>
        <p class="m-lead mt-3">{{ item.role }}</p>
      </Top>
    </section>
    <article class="m-section o-section">
      <div class="container m-container">
        <div class="row">
          <div class="col-md-2">
            <ul class="list-unstyled">
              <li class="m-share-list">
                <a :href="'mailto:' + item.email" target="_blank" class="socicon-mail m-btn-share socicon"/>
              </li>
              <li class="m-share-list">
                <a :href="item.linkedin" target="_blank" class="socicon-linkedin m-btn-share socicon"/>
              </li>
            </ul>
          </div>
          <div class="col-12 col-md-7">
            <div
              class="m-post-content"
              v-html="item.biography" />
          </div>
        </div>
      </div>
    </article>
  </main>
</template>

<script>
import Top from '~/components/desk/Top'
import Count from '~/components/desk/Count'
import { mapGetters } from 'vuex'

export default {
  components: {
    Top,
    Count
  },
  fetch({ store, params: { id } }) {
    let param = id.split('-').pop()
    return store.dispatch('people/FETCH_ITEM', {
      id: param,
      params: {
        params: {
          with: 'user,attachments,terms'
        }
      }
    })
  },
  head() {
    return {
      title: `${this.name} | Makeslaw`
    }
  },
  computed: {
    ...mapGetters({
      item: 'people/item'
    }),
    name() {
      return `${this.item.first_name} ${this.item.last_name}`
    },
    image() {
      return this.item.attachments.length > 0
        ? `${this.$store.getters['cloudinary']}/${
            this.item.attachments[0].provider_id
          }`
        : null
    }
  },
  methods: {
    getTerms(arr, taxonomy) {
      return arr.filter(item => item.taxonomy == taxonomy)
    }
  }
}
</script>
