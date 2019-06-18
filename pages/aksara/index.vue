<template>
  <main>
    <section>
      <Top
        :titles="['Aksara', 'Nusantara', 'Overview']"
        container="true"
        row="true"
        trow="true"
        col="true"
        capture="true"
        scroll
        image="https://res.cloudinary.com/dyrywo8ho/image/upload/v1560416972/aksara_jyq15b.png"
        @scrollTo="scrollTo($event)"/>
    </section>
    <section id="next" class="m-section o-section">
      <div class="container m-container">
        <div class="row">
          <div class="col-12 col-md-12">
            <div class="row">
              <div class="col-12 col-md-6">
                <p class="m-lead text-dark">Aksara Nusantara</p>
              </div>
            </div>
            <div class="row">
              <div class="col-12 col-md-6">
                <p>
                  <video style="width: 100%;height: auto;" controls>
                    <source src="https://res.cloudinary.com/afdhaa/video/upload/v1560837441/VID-20190617-WA0003_vzre1j.mp4" type="video/mp4">
                    Your browser does not support HTML5 video.
                  </video>
                </p>
              </div>
              <div class="col-12 col-md-6">
                <p>The Aksara Nusantara will include the following drafts: </p>
                <p align="justify">We believe that the future is about collaboration and every great thing has to start somewhere. As part of Makes & Partners Law Firm (Makes) initiatives to engineer emerging startup ecosystem in Indonesia.</p>
                <p>a.	Term Sheet <br> b.	Convertible Note Agreement <br> c.	Pledge Agreement <br> d.	Share Subscription Agreement <br>e.	Shareholders Agreement.</p>
                <p>The above drafts are available in Indonesian and English versions.</p>
                <p align="justify">In preparing the Aksara Nusantara, Makes is collaborating with prominent early stage startups, venture capital firms, and angel investors in Indonesia, who will provide their inputs following the launching the beta version of Aksara Nusantara.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="m-section o-section m-bg-secondary">
      <div class="container m-container">
        <nuxt-link :to="{ name: 'careers' }" class="a-block a-block-right">
          <div class="a-block-inner">
            <span :to="{ name: 'careers' }" class="o-features-title a-block-link">
              <p>Careers</p>
              <p>at Makes →</p>
            </span>
          </div>
        </nuxt-link>
        <div class="row">
          <div class="col-12 col-md-12">
            <div class="m-features m-tab-top">
              <h6 class="o-features-title mb-4">Browse by:</h6>
              <el-tabs v-model="active">
                <el-tab-pane label="Our Philosophy" name="first">
                  <Content
                    title="Our Philosophy"
                    headline="Our success and reputation as one of the premier Indonesian law firms is based on our philosophy that “solving legal problems is more than just knowing the law.”"
                    paragraph="We take a collaborative approach that focuses on our client and the business situation. Frequently, our clients will view us as part of the team. This philosophy guides us to provide tailored legal solutions with innovative structures that is commercially viable and fulfills our clients’ objectives."/>
                </el-tab-pane>
                <el-tab-pane label="Our Social Responsibilities" name="second">
                  <Content
                    title="Our Social Responsibilities"
                    headline="We are deeply committed to the Indonesian legal profession. Our partners are active members of the Faculty of Law in the prestigious University of Indonesia and University of Pelita Harapan."
                    paragraph="Senior Partner Iwan Setiawan is an esteemed consultant to local regulatory authorities such as the Investment Coordinating Board (BKPM) and the Financial Services Authority (OJK). Our Chairman of World Vision Academy."/>
                </el-tab-pane>
                <el-tab-pane label="Our Relationships" name="third">
                  <Content
                    title="Our Relationships"
                    headline="In our more than 20 years of practice, we have developed solid and meaningful relationships with government agencies, and the Indonesian business and legal community.”"
                    paragraph="In addition to our strategic alliance with top Singapore firm WongPartnership LLP, we have developed good working relationships with a number of top tier law firms in the U.S, U.K, Europe, and the Asia Pacific. Our lawyers are also assisted by special counsel attorneys who have served as senior officials in government ministries and the Supreme Court."/>
                </el-tab-pane>
              </el-tabs>
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
import Content from '~/components/desk/Content'

export default {
  components: {
    Top,
    Tab,
    Content
  },
  head() {
    return {
      title: 'Aksara Nusantara | Makes & Partners'
    }
  },
  data() {
    return {
      active: 'first'
    }
  },
  methods: {
    scrollTo(event) {
      console.log(event)
    }
  }
}
</script>
