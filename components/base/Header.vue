<template>
  <div>
    <!-- <header :class="{ 'm-header-absolute': $route.name === 'index' }" class="m-header-default"> -->
    <header class="m-header-default">
      <div class="m-header-inner">
        <div class="m-header-container">
          <div class="m-header-row">
            <div class="m-logo m-logo-onboard">
              <nuxt-link :to="{ name: 'index', query: { ref: 'home' } }">
                <img src="~static/makes-color.png" class="m-logo-display" alt="Makes &amp; Partners">
              </nuxt-link>
            </div>
            <ul class="m-nav list-unstyled">
              <li v-for="(list, index) in main" :key="'main'+index" class="m-nav-list">
                <nuxt-link :to="{ name: list.url, query: { ref: 'header' } }" class="m-nav-link">{{ list.title }}</nuxt-link>
              </li>
              <li class="m-nav-list">
                <el-popover
                  :visible-arrow="false"
                  popper-class="m-pop-menu"
                  transition="none"
                  placement="bottom"
                  width="100%"
                  trigger="hover">
                  <div class="m-container">
                    <div class="row">
                      <div class="col-12 col-md-8">
                        <div class="row m-row-menu">
                          <div v-for="list in resources" :key="list.id" class="col-12 col-md-4 m-block-list">
                            <nuxt-link :to="{ name: 'resources', query: { terms : list.slug } }" class="m-block-list-link m-block-menu-link next-trans">{{ list.name }}</nuxt-link>
                          </div>
                        </div>
                      </div>
                      <div class="col-12 col-md-3 offset-md-1 border-left">
                        <div class="m-menu-box">
                          <div class="m-menu-box-inner">
                            <img src="https://res.cloudinary.com/makeslaw-com/image/upload/v1544762754/Main/Web/assets/Makes_firm_profile.jpg" alt="" class="m-img p-img mb-3">
                            <h6>Download Firm Profile</h6>
                            <el-button type="primary" class="m-btn-small m-btn-main m-btn-block mt-1">
                              <a href="https://drive.google.com/file/d/15XnTYeIlhGMI8l8j99_6vWEwqkQVHv9K/view?usp=sharing" target="_blank">Download</a>
                            </el-button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <nuxt-link slot="reference" :to="{ name: 'resources', query: { ref: 'header' } }" class="m-nav-link">Resources</nuxt-link>
                </el-popover>
              </li>
              <li class="m-nav-list">
                <el-popover
                  :visible-arrow="false"
                  popper-class="m-pop-menu"
                  transition="none"
                  placement="bottom"
                  width="100%"
                  trigger="hover">
                  <div class="m-container">
                    <div class="row">
                      <div class="col-12 col-md-8">
                        <div class="row m-row-menu">
                          <div v-for="(list, index) in firm" :key="'firm'+index" class="col-12 col-md-4 m-block-list">
                            <nuxt-link :to="{ name: list.url }" class="m-block-list-link m-block-menu-link next-trans">{{ list.title }}</nuxt-link>
                          </div>
                        </div>
                      </div>
                      <div class="col-12 col-md-3 offset-md-1 border-left">
                        <div class="m-menu-box">
                          <div class="m-menu-box-inner">
                            <img src="https://res.cloudinary.com/makeslaw-com/image/upload/v1544762754/Main/Web/assets/Makes_firm_profile.jpg" alt="" class="m-img p-img mb-3">
                            <h6>Download Firm Profile</h6>
                            <el-button type="primary" class="m-btn-small m-btn-main m-btn-block mt-1">
                              <a href="https://drive.google.com/file/d/15XnTYeIlhGMI8l8j99_6vWEwqkQVHv9K/view?usp=sharing" target="_blank">Download</a>
                            </el-button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <nuxt-link slot="reference" :to="{ name: 'about-us', query: { ref: 'header' } }" class="m-nav-link">About Us</nuxt-link>
                </el-popover>
              </li>
              <li v-for="(list, index) in inside" :key="'inside'+index" class="m-nav-list">
                <nuxt-link :to="{ name: list.url, query: { ref: 'header' } }" class="m-nav-link">{{ list.title }}</nuxt-link>
              </li>
            </ul>
            <ul class="m-nav m-nav-search">
              <li class="m-nav-list">
                <nuxt-link :to="{ name: 'search', query: { ref: 'seach-header' } }" class="m-nav-link">
                  <svg viewBox="0 0 32 32" width="20" height="20" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.4" class="m-link-search">
                    <circle cx="14" cy="14" r="12"/>
                    <path d="M23 23 L30 30"/>
                  </svg>
                </nuxt-link>
              </li>
            </ul>
            <a class="m-nav-menu" @click="showMenu = !showMenu">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="m-link-menu">
                <line x1="3" y1="12" x2="21" y2="12"/>
                <line x1="3" y1="6" x2="21" y2="6"/>
                <line x1="3" y1="18" x2="21" y2="18"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </header>
    <el-collapse-transition>
      <el-dialog
        :visible.sync="showMenu"
        custom-class="m-fs"
        append-to-body
        fullscreen
        width="100%">
        <div v-if="showMenu" class="m-f-nav">
          <Menu @close="showMenu = false"/>
        </div>
      </el-dialog>
    </el-collapse-transition>
  </div>
</template>

<script>
import Menu from '~/components/addons/Menu'

export default {
  components: {
    Menu
  },
  data() {
    return {
      showMenu: false,
      main: [
        { url: 'practices', title: 'Practices' },
        { url: 'people', title: 'People' },
        { url: 'aksara', title: 'Aksara' }
      ],
      inside: [
        { url: 'careers', title: 'Careers' },
        { url: 'contact-us', title: 'Contact' }
      ],
      resources: [],
      firm: [
        { url: 'about-us', title: 'Our Firm' },
        { url: 'strategic-alliance', title: 'Strategic Alliance' }
      ]
    }
  },
  mounted() {
    this.getResourceTags()
  },
  methods: {
    async getResourceTags() {
      const { data } = await this.$axios.$get('terms', {
        params: {
          taxonomy: 'article_tag',
          limit: 6
        }
      })
      this.resources = data
    }
  }
}
</script>
