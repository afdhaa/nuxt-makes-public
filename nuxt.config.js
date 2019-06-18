const pkg = require('./package')
require('dotenv').config()
module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href:
          'https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css'
      },
      {
        rel: 'stylesheet',
        href:
          'https://d1azc1qln24ryf.cloudfront.net/114779/Socicon/style-cf.css?9ukd8d'
      }
    ]
  },
  router: {
    linkActiveClass: 'is-active',
    linkExactActiveClass: 'exact-is-active'
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#000' },
  env: {
    cloudinaryName: process.env.CLOUDINARY_NAME || '',
    appURL: process.env.APP_URL || ''
  },
  /*
  ** Global CSS
  */
  css: [
    '@/assets/scss/app.scss',
    'element-ui/lib/theme-chalk/index.css',
    'swiper/dist/css/swiper.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/element-ui',
    '@/plugins/anchor',
    '@/plugins/axios',
    '@/plugins/anchor',
    '@/plugins/moment',
    '@/plugins/cloudinary',
    { src: '@/plugins/mixpanel', ssr: false },
    { src: '@/plugins/swiper', ssr: false }
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    '@nuxtjs/dotenv',
    [
      '@nuxtjs/google-analytics',
      {
        id: 'UA-129018066-1'
      }
    ]
  ],

  /*
  ** Axios module configuration
  */
  axios: {
    baseURL: 'http://api.makeslaw.com/v1',
    browserBaseURL: 'http://api.makeslaw.com/v1',
    credentials: false,
    https: false,
    proxyHeaders: false
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
