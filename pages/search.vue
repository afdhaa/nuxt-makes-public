<template>
  <section class="m-section">
    <a class="m-page-close" @click.prevent="$router.back()">
      <svg width="24" height="24" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x">
        <line x1="18" y1="6" x2="6" y2="18"/>
        <line x1="6" y1="6" x2="18" y2="18"/>
      </svg>
    </a>
    <div class="container m-container">
      <div class="row">
        <div class="col-12 col-md-12">
          <div class="m-search-form">
            <div class="m-search-inner">
              <el-input ref="input" v-model="keyword" placeholder="I’m looking for" @input="search">
                <el-button slot="suffix" class="m-btn-search" @click="getArticles(keyword)">
                  <svg viewBox="0 0 32 32" width="20" height="20" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.4" class="m-search-icon">
                    <circle cx="14" cy="14" r="12"/>
                    <path d="M23 23 L30 30"/>
                  </svg>
                </el-button>
              </el-input>
            </div>
          </div>
          <div class="m-search-result">
            <div class="m-article">
              <ul class="m-article-block">
                <li v-for="article in articles" :key="article.id" class="m-article-list">
                  <nuxt-link :to="{ name: 'resources-id', params: { id: `${article.slug}-${article.id}`} }" class="m-article-link">
                    <Article
                      :meta="article.created_at | moment('MMMM DD, YYYY')"
                      :title="article.title"/>
                  </nuxt-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Article from '~/components/desk/Article.vue'
import debounce from 'debounce'

export default {
  components: {
    Article
  },
  head() {
    return {
      title: 'Search'
    }
  },
  data() {
    return {
      keyword: '',
      articles: []
    }
  },
  mounted() {
    this.$refs.input.focus()
  },
  methods: {
    search: debounce(function() {
      this.getArticles(this.keyword)
    }, 500),
    async getArticles(search) {
      const { data } = await this.$axios.$get('posts', {
        params: {
          type: 'article',
          limit: 5,
          search: search
        }
      })
      this.articles = data
    }
  }
}
</script>
