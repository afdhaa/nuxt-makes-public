<style>
#more {display: none;}
</style>

<template>
  <main>
    <section>
      <Top
        :titles="['Aksara', 'Nusantara']"
        container="true"
        row="true"
        trow="true"
        col="false"
        capture="true"
        subtitle="“We believe that the future is about collaboration and every great thing has to start somewhere.”"
        scroll
        image="https://dvb.asia/aksara-final.png"
        @scrollTo="scrollTo($event)"/>
    </section>
    <section id="next" class="m-section o-section">
      <div class="container m-container">
        <div class="row">
          <div class="col-12 col-md-12 col-xs-12">
            <div class="row">
              <div class="col-12 col-md-6 col-xs-12">
                <!-- <h2>Aksara Nusantara</h2> -->
              </div>
            </div>
            <div class="row">
              <div class="col-12 col-md-12 col-xs-12" align="center">
                <p>
                  <iframe style="width: 75%;height: 450px;" src="https://www.youtube.com/watch?v=_MLJ5eVk-M4&t=86s" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  <!-- <video style="width: 100%;height: auto;" controls>
                    <source src="https://www.youtube.com/watch?v=_vApfbd5gB0" type="video/mp4">
                    Your browser does not support HTML5 video.
                  </video> -->
                </p>
                <br><br>
              </div>
              
              <div class="col-12 col-md-12 col-xs-12">
                <br><br>
                <p align="justify"><b>As part of Makes &amp; Partners Law Firm (Makes) initiatives to engineer emerging startup ecosystem in Indonesia, we have prepared a set of fully editable investment package documents for startup fundraising, made available for free download and use, subject to our disclaimer below:</b></p>
              <br>
              </div>
              <div class="col-6 md-12 col-xs-12">
                <a href="http://dvb.asia/aksara/AKSARA%20NUSANTARA%20-%20Term%20Sheet%20(Bahasa%20Indonesia).doc" target="_blank">
                  <div class="card" style="border-radius: 5px; height: auto; margin-bottom:10px; font-size:13px; background-image: url(https://dvb.asia/button.jpg);">
                    <div class="card-body" style="">
                      <p class="card-text" algin="center" style="color: white;">Term Sheet (Indonesian Version)</p>
                    </div>
                  </div>
                </a>
                <a href="" target="_blank">
                  <div class="card" style="border-radius: 5px; height: auto; margin-bottom:10px; font-size:13px; background-image: url(https://dvb.asia/button.jpg);">
                    <div class="card-body" style="">
                      <p class="card-text" algin="center" style="color: white;">Share Subscription Agreement (Indonesian Version)</p>
                    </div>
                  </div>
                </a>
                <a href="http://dvb.asia/aksara/AKSARA%20NUSANTARA%20-%20Perjanjian%20Antar%20Pemegang%20Saham.doc" target="_blank">
                  <div class="card" style="border-radius: 5px; height: auto; margin-bottom:10px; font-size:13px; background-image: url(https://dvb.asia/button.jpg);">
                    <div class="card-body" style="">
                      <p class="card-text" algin="center" style="color: white;">Shareholders' Agreement (Indonesian Version)</p>
                    </div>
                  </div>
                </a>
                <a href="" target="_blank">
                    <div class="card" style="border-radius: 5px; height: auto; margin-bottom:10px; font-size:13px; background-image: url(https://dvb.asia/button.jpg);">
                  <div class="card-body" style="">
                    <p class="card-text" algin="center" style="color: white;">Convertible Note Agreement (Indonesian Version)</p>
                  </div>
                </div>
                </a>
                <a href="http://dvb.asia/aksara/Aksara%20Nusantara%20-%20Frequently%20Asked%20Questions.docx" target="_blank">
                  <div class="card" style="border-radius: 5px; height: auto; margin-bottom:10px; font-size:13px; background-image: url(https://dvb.asia/button.jpg);">
                    <div class="card-body" style="">
                      <p class="card-text" algin="center" style="color: white;">F.A.Q (Indonesian Version)</p>
                    </div>
                  </div>
                </a>
              </div>
              <div class="col-6 md-12 col-xs-12">
                <a href="http://dvb.asia/aksara/AKSARA%20NUSANTARA%20-%20Term%20Sheet.docx" target="_blank">
                  <div class="card" style="border-radius: 5px; height: auto; margin-bottom:10px; font-size:13px; background-image: url(https://dvb.asia/button.jpg);">
                    <div class="card-body" style="">
                      <p class="card-text" algin="center" style="color: white;">Term Sheet (English Version)</p>
                    </div>
                  </div>
                </a>
                <a href="" target="_blank">
                  <div class="card" style="border-radius: 5px; height: auto; margin-bottom:10px; font-size:13px; background-image: url(https://dvb.asia/button.jpg);">
                  <div class="card-body" style="">
                    <p class="card-text" algin="center" style="color: white;">Share Subscription Agreement (English Version)</p>
                  </div>
                </div>
                </a>
                <a href="http://dvb.asia/aksara/AKSARA%20NUSANTARA%20-%20Shareholders'%20Agreement.docx" target="_blank">
                  <div class="card" style="border-radius: 5px; height: auto; margin-bottom:10px; font-size:13px; background-image: url(https://dvb.asia/button.jpg);">
                    <div class="card-body" style="">
                      <p class="card-text" algin="center" style="color: white;">Shareholders' Agreement (English Version) </p>
                    </div>
                  </div>
                </a>
                <a href="" target="_blank">
                  <div class="card" style="border-radius: 5px; height: auto; margin-bottom:10px; font-size:13px; background-image: url(https://dvb.asia/button.jpg);">
                    <div class="card-body" style="">
                      <p class="card-text" algin="center" style="color: white;" icon="el-icon-plus">Convertible Note Agreement (English Version)</p>
                    </div>
                  </div>
                </a>
                <a href="http://dvb.asia/aksara/AKSARA%20NUSANTARA%20-%20Pledge%20of%20Shares%20Agreement%20(bilingual).docx" target="_blank">
                  <div class="card" style="border-radius: 5px; height: auto; margin-bottom:10px; font-size:13px; background-image: url(https://dvb.asia/button.jpg);">
                    <div class="card-body" style="">
                      <p class="card-text" algin="center" style="color: white;"><i class="fa fa-download"></i>Pledges of Shares Agreement (Bilingual)</p>
                    </div>
                  </div>
                </a>
              </div>
              <br><br>
              <div class="col-12 md-12 col-xs-12">
                <br>
                <p align="justify"><b>A Kit of Standard Startups Agreements (“Aksara Nusantara”) is a work product developed by Makes & Partners Law Firm (“Makes”), taking into account various external and internal sources on the Startup fundraising documents. Aksara Nusantara will be updated from time to time following any inputs that we receive.</b></p>

<p align="justify"><b>No information provided in Aksara Nusantara, should be construed as legal advice (including for any fact or scenario described in each of the documents or any assumptions made in relation to such document). Aksara Nusantara and the terms thereto are intended to serve as a starting point only and should be tailored to meet your specific legal and commercial requirements. Additional documents may be required for your transaction. Makes does not take any responsibility for the contents of Aksara Nusantara. Please obtain legal, tax and other professional advice accordingly.</b></p> 

<p align="justify"><b>Aksara Nusantara is developed by taking into consideration the general nature of early stage startup investments in Indonesia. It should not be construed as how Makes’ positions itself on various matters mentioned herein in any transactions that are handled by Makes.</b></p>

<p align="justify"><b>For queries and comments please contact us at <a href="mailto:tanyaaksara@makeslaw.com" target="_blank" rel="noopener">tanyaaksara@makeslaw.com</a>.</b></p>
<br><br>
                <!-- <p align="justify">In preparing the Aksara Nusantara, Makes is collaborating with prominent early stage startups, venture capital firms, and angel investors in Indonesia, who will provide their inputs following the launching the beta version of Aksara Nusantara.</p> -->
              </div>
              <!-- <div class="col-12 md-12 col-xs-12">
                  <br>
                  <hr>
                  <br>
                  <p class="m-lead text-dark" style="font-size:23px; text-transform:uppercase;">Frequently Asked and Question</p>
                  <p><b>1.	Kenapa harus ada Aksara Nusantara?</b></p>
                  <p>Aksara Nusantara dibuat dengan mengingat saat ini belum terdapat suatu standar paket dokumen yang dapat dipakai dalam proses fundraising early stage startups di Indonesia, padahal banyak Founders perusahaan startup yang belum memiliki pengalaman dan pengetahuan sehubungan dengan proses fundraising. Dikarenakan terdapatnya kesenjangan informasi (asymmetrical information) antara Founders dan Investors dalam proses fundraising, seringkali proses negosiasi antara Founders dan Investor berlangsung berlarut-larut yang akhirnya menyebabkan biaya transaksi menjadi tinggi.</p>
                  <p>Dengan dibuatnya Aksara Nusantara, diharapkan satu paket dokumen ini dapat mengakomodasi dan menjadi acuan bagi Founders maupun Investors dalam proses fundraising sehingga dapat mempersingkat negosiasi dan secara keseluruhan menghemat waktu dan biaya para pihak dalam fundraising.</p>
                  <span id="dots"></span><span id="more">
                    <p><b>2.	Kenapa aspek legal perlu diperhatikan dalam proses fundraising?</b></p>
                    <p>Seringkali, para Founders yang belum memiliki pengalaman dalam proses fundraising tidak memperhatikan dan mengerti ketentuan atas dokumen-dokumen yang ditandatanganinya, walaupun dalam dokumen tersebut terdapat ketentuan yang dapat merugikan Founders. Dengan Aksara Nusantara, diharapkan paket dokumen ini dapat menjembatani kepentingan Investors dan disaat yang sama melindungi hak-hak Founders</p>
                    <p><b>3.	Apakah perusahaan startup tidak perlu lagi lawyer apabila perusahaan startup tersebut sudah merujuk ke Aksara Nusantara?</b></p>
                    <p>Pada umumnya, Aksara Nusantara dapat dipakai oleh seluruh kalangan, mengingat Aksara Nusantara disusun dengan panduan serta bahasa yang mudah dimengerti. Namun dalam prakteknya, kami mengerti bahwa setiap transaksi fundraising memiliki kompleksitasnya sendiri, terutama untuk fundraising series-b dan seterusnya dimana pemangku kepentingan menjadi bertambah. Semakin kompleks suatu transaksi, para pihak disarankan untuk meminta bantuan dari lawyer untuk memberikan advis hukum dan mengakomodasi kepentingannya dalam proses fundraising. </p>
                    <p><b>4.	Kapan Aksara Nusantara dibutuhkan dalam proses fundraising? Apakah dokumen ini berlaku untuk semua tahap fundraising? Bagaimana apabila saya sedang dalam proses pendanaan series-b dengan komitmen investasi puluhan juta USD? Dapatkah saya mengandalkan dokumen Aksara Nusantara ini?</b></p>
                    <p>Aksara Nusantara didesain untuk dapat digunakan dalam semua tahapan fundraising, terutama pada series-a. Namun, mengingat kompleksitas dari proses fundraising pada tahapan-tahapan selanjutnya, maka terdapat beberapa perubahan yang perlu diaplikasikan dalam dokumen-dokumen Aksara Nusantara pada tahapan fundraising selanjutnya.</p>
                    <p><b>5.	Apa yang harus saya lakukan seandainya saya ada pertanyaan legal terkait dokumen-dokumen Aksara Nusantara ini?</b></p>
                    <p>Anda dapat mengajukan pertanyaan tersebut pada email kami tanyaaksara@makeslaw.com.</p>
                    <p><b>6.	Aksara Nusantara terdiri dari dokumen apa saja?</b></p>
                    <p>Aksara Nusantara terdiri dari Term Sheet, Perjanjian Antar Pemegang Saham (Shareholders’ Agreement), Perjanjian Pengambilan Saham (Share Subscription Agreement), Perjanjian Surat Utang Yang Dapat Dikonversi (Convertible Notes Agreement), dan Perjanjian Gadai Saham (Pledge of Shares Agreement).</p>
                    <p><b>7.	Apakah semua klausul dalam dokumen Aksara Nusantara bersifat baku?</b></p>
                    <p>Tidak. Mengingat Aksara Nusantara hanya bersifat sebagai acuan, Anda dapat melakukan penyesuaian terhadap masing-masing ketentuan dari setiap dokumen Aksara Nusantara sesuai dengan kesepakatan komersial para pihak. </p>
                    <p><b>8.	Apakah Aksara Nusantara tersedia dalam bahasa Inggris?</b></p>
                    <p>Aksara Nusantara tersedia untuk diunduh dalam bahasa Inggris dan bahasa Indonesia.</p>
                    <p><b>9.	Apakah terdapat uji tuntas dalam funding?</b></p>
                    <p>Secara umum ya dan mencakup aspek konsep yang akan dikembangkan, aspek korporasi perusahaan startup, Founders-nya serta beberapa aspek finansial, teknologi, legal dan akuntasi.</p>
                    <p><b>10.	Berapa lama biasanya proses penyiapan dan sampai penandatanganan dokumentasi?</b></p>
                    <p>Jangka waktu diskusi, penyiapan struktur, penyiapan draft dokumen, negosiasi sampai dengan penandatangan akan sangat banyak dipengaruhi oleh (1) kesiapan dan kemengertian para pihak atas transaksi yang akan dilakukan, (2) kesiapan dan kehandalan para pihak yang menyiapkan dokumen-dokumen yang diperlukan dan (3) kompleksitas negosiasi yang dilakukan oleh para pihak.
                    Dengan persiapan dan pengelolaan proses yang baik oleh para pihak, maka proses diatas dapat dilakukan dalam waktu yang relatif singkat.</p>
                    <p><b>11.	Apa itu Term Sheet dan apa fungsinya? </b></p>
                    <p>Suatu Term Sheet biasanya dimaksudkan sebagai perjanjian yang tidak mengikat yang memuat syarat, ketentuan, dan kesepakatan prinsipil sebelum para pihak menandatangani perjanjian yang mengikat untuk memberlakukan ketentuan-ketentuan dari Term Sheet, termasuk, tetapi tidak terbatas pada Perjanjian Pengambilan Saham dan Perjanjian Antar Pemegang Saham. </p>
                    <p><b>12.	Apa itu Perjanjian Antar Pemegang Saham (Shareholders’ Agreement) dan apa fungsinya?</b></p>
                    <p>Perjanjian Antar Pemegang Saham dapat disebut sebagai perjanjian yang paling penting dalam proses fundraising untuk early stage startup, mengingat perjanjian ini akan menetapkan urusan dan tata kelola perusahaan serta hak dan kewajiban Investors dan Founders sebagai pemegang saham perusahaan.</p>
                    <p>Secara umum, Perjanjian Antar Pemegang Saham akan menetapkan, antara lain hak Investors untuk menunjuk sejumlah direksi dan/atau dewan komisaris di perusahaan dan hal-hal tertentu yang akan memerlukan persetujuan dari Investors. Perjanjian Antar Pemegang Saham juga akan mencakup hak-hak pemegang saham yang umum seperti hak penolakan pertama (right of first refusal), hak ikut serta (tag along), dan yang paling penting, Perjanjian Antar Pemegang Saham akan memuat opsi bagi Investor untuk dapat exit dari perusahaan startup tersebut. </p>
                    <p><b>13.	Apa itu Perjanjian Pengambilan Saham (Share Subscription Agreement) dan apa fungsinya?</b></p>
                    <p>Perjanjian Pengambilan Saham biasanya memuat syarat dan ketentuan dari penerbitan saham oleh perusahaan startup kepada Investors.</p>
                    <p>Secara umum, Perjanjian Pengambilan Saham akan memasukkan kondisi-kondisi yang harus dipenuhi oleh Founders dan/atau perusahaan startup berdasarkan hasil temuan dari hasil uji tuntas hukum. Jika ada kondisi tertentu, yang menurut Investors bersifat material, Perjanjian Pengambilan Saham dapat mengakomodasi pemenuhan kondisi tersebut sebelum penyelesaian transaksi fundraising kedalam suatu “Syarat Pendahuluan”.</p>
                    <p>Keunikan Perjanjian Pengambilan Saham dalam Aksara Nusantara, salah satunya adalah ketika salah satu Investor memutuskan untuk mengakhiri Perjanjian Pengambilan Saham karena kondisi tertentu yang tidak dapat dipenuhi oleh Founders atau perusahaan startup, Perjanjian Pengambilan Saham hanya berakhir bagi pihak tersebut, dan masih akan berlaku untuk Investor lainnya. </p>
                    <p><b>14.	Apa itu Perjanjian Surat Utang Yang Dapat Dikonversi (Convertible Notes Agreement) dan apa fungsinya?</b></p>
                    <p>Perjanjian Surat Utang Yang Dapat Dikonversi biasanya memuat syarat dan ketentuan penerbitan hutang oleh perusahaan startup kepada Investor, yang kemudian hutang tersebut dapat dikonversi menjadi saham di perusahaan startup apabila terjadi suatu kondisi-kondisi tertentu.</p>
                    <p>Keuntungan utama menggunakan Perjanjian Surat Utang Yang Dapat Dikonversi adalah Founders dan Investors tidak dipaksa untuk menentukan nilai valuasi suatu perusahaan startup ketika perusahaan tersebut masih baru berdiri dan tidak memiliki dasar penilaian yang valid. Dalam beberapa kasus, perusahaan startup yang baru berdiri mungkin hanya berupa gagasan yang baru akan mulai diaktualisasikan. Sedangkan, penilaian biasanya baru dapat ditentukan setelah series-a financing, dimana banyak variable yang dapat digunakan sebagai penilain setelah tahap ini.</p>
                    <p><b>15.	Apa itu Perjanjian Gadai Saham (Pledge of Shares Agreement) dan apa fungsinya?</b></p>
                    <p>Dokumen ini bersifat optional, Perjanjian Gadai Saham ini memuat ketentuan penggadaian saham Founders dalam perusahaan startup untuk menjamin kewajiban yang harus dijalankan oleh Founders dan/atau perusahaan startup berdasarkan Perjanjian Surat Utang Yang Dapat Dikonversi.</p>
                    <p>Perjanjian ini juga berfungsi untuk memberikan rasa nyaman kepada Investor (umumnya angel investor) yang tidak memiliki toleransi terhadap risiko berinvestasi kepada perusahaan startup.</p>
                    <p><b>16.	Apakah semua dokumen Aksara Nusantara harus digunakan seluruhnya secara bersamaan?</b></p>
                    <p>Tidak. Para pihak dapat memilih skema transaksi yang diinginkan dan kemudian menyesuaikan dengan dokumen Aksara Nusantara yang relevan. Secara umum, apabila Investors memilih skema untuk berinvestasi kepada perusahaan startup melalui penerbitan saham baru sebagaimana diatur dalam Perjanjian Pengambilan Saham, maka ia kemungkinan tidak akan menggunakan dokumen Perjanjian Surat Utang Yang Dapat Dikonversi dan Perjanjian Gadai Saham. Begitupun sebaliknya.</p>
                  </span>
                <button style="background-color:#34649b;color:#ffffff;padding:10px 25px 10px 25px;" @click="readMore" id="myBtn">Read more</button>
              </div> -->
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
          <div class="col-12 col-md-12 col-xs-12">
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
    },
    readMore(){
      var dots = document.getElementById("dots");
      var moreText = document.getElementById("more");
      var btnText = document.getElementById("myBtn");
      if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
      } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
      }
    }
  }
}
</script>
