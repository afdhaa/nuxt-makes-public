<template>
  <main>
    <section>
      <Top
        :titles="['Practices']"
        container="true"
        row="true"
        trow="true"
        col="true"
        capture="true"
        subtitle="The market recognizes us for our role in advising and bringing to a successful completion high profile and complex corporate commercial transactions."
        scroll
        image="https://res.cloudinary.com/makeslaw-com/image/upload/v1550491087/Main/Web/assets/Makes_-_Practices.jpg" />
    </section>
    <section id="next" class="m-section o-section m-bg-secondary">
      <div class="container m-container">
        <div class="row">
          <div class="col-12 col-md-7">
            <div class="m-pane-block mt-0 mb-5">
              <div>
                <p>Our legal advice is provided within the context of our client's business, ensuring that the client receives well-formulated, strategic and transaction-specific advice. This has often resulted in the development of legal products and structures appropriate to the needs of our clients which are not only accepted but also well-regarded in the market and by the appropriate regulatory agencies.</p>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-7">
            <div>
              <div v-for="tag in tags.data" :key="tag.id + tag.slug" class="row">
                <div class="col-12 col-md-12">
                  <h6 class="o-features-title mt-5 mb-4">{{ tag.name }}</h6>
                  <div class="row">
                    <div v-for="(list, index) in filterExpertises(tag.id)" :key="'specialised'+index" class="col-12 col-md-6 m-block-list">
                      <nuxt-link v-if="list.body" :to="{ name: 'practices-id', params: { id : `${list.slug}-${list.id}` } }" class="m-block-list-link next-trans">{{ list.title }}</nuxt-link>
                      <span v-else class="m-block-list-link next-trans">{{ list.title }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-4 offset-md-1">
            <div class="m-pane-default">
              <div class="m-pane-inner-default">
                <blockquote class="blockquote">
                  <p class="m-lead m-lead-white">Makes &amp; Partners’ proficiency in Indonesian corporate law is evidenced by results, and the trust many businesses put on us to advise on their transactions.</p>
                  <footer class="blockquote-footer m-lead-white"><cite>Yozua Makes</cite></footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import Top from '~/components/desk/Top.vue'
import Tab from '~/components/desk/Tab.vue'
import Loader from '~/components/addons/Loader.vue'
import collect from 'collect.js'

import { mapGetters } from 'vuex'

export default {
  components: {
    Top,
    Tab,
    Loader
  },
  head() {
    return {
      title: 'Area of Expertise | Makes & Partners'
    }
  },
  data() {
    return {
      tagParameters: {
        params: {
          taxonomy: 'expertise_tag',
          limit: 100
        }
      },
      expertiseParameters: {
        limit: 100,
        type: 'expertise',
        with: 'terms'
      },
      fetchingTags: false,
      loading: false
    }
  },
  computed: {
    ...mapGetters({
      tags: 'terms/items',
      expertises: 'posts/items'
    }),
    loadingTags() {
      return this.tags.data.length === 0
    },
    loadingExpertise() {
      return this.articles.data.length === 0
    }
  },
  mounted() {
    this.getTags()
    this.getExpertises()
  },
  methods: {
    async getTags() {
      try {
        await this.$store.dispatch('terms/FETCH_ITEMS', this.tagParameters)
      } catch (e) {
        this.$notify.error({
          title: 'Error',
          message: `${e.response.status} (${e.response.statusText})`
        })
      }
    },
    async getExpertises(params) {
      try {
        this.loading = true
        let query = { ...this.query, ...this.expertiseParameters, ...params }
        await this.$store.dispatch('posts/FETCH_ITEMS', { params: query })
        this.loading = false
      } catch (e) {
        this.loading = false
        this.$notify.error({
          title: 'Error',
          message: `${e.response.status} (${e.response.statusText})`
        })
      }
    },
    filterExpertises(tag) {
      const collections = collect(this.expertises.data)

      return collections
        .filter(value =>
          collect(value.terms).contains(value => value.id == tag)
        )
        .all()
    }
  }
}
</script>
