import Vue from 'vue'
import Router from 'vue-router'

const _65309781 = () => import('../pages/strategic-alliance/index.vue' /* webpackChunkName: "pages/strategic-alliance/index" */).then(m => m.default || m)
const _a9f85fbc = () => import('../pages/search.vue' /* webpackChunkName: "pages/search" */).then(m => m.default || m)
const _7360b924 = () => import('../pages/careers/index.vue' /* webpackChunkName: "pages/careers/index" */).then(m => m.default || m)
const _626753b0 = () => import('../pages/contact-us/index.vue' /* webpackChunkName: "pages/contact-us/index" */).then(m => m.default || m)
const _1b90b638 = () => import('../pages/aksara/index.vue' /* webpackChunkName: "pages/aksara/index" */).then(m => m.default || m)
const _5b22ff4a = () => import('../pages/about-us/index.vue' /* webpackChunkName: "pages/about-us/index" */).then(m => m.default || m)
const _b3836568 = () => import('../pages/people/index.vue' /* webpackChunkName: "pages/people/index" */).then(m => m.default || m)
const _feeb2544 = () => import('../pages/resources/index.vue' /* webpackChunkName: "pages/resources/index" */).then(m => m.default || m)
const _572ea211 = () => import('../pages/practices/index.vue' /* webpackChunkName: "pages/practices/index" */).then(m => m.default || m)
const _79fb0627 = () => import('../pages/legal/terms.vue' /* webpackChunkName: "pages/legal/terms" */).then(m => m.default || m)
const _0e47b5a8 = () => import('../pages/legal/privacy.vue' /* webpackChunkName: "pages/legal/privacy" */).then(m => m.default || m)
const _d9e44a5c = () => import('../pages/resources/transactional-highlights/_id.vue' /* webpackChunkName: "pages/resources/transactional-highlights/_id" */).then(m => m.default || m)
const _e81fa174 = () => import('../pages/resources/_id.vue' /* webpackChunkName: "pages/resources/_id" */).then(m => m.default || m)
const _436ff4b9 = () => import('../pages/practices/_id.vue' /* webpackChunkName: "pages/practices/_id" */).then(m => m.default || m)
const _21519a98 = () => import('../pages/people/_id.vue' /* webpackChunkName: "pages/people/_id" */).then(m => m.default || m)
const _a5355b70 = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)

Vue.use(Router)


if (process.client) {
  window.history.scrollRestoration = 'manual'
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected
  if (to.matched.length < 2) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise((resolve) => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'is-active',
    linkExactActiveClass: 'exact-is-active',
    scrollBehavior,
    routes: [
		{
			path: "/strategic-alliance",
			component: _65309781,
			name: "strategic-alliance"
		},
		{
			path: "/search",
			component: _a9f85fbc,
			name: "search"
		},
		{
			path: "/careers",
			component: _7360b924,
			name: "careers"
		},
		{
			path: "/contact-us",
			component: _626753b0,
			name: "contact-us"
		},
		{
			path: "/aksara",
			component: _1b90b638,
			name: "aksara"
		},
		{
			path: "/about-us",
			component: _5b22ff4a,
			name: "about-us"
		},
		{
			path: "/people",
			component: _b3836568,
			name: "people"
		},
		{
			path: "/resources",
			component: _feeb2544,
			name: "resources"
		},
		{
			path: "/practices",
			component: _572ea211,
			name: "practices"
		},
		{
			path: "/legal/terms",
			component: _79fb0627,
			name: "legal-terms"
		},
		{
			path: "/legal/privacy",
			component: _0e47b5a8,
			name: "legal-privacy"
		},
		{
			path: "/resources/transactional-highlights/:id?",
			component: _d9e44a5c,
			name: "resources-transactional-highlights-id"
		},
		{
			path: "/resources/:id",
			component: _e81fa174,
			name: "resources-id"
		},
		{
			path: "/practices/:id",
			component: _436ff4b9,
			name: "practices-id"
		},
		{
			path: "/people/:id",
			component: _21519a98,
			name: "people-id"
		},
		{
			path: "/",
			component: _a5355b70,
			name: "index"
		}
    ],
    
    
    fallback: false
  })
}
