<template>
  <main>
    <section>
      <Top
        :titles="['Our People']"
        container="true"
        row="true"
        trow="true"
        col="true"
        capture="true"
        subtitle="We are comprised of Indonesian and international lawyers (on full employment and not on a seconded basis) who work as a team."
        scroll
        image="https://res.cloudinary.com/makeslaw-com/image/upload/v1539767871/Main/Web/assets/rawpixel-633841-unsplash.jpg" />
    </section>
    <section
      id="next"
      class="m-section o-section m-bg-secondary"
    >
      <h1 class="d-none">Our People</h1>
      <div class="container m-container">
        <div class="row">
          <div class="col-12 col-md-7">
            <div class="m-pane-block mt-0 mb-5">
              <div>
                <p>We have a wealth of experience in international work having represented major multinational companies and international strategic and institutional investors in connection with their investments in Indonesia. Several of our practitioners have lived, studied and worked in the United States, Europe and various parts of Asia. In addition to Indonesian Language, our lawyers speak and read English. We value the integrity, ability, skill and opinion of each of our team members.</p>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-12">
            <div class="m-tab-top m-tab-resources">
              <h6 class="o-features-title mb-4">Browse by:</h6>
              <div
                v-if="fetchingRole"
                class="row"
              >
                <div
                  v-for="i in 4"
                  :key="i"
                  class="col-3"
                >
                  <Loader :height="50" />
                </div>
              </div>
              <el-tabs
                v-model="active"
                @tab-click="onTabChange(active)"
              >
                <el-tab-pane
                  v-for="role in roles.data"
                  :key="role.id"
                  :label="role.name"
                  :name="role.slug"
                >
                  <p
                    v-if="role.description"
                    class="mt-5"
                    v-html="role.description" />
                  <p class="d-none">{{ role.name }}</p>
                </el-tab-pane>
              </el-tabs>
              <div v-loading="fetchingPeople">
                <div
                  class="row mt-1"
                >
                  <div
                    v-for="(list, index) in people.data"
                    :key="'partners'+index"
                    class="col-12 col-md-6"
                  >
                    <div class="m-article m-article-people">
                      <ul class="m-article-block">
                        <li class="m-article-list m-article-people-list">
                          <nuxt-link
                            :to="{ name: 'people-id', params: { id : url(list.first_name, list.last_name, list.id) } }"
                            class="m-article-link m-article-people-link"
                          >
                            <div class="row">
                              <div
                                v-if="list.attachments.length > 0"
                                class="col-12 col-md-6"
                              >
                                <img
                                  :src="`${$store.getters['cloudinary']}/w_380/${list.attachments[0].provider_id}`"
                                  :alt="list.attachments[0].provider_id"
                                  :style="{ width: '100%' }"
                                  class="m-img p-img"
                                >
                              </div>
                              <div class="col-12 col-md-6">
                                <h5>{{ list.first_name }} {{ list.last_name }}</h5>
                                <p>{{ list.role }}</p>
                              </div>
                            </div>
                          </nuxt-link>
                        </li>
                      </ul>
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
import Loader from '~/components/addons/Loader.vue'
import filters from '~/mixins/filters'
import { mapGetters } from 'vuex'

export default {
  components: {
    Top,
    Tab,
    Loader
  },
  mixins: [filters],
  head() {
    return {
      title: 'Our People | Makes & Partners'
    }
  },
  data() {
    return {
      active: '',
      params: {
        limit: 100,
        with: 'terms,attachments',
        sort_by: 'priority',
        order: 'descend'
      },
      fetchingPeople: false,
      fetchingRole: false
    }
  },
  computed: {
    ...mapGetters({
      people: 'people/items',
      roles: 'terms/items'
    })
  },
  watch: {
    query: {
      handler(val) {
        this.getPeople(val)
      },
      deep: true
    }
  },
  mounted() {
    this.getRoles()
  },
  methods: {
    async getRoles() {
      this.fetchingRole = true
      await this.$store.dispatch('terms/FETCH_ITEMS', {
        params: {
          taxonomy: 'person_tag'
        }
      })
      this.fetchingRole = false
      if (this.roles.data.length > 0) {
        this.active = this.roles.data[0].slug
        this.getPeople({ tags: this.active })
      }
    },
    async getPeople(params) {
      this.fetchingPeople = true
      let query = { ...this.query, ...this.params, ...params }
      await this.$store.dispatch('people/FETCH_ITEMS', {
        params: query
      })
      this.fetchingPeople = false
    },
    url(first, last, id) {
      let str = `${first} ${last} ${id}`
      return str.split(' ').join('-')
    },
    onTabChange(event) {
      this.filter({ tags: event })
    }
  }
}
</script>
