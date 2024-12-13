<template>
  <div class="the-footer">
    <div class="bottom">
      <div class="logo-container">
<!--        <img src="@/assets/companylogo.svg" alt="logo" class="footer-img" />-->

          <div class="footer-link-container">
            <h3 class="footer-title">About Us</h3>
            <p class="footer-link">
              Global Express Courier is a leading Freight Forwarder based in Memphis, Tennessee, USA, established in the year 2004, with offices in USA and the United Kingdom.
              We aim to be the most trusted and professional logistics company worldwide. We achieve our vision by: Excellent and friendly customer service Being on time every time Providing efficient and cost-effective solutions Ongoing optimization of infrastructure and operations Bringing a superior level of professionalism in everything we do.
            </p>
          </div>


          <div class="footer-link-container2">
            <h3 class="footer-title">Links</h3>
            <a  class="footer-link" @click="onPostClick">Home</a>
            <a  class="footer-link" @click="onPostClick2">About Us</a>
            <a  class="footer-link" @click="onPostClick3">Services</a>
            <a  class="footer-link" @click="onPostClick4">Pricing</a>
            <a  class="footer-link" @click="onPostClick5">Tracking</a>
            <a  class="footer-link" @click="onPostClick6">Get Quote</a>
          </div>

          <div class=" stay-connected">
            <h3 class="footer-title">Stay connected</h3>
            <div class="socials-container">
              <div class="social-logo">
                <div class="last-div">
                  <i class='bx bxs-map' ></i>
                  <p class="last-div-para">3560 Air Center Cove Ste 101 Memphis, Tennessee, USA</p>
                </div>
              </div>
              <div class="social-logo">
                <div class="last-div">
                  <i class='bx bxs-map' ></i>
                  <p class="last-div-para">178-188 Great South West Road Orbital Park London TW4 6JS UK</p>
                </div>
              </div>
              <div class="social-logo">
                <div class="last-div">
                  <i class='bx bx-mail-send'></i>
                  <p class="last-div-para">support@global-express-courier.com</p>
                </div>
              </div>

              <div class="social-logo">
                <div class="last-div">
                  <i class='bx bxs-phone'></i>
                  <p class="last-div-para">+1760-314-5437</p>
                </div>
              </div>

              <div class="social-logo">
                <div class="last-div">
                  <i class='bx bxl-whatsapp'></i>
                  <p class="last-div-para">+1 401-281-8808</p>
                </div>
              </div>
            </div>
          </div>
      </div>

    </div>
    <hr />
    <div class="copyright-content-2">
      <p class="copyright-2">
        <i class='bx bxl-facebook'></i>
      </p>
      <p class="copyright-2">
        <i class='bx bxl-twitter' ></i>
      </p>

      <p class="copyright-2">
        <i class='bx bxl-google-plus' ></i>
      </p>
      <p class="copyright-2">
        <i class='bx bxl-instagram-alt' ></i>
      </p>
      <p class="copyright-2">
        <i class='bx bxl-venmo' ></i>
      </p>
      <p class="copyright-2">
        <i class='bx bxl-linkedin' ></i>
      </p>
    </div>
    <hr />
    <div class="copyright-content">
      <p class="copyright">
        Copyright © 2022 Global Express Courier. All rights reserved
      </p>
      <p class="copyright">
        Privacy Policy
      </p>

      <p class="copyright">
        Terms & Conditions
      </p>
    </div>
  </div>
</template>

<script >
export default {
  name: "footer-home",
  methods: {
    onPostClick() {
      this.$router.push("/");
      window.scrollTo(0, 0);
    },
    onPostClick2() {
      this.$router.push("/about");
      window.scrollTo(0, 0);
    },
    onPostClick3() {
      this.$router.push("/services");
      window.scrollTo(0, 0);
    },
    onPostClick4() {
      this.$router.push("/pricing");
      window.scrollTo(0, 0);
    },
    onPostClick5() {
      this.$router.push("/tracking");
      window.scrollTo(0, 0);
    },
    onPostClick6() {
      this.$router.push("/quote");
      window.scrollTo(0, 0);
    },
  },
  mounted() {
    let externalScript = document.createElement('script')
    externalScript.setAttribute('src', "https://www.livecoinwatch.com/static/lcw-widget.js")
    document.head.appendChild(externalScript)
  },
}
</script>

<style scoped>
.the-footer {
  background-color: #192744;
  color: #ffffff;
  padding: 4vh  2vh;
}

.logo-container {
  display: flex;
  justify-content: space-around;
  padding-top: 2%;
}

.footer-title {
  font-size: 22px;
  line-height: 20px;
  padding-bottom: 5px;
}

.footer-link {
  display: block;
  font-size: 16px;
  line-height: 23px;
  opacity: 0.8;
  padding-top: 10px;
}

.footer-link-container {
  margin-left: 4%;
  margin-right: 4%;
  width: 30%;
}

.footer-link-container2{
  padding-right: 4%;
}

.socials-container {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding-top: 20px;
  width: 100%;
}
.social-logo {
}

hr {
  color: white;
  width: 100%;
  background-color: white;
  border: 1px solid white;
  opacity: 0.15;
  margin-top: 30px;
}

.copyright {
  font-size: 13px;

  text-align: center;
  opacity: 0.75;
  margin-top: 20px;
  padding-bottom: 0;
  margin-bottom: 0;
}



.copyright-content{
  display: flex;
  justify-content: space-around;
}
.copyright-content-2{
  display: flex;
  justify-content: space-evenly;
  margin-right: 25%;
  margin-left: 25%;
  margin-top: 2%;
  margin-bottom: 0;
  padding-bottom: 0;
}
.footer-img {
  width: 20%;
  margin-left: 2%;
}
a {
  text-decoration: none;
  color: white;
  transition: ease 0.3s;
}
a:hover{
  color: #ec2552;
  /*font-size: 22px;*/
}


.bx {
  font-size: 26px;
}

.last-div{
  display: flex;
  margin-bottom: 15px;
}
.last-div-para{
  font-size: 16px;
  padding-left: 10px;
  padding-top: 6px;
  line-height: 1.3;
  text-align: left;
}

.footer-title{
  color: #ec2552;
  font-weight: bold;
}

@media (max-width: 990px) {
  .footer-link-container {
    margin-left: 2%;
    margin-right: 3%;
    width: 80%;
  }
}
@media (max-width: 800px) {
  .bottom {
    display: block;
    align-content: center;
    text-align: center;
  }

  .the-footer {
    margin-top: unset;
  }
  .footer-img {
    width: 50%;
    min-width: unset;
    border-radius: 20px;
    margin-bottom: 20px;
  }
  .footer-link-container {
    margin-left: unset;
    margin-right: unset;
    width: unset;
    margin-bottom: 15%;
    margin-top: 10%;
  }
  .footer-link-container2 {
    margin-bottom: 18%;
  }
  .last-div{
    margin-right: 10%;
    margin-bottom: unset;
  }
  .copyright{
    font-size: 17px;
  }
}
@media (max-width: 750px) {
  .footer-link-container {
    margin-left: unset;
    margin-right: unset;
    width: unset;
  }
  .footer-link {
    display: block;
    font-size: 16px;
  }
  .footer-title {
    font-size: 21px;
    padding-bottom: unset;
  }

  .footer-img {
    width: 50%;
    display: block;
    margin-right: auto;
    margin-left: 37%;
  }
  .copyright{
    font-size: 13px;
  }
  .bx{
    font-size: 18px;
  }
  .last-div-para{
    font-size: 16px;
    padding-left: 8px;
  }
  .logo-container {
    display: flex;
    flex-direction: column;
    padding-top: 2%;
  }
}
</style>

