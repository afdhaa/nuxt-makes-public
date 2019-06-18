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
          {{ item.title }}
        </h1>
        <p v-if="item.terms.length > 0" class="m-lead mt-3">{{ item.terms[0].name }}</p>
      </Top>
    </section>
    <article class="m-post m-section o-section">
      <div class="container m-container">
        <div class="row">
          <div class="col-md-2">
            <ul class="list-unstyled">
              <li class="m-share-list">
                <a :href="articleURL" target="_blank" class="socicon-linkedin m-btn-share socicon"/>
              </li>
            </ul>
          </div>
          <div class="col-12 col-md-7">
            <div
              class="m-post-content"
              v-html="item.body" />
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
    return store.dispatch('posts/FETCH_ITEM', {
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
      title: `${this.item.title} | Makeslaw`
    }
  },
  computed: {
    ...mapGetters({
      item: 'posts/item'
    }),
    image() {
      return this.item.attachments.length > 0
        ? `${this.$store.getters['cloudinary']}/${
            this.item.attachments[0].provider_id
          }`
        : null
    },
    articleURL() {
      return `https://www.linkedin.com/shareArticle?mini=true&url=${
        process.env.appURL
      }${this.$route.fullPath}`
    }
  },
  methods: {
    getTerms(arr, taxonomy) {
      return arr.filter(item => item.taxonomy == taxonomy)
    }
  }
}
</script>
