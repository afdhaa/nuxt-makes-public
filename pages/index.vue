<template>
  <main>
    <Outlet/>
    <Onboard image="https://res.cloudinary.com/makeslaw-com/image/upload/v1545805257/Main/Web/assets/rawpixel-580218-unsplash.jpg">
      <div class="col-12 col-md-5 m-col-mobile">
        <h6 class="o-features-title text-white">Practices</h6>
        <h1 class="text-white mt-4">Corporate/Mergers &amp; Acquisitions</h1>
        <p class="m-lead pt-3 text-white">Makes &amp; Partners also handles significant asset disposal, foreign investment, and acquisition transactions, both on the buy-side and sell-side, and often in connection with our capital markets and privatization practice.</p>
        <el-button type="primary" class="m-btn-small m-btn-main m-btn-block text-white mt-2" @click="$router.push({ name: 'practices' })">Learn more</el-button>
      </div>
      <div class="col-12 col-md-5">
        <h6 class="o-features-title text-white">Services</h6>
        <div v-if="expertises.length <= 0" class="mt-4">
          <Loader :height="15" :width="60" class="mb-2" />
          <Loader :height="15" :width="80" class="mb-2" />
          <Loader :height="15" :width="60" class="mb-2" />
          <Loader :height="15" :width="70" class="mb-2" />
          <Loader :height="15" :width="90" class="mb-2" />
          <Loader :height="15" :width="50" class="mb-2" />
        </div>
        <div class="row mt-4">
          <div v-for="(list, index) in expertises" :key="index" class="col-12 col-md-12 m-block-list">
            <nuxt-link :to="{ name: 'practices-id', params: { id : `${list.slug}-${list.id}` } }" class="next-trans text-white">{{ list.title }}</nuxt-link>
          </div>
        </div>
        <el-button v-if="expertises.length > 0" type="primary" class="m-btn-small m-btn-main m-btn-block mt-3" @click="$router.push({ name: 'practices' })">View all practices</el-button>
      </div>
    </Onboard>
    <Onboard image="https://images.unsplash.com/photo-1496902526517-c0f2cb8fdb6a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8a8623f526569e949b73c4c7360d4532&auto=format&fit=crop&w=1950&q=80">
      <div class="col-12 col-md-5 m-col-mobile">
        <h6 class="o-features-title text-white">Resources</h6>
        <h1 class="text-white pt-3">We ensure that our clients will receive well formulated, strategic and transaction-specific advice.</h1>
      </div>
      <div class="col-12 col-md-5">
        <div class="m-article pt-0">
          <div v-if="articles.length <= 0" class="mt-4">
            <div v-for="i in 3" :key="i" class="mb-4">
              <Loader :height="15" :width="20" class="mb-2" />
              <Loader :height="17" />
              <Loader :height="17" :width="80" />
            </div>
          </div>
          <ul class="m-article-block">
            <li v-for="article in articles" :key="article.id" class="m-article-list">
              <nuxt-link :to="{ name: 'resources-id', params: { id : `${article.slug}-${article.id}`} }" class="m-article-link text-white">
                <Article
                  :meta="article.created_at | moment('MMMM DD, YYYY')"
                  :title="article.title"
                  class="text-white" />
              </nuxt-link>
            </li>
          </ul>
        </div>
        <el-button v-if="articles.length > 0" type="primary" class="m-btn-small m-btn-main m-btn-block text-white mt-2" @click="$router.push({ name: 'resources' })">View all</el-button>
      </div>
    </Onboard>
    <div class="m-section o-section m-bg-secondary">
      <div class="container m-container">
        <div class="row">
          <div class="col-12 col-md-7">
            <h6 class="o-features-title">About us</h6>
            <h1 class="mt-4">Independence - Innovation - Creativity</h1>
            <ul class="m-outlet-features mt-3">
              <li v-for="(list, index) in tabs" :key="index" class="m-list-features">
                <nuxt-link :to="{ name: list.url }" class="o-features-link">{{ list.title }}</nuxt-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import Outlet from '~/components/desk/Outlet.vue'
import Onboard from '~/components/desk/Onboard.vue'
import Article from '~/components/desk/Article.vue'
import Loader from '~/components/addons/Loader.vue'

export default {
  components: {
    Outlet,
    Onboard,
    Article,
    Loader
  },
  head() {
    return {
      title: 'Home | Makes & Partners'
    }
  },
  data() {
    return {
      articles: [],
      expertises: [],
      tabs: [
        {
          url: 'about-us',
          title: 'Our Firm'
        },
        {
          url: 'people',
          title: 'Our People'
        },
        {
          url: 'strategic-alliance',
          title: 'Strategic Alliance'
        }
      ]
    }
  },
  mounted() {
    this.getArticles()
    this.getExpertises()
  },
  methods: {
    async getArticles() {
      const { data } = await this.$axios.$get('posts', {
        params: {
          type: 'article',
          limit: 3
        }
      })
      this.articles = data
    },
    async getExpertises() {
      const { data } = await this.$axios.$get('posts', {
        params: {
          type: 'expertise',
          limit: 6
        }
      })
      this.expertises = data
    }
  }
}
</script>
