<template>
  <div v-swiper:mySwiper="swiperOption" class="m-swiper m-outlet">
    <div class="swiper-wrapper">
      <div v-for="(list, index) in news" :key="index" class="swiper-slide">
        <div :style="`background: url('${list.image}') center/cover`" class="m-outlet-onboard m-outlet-display"/>
        <div class="m-outlet-text">
          <div class="m-outlet-text-inner">
            <h1 class="m-outlet-title m-outlet-title--home m-outlet-trans mb-5">
              <span>{{ list.title }}</span>
            </h1>
            <div>
              <el-button type="primary" class="m-btn-large m-btn-main m-btn-block" @click="$router.push({ name: 'about-us' })">Explore Firm</el-button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div slot="pagination" class="swiper-pagination"/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 0,
        lazy: true,
        loop: true,
        effect: 'fade',
        centeredSlides: true,
        autoplay: {
          delay: 10000,
          disableOnInteraction: true
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      },
      news: [
        {
          image:
            'https://res.cloudinary.com/makeslaw-com/image/upload/v1550491087/Main/Web/assets/Makes_-_Home_1.jpg',
          title: 'Solving a legal problem means more than knowing the law'
        },
        {
          image:
            'https://images.unsplash.com/photo-1517586979036-b7d1e86b3345?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4253bdbc1cabd331ed55347f3f464c8b&auto=format&fit=crop&w=2134&q=80',
          title: 'Solving a legal problem means more than knowing the law'
        },
        {
          image:
            'https://res.cloudinary.com/makeslaw-com/image/upload/v1552390438/Main/Web/assets/Makes_Home_Slide_3.jpg',
          title: 'Solving a legal problem means more than knowing the law'
        }
      ]
    }
  }
}
</script>
