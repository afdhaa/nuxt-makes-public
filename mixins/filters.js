// Reusable methods for components.
export default {
  data() {
    return {
      params: {}
    }
  },
  computed: {
    query() {
      return this.$route.query
    }
  },
  methods: {
    filter(event) {
      let query = Object.assign({}, this.query)
      if (typeof event == 'string') {
        delete query[event]
      } else {
        query = Object.assign(query, event)
      }

      if (!event.page) {
        delete query.page
      }

      this.$router.push({
        path: this.$route.path,
        query: query
      })
      this.afterFilter()
    },
    afterFilter() {
      // window.scrollTo(0, 0)
    }
  }
}
