<template>
  <div class="m-f-nav-inner">
    <ul>
      <li v-for="(list, index) in navigation" :key="index">
        <nuxt-link :to="{ name: list.url }">{{ list.title }}</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navigation: [
        { url: 'index', title: 'Home' },
        { url: 'practices', title: 'Practices' },
        { url: 'people', title: 'People' },
        { url: 'aksara', title: 'Aksara' },
        { url: 'resources', title: 'Resources' },
        { url: 'about-us', title: 'About Us' },
        { url: 'careers', title: 'Careers' },
        { url: 'strategic-alliance', title: 'Offices' },
        { url: 'contact-us', title: 'Contact' }
      ]
    }
  }
}
</script>
