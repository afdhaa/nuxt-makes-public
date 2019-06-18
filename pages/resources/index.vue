<template>
  <main>
    <section class="m-section o-section m-bg-secondary">
      <div class="m-container-fluid">
        <div class="row">
          <div class="col-12 col-sm-12 col-md-4">
            <h1 class="m-headline">
              <span>Resources</span>
            </h1>
            <slot name="title"/>
            <p class="m-lead m-outlet-paragraph m-sub-trans mt-4">We ensure that our clients will receive well formulated, strategic and transaction-specific advice.</p>
          </div>
          <div class="col-12 col-sm-12 col-md-8">
            <div class="col-12 col-md-12">
              <div class="m-tab-top m-tab-resources">
                <h6 class="o-features-title mb-4">Browse by:</h6>
                <div v-if="loadingTags" class="row">
                  <div v-for="i in 3" :key="i" class="col-md-3">
                    <Loader :height="50" />
                  </div>
                </div>
                <el-tabs v-else :value="query.terms" @tab-click="filter({ terms: $event.name })">
                  <!-- <el-tab-pane name="all" label="All">
                    <span class="d-none">All</span>
                  </el-tab-pane>
                  -->
                  <el-tab-pane v-for="tag in tags.data" :key="tag" :name="tag.slug" :label="tag.name">
                    <span class="d-none">{{ tag.name }}</span>
                  </el-tab-pane>
                </el-tabs>
                <div v-if="loadingArticles && !isNull" class="mt-4">
                  <hr>
                  <div v-for="i in 3" :key="i" class="mb-4">
                    <Loader :height="15" :width="20" class="mb-2" />
                    <Loader :height="17" :width="80"/>
                    <Loader :height="17" :width="60" />
                  </div>
                </div>
                <div v-if="isNull" class="mt-5">
                  <p class="m-lead">Has no data.</p>
                </div>
                <div v-else class="row">
                  <div class="col-12 col-md-10">
                    <div v-loading="loading" class="m-article">
                      <ul class="m-article-block">
                        <li v-for="article in articles.data" :key="article.id" class="m-article-list">
                          <nuxt-link :to="{ name: 'resources-id', params: { id :`${article.slug}-${article.id}` } }" class="m-article-link">
                            <Article
                              :title="article.title"/>
                          </nuxt-link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="col-12 col-md-10">
                    <div class="m-pagination mt-4">
                      <el-pagination
                        :page-count="articles.meta.last_page"
                        :current-page="articles.meta.current_page"
                        layout="prev, pager, next"
                        background
                        @current-change="filter({ page: $event })" />
                    </div>
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
import Top from '~/components/desk/Top.vue'
import Tab from '~/components/desk/Tab.vue'
import Article from '~/components/desk/Article.vue'
import Loader from '~/components/addons/Loader.vue'
import { mapGetters } from 'vuex'
import filters from '~/mixins/filters'

export default {
  components: {
    Top,
    Tab,
    Article,
    Loader
  },
  mixins: [filters],
  head() {
    return {
      title: 'Resources | Makes & Partners'
    }
  },
  data() {
    return {
      active: 'all',
      tagParameters: {
        params: {
          taxonomy: 'article_tag',
          limit: 100
        }
      },
      articleParameters: {
        limit: 8,
        type: 'article',
        with: 'terms,attachments'
      },
      isNull: false,
      fetchingTags: false,
      loading: false
    }
  },
  computed: {
    ...mapGetters({
      tags: 'terms/items',
      articles: 'posts/items'
    }),
    loadingTags() {
      return this.tags.data.length === 0
    },
    loadingArticles() {
      return this.articles.data.length === 0
    }
  },
  watch: {
    query: {
      handler(val) {
        this.getArticles(val)
      },
      deep: true
    },
    active(val) {
      this.filter({ terms: val })
    }
  },
  mounted() {
    this.getTags()
    this.getArticles()
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
    async getArticles(params) {
      try {
        this.loading = true
        let query = { ...this.query, ...this.articleParameters, ...params }
        await this.$store.dispatch('posts/FETCH_ITEMS', { params: query })
        if (this.articles.data.length <= 0) {
          this.isNull = true
        } else {
          this.isNull = false
        }
        this.loading = false
      } catch (e) {
        this.loading = false
        this.$notify.error({
          title: 'Error',
          message: `${e.response.status} (${e.response.statusText})`
        })
      }
    },
    afterFilter() {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      })
    }
  }
}
</script>
