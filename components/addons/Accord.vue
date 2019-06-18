<template>
  <div class="m-accordion">
    <div class="m-accordion-info">
      <p>As a result of the strategic alliance with Wong- Partnership, aside from our head office in Jakarta, we are very proud to announce that we now have associated offices located in key financial centers across Asia.</p>
      <p>This network of offices will have the same vision for renowned and excellent legal services to accommodate the ever-increasing needs of clients.</p>
    </div>
    <div class="m-accordion-block">
      <el-collapse v-model="active" accordion @change="$emit('change', active)">
        <el-collapse-item title="Head Office" name="1">
          <div>
            <p>Menara Batavia, 7th Floor,</p>
            <p>Jl. KH. Mas Mansyur Kav. 126,</p>
            <p>Jakarta 10220, Indonesia</p>
          </div>
        </el-collapse-item>
        <el-collapse-item title="Singapore Associated Office" name="2">
          <div>
            <p class="a-title">WongPartnership LLP</p>
            <p>12 Marina Boulevard Level 28,</p>
            <p>Marina Bay Financial Centre Tower 3,</p>
            <p>Singapore 018982</p>
          </div>
        </el-collapse-item>
        <el-collapse-item title="China Associated Office" name="3">
          <div class="mb-3">
            <p class="a-title">WongPartnership LLP</p>
            <p>Beijing R.O, Unit 3111,</p>
            <p>China World Office 2,</p>
            <p>1 Jianguomenwai Avenue, Chaoyang District</p>
            <p>Beijing 100004, PRC</p>
          </div>
          <div>
            <p>Shanghai R.O, Unit 1015</p>
            <p>Corporate Avenue 1,</p>
            <p>222 Hubin Road</p>
            <p>Shanghai 200021, PRC</p>
          </div>
        </el-collapse-item>
        <el-collapse-item title="Malaysia Associated Office" name="4">
          <div>
            <p class="a-title">Foong &amp; Partners (an associate firm to WongPartnership LLP)</p>
            <p>Advocates &amp; Solicitors,</p>
            <p>13-1, Menara 1MK,</p>
            <p>Kompleks 1 Mont' Kiara,</p>
            <p>No 1 Jalan Kiara, Mont' Kiara</p>
            <p>50480 Kuala Lumpur</p>
            <p>Malaysia</p>
          </div>
        </el-collapse-item>
        <el-collapse-item title="Middle East Associated Office" name="5">
          <div>
            <p class="a-title">WongPartnership LLP</p>
            <p>Abu Dhabi Branch</p>
            <p>Al Bateen Towers, Building C3,</p>
            <p>Office 11-01 (P1),</p>
            <p>P.O. Box No. 37883,</p>
            <p>Abu Dhabi, UAE</p>
          </div>
        </el-collapse-item>
        <el-collapse-item title="Myanmar Associated Office" name="6">
          <div>
            <p class="a-title">WongPartnership Myanmar Ltd.</p>
            <p>No. 1, Kaba Aye Pagoda Road,</p>
            <p>Business Suite #03-02,</p>
            <p>Yankin Township,</p>
            <p>Yangon, Myanmar</p>
          </div>
        </el-collapse-item>
      </el-collapse>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: '1'
    }
  }
}
</script>
