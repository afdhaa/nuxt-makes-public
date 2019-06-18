<template>
  <main>
    <section>
      <Top
        :titles="['Careers']"
        container="true"
        row="true"
        trow="true"
        col="true"
        capture="true"
        subtitle="Your journey begins here."
        scroll
        image="https://res.cloudinary.com/makeslaw-com/image/upload/v1544771491/Main/Web/assets/Careers.jpg"
        @scrollTo="scrollTo($event)"/>
    </section>
    <section id="next" class="m-section o-section m-bg-secondary">
      <div class="container m-container">
        <div class="row">
          <div class="col-12 col-md-12">
            <div class="row">
              <div class="col-12 col-md-6">
                <p class="m-lead">We welcome applications from foreign lawyers having a law degree from an accredited university, a valid license to practice law in their jurisdiction and relevant practice experience. It should be noted that hiring of foreign legal consultants is subject to various procedures and restrictions prescribed by local laws.</p>
              </div>
              <div class="col-12 col-md-5 offset-md-1">
                <p>If you are interested in being a part of the Makes team, please send your application either by e-mail or to the following mailing address:</p>
                <div class="m-pane-default">
                  <div class="m-pane-inner-default">
                    <blockquote class="blockquote">
                      <div class="m-block-inner">
                        <p>
                          <a href="mailto:recruitment@makeslaw.com">recruitment@makeslaw.com</a>
                        </p>
                        <p>or</p>
                        <p>
                          <span>Recruitment Partner</span>
                        </p>
                      </div>
                      <div class="m-block-inner mt-2">
                        <p>Menara Batavia, Lantai 7,</p>
                        <p>Jalan KH. Mas Mansyur Kav. 126,</p>
                        <p>Karet Tengsin, Kota Jakarta Pusat,</p>
                        <p>Daerah Khusus Ibukota Jakarta 10220.</p>
                      </div>
                      <p class="mt-4">We thank you for your interest in Makes &amp; Partners.</p>
                      <footer class="blockquote-footer"><cite>Makes &amp; Partners</cite></footer>
                    </blockquote>
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
import Top from '~/components/desk/Top'
import Tab from '~/components/desk/Tab'

export default {
  components: {
    Top,
    Tab
  },
  head() {
    return {
      title: 'Careers | Makes & Partners'
    }
  },
  data() {
    return {
      categories: [
        { title: 'Partners' },
        { title: 'Consultants' },
        { title: 'Foreign Counsel' },
        { title: 'Associates' }
      ]
    }
  },
  methods: {
    scrollTo(event) {
      console.log(event)
    }
  }
}
</script>
