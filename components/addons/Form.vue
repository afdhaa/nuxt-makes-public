<template>
  <div>
    <el-form ref="form" :model="form" :label-position="position" label-width="180px">
      <div class="m-pane-block m-card-form">
        <el-form-item label="Regarding:">
          <el-radio-group v-model="form.type">
            <el-radio label="General"/>
            <el-radio label="Careers"/>
            <el-radio label="How We Help Clients"/>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="Name">
          <el-input v-model="form.name" placeholder="Enter your name"/>
        </el-form-item>
        <el-form-item label="Email">
          <el-input v-model="form.email" placeholder="Enter email address"/>
        </el-form-item>
        <el-form-item label="Company">
          <el-input v-model="form.origin" placeholder="Enter company/where you come from"/>
        </el-form-item>
        <el-form-item label="Subject">
          <el-input v-model="form.subject" placeholder="Enter subject"/>
        </el-form-item>
        <el-form-item label="Message">
          <el-input :rows="5" v-model="form.mesagge" type="textarea" placeholder="Enter message"/>
        </el-form-item>
      </div>
      <div class="m-card-form-submit">
        <el-form-item>
          <el-button type="primary" class="m-btn-large m-btn-main m-btn-block">Submit</el-button>
        </el-form-item>
      </div>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      position: 'left',
      form: {
        types: '',
        name: '',
        email: '',
        origin: '',
        subject: '',
        message: ''
      }
    }
  }
}
</script>
