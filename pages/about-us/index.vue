<template>
  <main>
    <section>
      <Top
        :titles="['Independence', 'Innovation', 'Creativity']"
        container="true"
        row="true"
        trow="true"
        col="true"
        capture="true"
        scroll
        image="https://res.cloudinary.com/makeslaw-com/image/upload/v1550491087/Main/Web/assets/Makes_-_About_Us.jpg"
        @scrollTo="scrollTo($event)"/>
    </section>
    <section id="next" class="m-section o-section">
      <div class="container m-container">
        <div class="row">
          <div class="col-12 col-md-12">
            <div class="row">
              <div class="col-12 col-md-6">
                <p class="m-lead text-dark">We are Makes & Partners, an independent, innovative and creative Indonesian law firm and a leader in the Indonesian integrated corporate finance and corporate commercial legal services market.</p>
              </div>
            </div>
            <div class="row">
              <div class="col-12 col-md-6">
                <p>Established in 1993 by Yozua Makes, we provide high quality, aggressive, dynamic and innovative services to our Indonesian and international clients.</p>
                <p>The market recognizes us as a strategic leader for integrated commercial business and legal solutions. Since our inception, we have adopted and inculcated the philosophy: "solving a legal problem means more than knowing the law", to achieve a result-oriented commercial approach and high completion rate for our transactions.</p>
                <p>We adopt a practical business approach in  our deals  to provide meaningful legal solutions to our clients. From our establishment in 1993, we have maintained solid relationships with the government, as well as legal and business communities in Indonesia. We currently have 30 lawyers, including foreign attorneys. Our lawyers are also assisted by special counsels who have previously served in senior capacities in the academe, private practice and/or in various government ministries and institutions including the Indonesian Supreme Court.</p>
                <p>We work closely and continuously with government agencies relevant to corporate finance, capital investment and mergers & acquisitions practices to devise effective and practical advice. Among others, we are actively involved in a number of high profile mergers and acquisitions, privatization, divestment and capital market transactions.</p>
              </div>
              <div class="col-12 col-md-6">
                <p>Always a forward thinker, we welcome the era of greater ASEAN and Pan-Asian economic cooperation and integration with leading Singapore firm, WongPartnership LLP (“WongPartnership”). Through our strategic alliance, our excellent legal services, complemented by WongPartnership’s strengths will surely reach far and wide into the ASEAN and beyond.</p>
                <p>Recognizing the increasing number of deals taking advantage of Indonesia's burgeoning investment climate and China's position as one of the world's largest economic powers, we have established a China Desk for corporate and commercial legal services.</p>
                <p>We have a dedicated team especially tasked to provide assistance to Chinese investors for complex transactions developing within the Indonesian business landscape. Our strong ties with various Indonesian regulatory bodies also enable us to provide practical assistance in monitoring a project's development with government ministries and in extending support for our clients' Indonesian regulatory and compliance requirements. Our strategic alliance with WongPartnership, with its award-winning China Practice, also boosts our resources in providing support for cross-border matters which span across both China and Indonesia.</p>
                <p>Makes, in partnership with WongPartnership has also launched a Litigation and Dispute Resolution Practice, to assist our clients in the full spectrum of their legal needs both in Indonesia and overseas, to be delivered with the same level of proven quality and excellence. WongPartnership’s Litigation and Dispute Resolution Group is a market leader in Singapore, with extensive expertise in litigation, arbitration, mediation and other forms of dispute resolution extending beyond Singapore to principal jurisdictions in Asia and beyond. Backed with this dynamic team, we are now able to offer a full range of legal services to our clients.</p>
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
      title: 'About Us | Makes & Partners'
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
