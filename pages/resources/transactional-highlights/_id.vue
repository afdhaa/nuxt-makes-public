<template>
  <main>
    <section class="m-bg-secondary">
      <Top
        :titles="['Capital', 'Markets']"
        back
        container="true"
        row="true"
        trow="true"
        col="true"
        capture="true"
        image="https://images.pexels.com/photos/34092/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        @to="$router.push({ name: 'resources' })"
      >
        <Count :count="21"/>
      </Top>
    </section>
    <section class="m-section o-section">
      <div class="container m-container">
        <div class="row">
          <div class="col-md-2">
            <ul class="list-unstyled">
              <li v-for="(list, index) in shares" :key="index" class="m-share-list">
                <a :class="list.icon" class="m-btn-share socicon"/>
              </li>
            </ul>
          </div>
          <div class="col-12 col-md-7">
            <div>
              <p class="mb-5">With a leading capital markets legal practice, Makes has acted in numerous global public offerings (debt and equity) by Indonesian companies listed on international exchanges and international private placements by way of Rule 144A and Regulation S. In 2012, Makes alone was responsible for one third of the listed Capital Markets transactions in the Indonesia Stock Exchange. Some of the more notable capital market transactions which we have advised on include the following:</p>
            </div>
            <ul class="m-block">
              <li v-for="i in 2" :key="i" class="m-block-list">
                <span class="m-block-list-link">Issuance of US$250,000,000 aggregate principal amount of 8.375% Senior Secured Notes due 2022 issued by PT Gajah Tunggal Tbk and simultaneous issuance of USD 250,000,000 term loan facilities agreement dated July 28, 2017</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import Top from '~/components/desk/Top'
import Count from '~/components/desk/Count'

export default {
  components: {
    Top,
    Count
  },
  head() {
    return {
      title: 'Area of Expertise'
    }
  },
  data() {
    return {
      shares: [
        { icon: 'socicon-mail' },
        { icon: 'socicon-facebook' },
        { icon: 'socicon-twitter' },
        { icon: 'socicon-linkedin' }
      ]
    }
  }
}
</script>
