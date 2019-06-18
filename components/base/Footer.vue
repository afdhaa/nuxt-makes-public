<template>
  <div>
    <footer class="m-footer-default">
      <div class="m-container">
        <div class="row">
          <div class="col-12 col-md-5 m-footer-inner">
            <h2>Want to get updates on Makes &amp; Partners legal news?</h2>
            <div class="m-subscribe mb-4">
              <el-input v-model="subscribe" placeholder="Enter your email address">
                <el-button slot="append" icon="el-icon-plus"/>
              </el-input>
            </div>
            <ul class="m-footer-social">
              <li class="m-social-list">
                <span class="social-title">Follow us on:</span>
              </li>
              <li v-for="(list, index) in social" :key="'social'+index" class="m-social-list">
                <a :href="list.url" target="_blank" class="social-link">
                  <span :class="list.icon" class="socicon"/>
                </a>
              </li>
            </ul>
            <!-- <p class="m-footer-text mt-3">*Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> -->
          </div>
          <div class="col-12 col-md-5 offset-md-2 m-footer-inner">
            <div class="row">
              <div class="col-12 col-md-6 m-footer-inner-list">
                <h4 class="mb-3">The Firm</h4>
                <ul class="m-footer-block">
                  <li v-for="(list, index) in nav" :key="'nav'+index" class="m-footer-list">
                    <nuxt-link :to="{ name: list.url, query: { ref: 'footer' } }">{{ list.title }}</nuxt-link>
                  </li>
                </ul>
              </div>
              <div class="col-12 col-md-6 m-footer-inner-list">
                <h4 class="mb-3">Resources</h4>
                <ul class="m-footer-block">
                  <li v-for="(list, index) in resources" :key="'resources'+index" class="m-footer-list">
                    <nuxt-link :to="{ name: list.url, query: { ref: 'footer' } }">{{ list.title }}</nuxt-link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-12 text-center">
            <div class="row m-footer-awards">
              <div v-for="(list, index) in awards1" :key="'awards1'+index" class="col">
                <div>
                  <img :src="list.img" :alt="list.name" class="m-img a-img">
                </div>
              </div>
            </div>
            <div class="row m-footer-awards">
              <div v-for="(list, index) in awards2" :key="'awards2'+index" class="col">
                <div>
                  <img :src="list.img" :alt="list.name" class="m-img a-img">
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12 col-md-5">
            <div class="m-footer-bottom">
              <span class="footer-copyright">© 2018 Makes &amp; Partners.</span>
              <ul class="m-footer-legal">
                <li class="m-legal-list">
                  <nuxt-link :to="{ name: 'legal-terms', query: { ref: 'legal' } }">Terms</nuxt-link>
                </li>
                <li class="m-legal-list">
                  <nuxt-link :to="{ name: 'legal-privacy', query: { ref: 'legal' } }">Privacy</nuxt-link>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-12 col-md-7">
            <a v-anchor:top class="m-footer-to-top">
              <div class="to-top">
                <span class="m-footer-text mr-2">Back to top</span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-up">
                  <line x1="12" y1="19" x2="12" y2="5"/>
                  <polyline points="5 12 12 5 19 12"/>
                </svg>
              </div>
            </a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      subscribe: '',
      awards1: [
        {
          img:
            'https://res.cloudinary.com/makeslaw-com/image/upload/v1544175385/Main/Web/award/legal-500-ap.png',
          name: 'Legal 500'
        },
        {
          img:
            'https://res.cloudinary.com/makeslaw-com/image/upload/v1548948312/Main/Web/assets/WhatsApp_Image_2019-01-31_at_22.21.02.jpg',
          name: 'IFLR 2000'
        },
        {
          img:
            'https://res.cloudinary.com/makeslaw-com/image/upload/v1544175385/Main/Web/award/alpo-17.jpg',
          name: 'Asialaw Profile Outstanding Firm'
        }
      ],
      awards2: [
        {
          img:
            'https://res.cloudinary.com/makeslaw-com/image/upload/v1544175392/Main/Web/award/alb-ila-18.png',
          name: 'Asia Legal Business Indonesia Law Awards'
        },
        {
          img:
            'https://res.cloudinary.com/makeslaw-com/image/upload/v1544175386/Main/Web/award/ihc-foty-17.png',
          name: 'In-house Community Asia-mena Counsel'
        },
        {
          img:
            'https://res.cloudinary.com/makeslaw-com/image/upload/v1548948313/Main/Web/assets/WhatsApp_Image_2019-01-31_at_22.21.03.jpg',
          name: 'Legal 600'
        }
      ],
      nav: [
        { url: 'practices', title: 'Area of Expertise' },
        { url: 'people', title: 'People' },
        { url: 'about-us', title: 'About Us' },
        { url: 'strategic-alliance', title: 'Strategic Alliance' },
        { url: 'careers', title: 'Careers' },
        { url: 'contact-us', title: 'Contact' }
      ],
      resources: [
        { url: 'resources', title: 'News & Publications' },
        { url: 'resources', title: 'Recognized Success' }
      ],
      social: [
        {
          url: 'mailto:makes@makeslaw.com',
          icon: 'socicon-mail'
        },
        {
          url: 'https://www.linkedin.com/company/makes-&-partners/',
          icon: 'socicon-linkedin'
        }
      ]
    }
  }
}
</script>
