<template>
  <main>
    <section class="m-section m-bg-secondary">
      <div class="container m-container">
        <div class="row">
          <div class="col-12 col-md-7">
            <h1 class="m-title">
              <span>Contact Us</span>
            </h1>
            <div class="row">
              <div class="col-12">
                <div class="m-pane-block">
                  <h3>Thank you for your interest in Makes &amp; Partners. Please fill out the form below to ask a question or report a technical problem.</h3>
                  <div class="m-block-inner">
                    <p>Please note:</p>
                    <p>While we appreciate your questions, we are unable to respond to all inquiries.</p>
                  </div>
                </div>
                <el-form label-position="left" label-width="180px">
                  <div class="m-pane-block m-card-form">
                    <el-form-item
                      :error="errors.inquery ? errors.inquery[0] : ''"
                      label="Regarding:"
                    >
                      <el-radio-group v-model="form.inquery">
                        <el-radio label="General"/>
                        <el-radio label="Careers"/>
                        <el-radio label="How We Help Clients"/>
                      </el-radio-group>
                    </el-form-item>
                    <el-form-item
                      :error="errors.name ? errors.name[0] : ''"
                      label="Name"
                    >
                      <el-input v-model="form.name" placeholder="Enter your name"/>
                    </el-form-item>
                    <el-form-item
                      :error="errors.email ? errors.email[0] : ''"
                      label="Email"
                    >
                      <el-input v-model="form.email" placeholder="Enter email address"/>
                    </el-form-item>
                    <el-form-item
                      :error="errors.company ? errors.company[0] : ''"
                      label="Company"
                    >
                      <el-input v-model="form.company" placeholder="Enter company/where you come from"/>
                    </el-form-item>
                    <el-form-item
                      :error="errors.subject ? errors.subject[0] : ''"
                      label="Subject"
                    >
                      <el-input v-model="form.subject" placeholder="Enter subject"/>
                    </el-form-item>
                    <el-form-item
                      :error="errors.message ? errors.message[0] : ''"
                      label="Message"
                    >
                      <el-input :rows="5" v-model="form.message" type="textarea" placeholder="Enter message"/>
                    </el-form-item>
                  </div>
                  <div class="m-card-form-submit">
                    <el-form-item>
                      <el-button
                        :loading="loading"
                        :disabled="loading"
                        type="primary"
                        class="m-btn-large m-btn-main m-btn-block"
                        @click="send"
                      >
                        Submit
                      </el-button>
                    </el-form-item>
                  </div>
                </el-form>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-4 offset-md-1">
            <div class="row mb-2">
              <div class="col-12">
                <div class="m-pane-block mt-0">
                  <h4>For Media Inquiries:</h4>
                  <div class="m-block-inner">
                    <p class="m-block-title">Makes &amp; Partners Law Firm</p>
                    <p>
                      <span>E: </span>
                      <a href="mailto:makes@makeslaw.com">makes@makeslaw.com</a>
                    </p>
                    <p>
                      <span>T: </span>
                      <a href="tel:+62215747181">+62-21-574-7-181</a>
                    </p>
                    <p>
                      <span>F: </span>
                      <a href="#">+62-21-574-7-180</a>
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-12">
                <div class="m-pane-block">
                  <h4>Office:</h4>
                  <div class="m-block-inner">
                    <p>Menara Batavia, Lantai 7,</p>
                    <p>Jalan KH. Mas Mansyur Kav. 126,</p>
                    <p>Karet Tengsin, Kota Jakarta Pusat,</p>
                    <p>Daerah Khusus Ibukota Jakarta 10220.</p>
                    <div class="mt-3">
                      <p>
                        <span>E: </span>
                        <a href="mailto:ymakes@makeslaw.com">ymakes@makeslaw.com</a>
                      </p>
                      <p>
                        <span>E: </span>
                        <a href="mailto:setiawan@makeslaw.com">setiawan@makeslaw.com</a>
                      </p>
                      <p>
                        <span>E: </span>
                        <a href="mailto:fransisca@makeslaw.com">fransisca@makeslaw.com</a>
                      </p>
                      <p>
                        <span>E: </span>
                        <a href="mailto:billy@makeslaw.com">billy@makeslaw.com</a>
                      </p>
                      <p>
                        <span>T: </span>
                        <a href="tel:+62215747181">+62-21-574-7-181</a>
                      </p>
                      <p>
                        <span>F: </span>
                        <a href="#">+62-21-574-7-180</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- <a href="#">Get on map →</a> -->
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import Form from '~/components/addons/Form'
let item = {
  name: '',
  email: '',
  inquery: '',
  subject: '',
  message: '',
  company: ''
}

export default {
  components: {
    Form
  },
  head() {
    return {
      title: 'Contact Us | Makes & Partners'
    }
  },
  data() {
    return {
      form: item,
      errors: {},
      loading: false
    }
  },
  methods: {
    async send() {
      try {
        this.loading = true
        await this.$axios.$post('contacts', this.form)
        this.loading = false
        this.form = {
          name: '',
          email: '',
          inquery: '',
          subject: '',
          message: '',
          company: ''
        }
        this.$notify({
          title: 'Success',
          message:
            'Thanks for contacting us! We will be in touch with you shortly.',
          type: 'success'
        })
      } catch (e) {
        this.loading = false
        if (e.response) {
          this.errors = e.response.data.errors
        }
      }
    }
  }
}
</script>
