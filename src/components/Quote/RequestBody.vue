<template>
  <div>
    <div class="alpha">

      <div class="section-alpha">

        <div class="section-1">
          <img src="@/assets/truck.png" alt=""  class="image"/>
        </div>
        <div class="section-2">

          <div id="contact-form" class="contact-form">
            <h1 class="contact-form_title">Send a Request</h1>
            <p class="contact-form_paragraph">Our friendly team would love to hear from you.</p>

            <form @submit.prevent="sendMessage"  class="form" >
              <div class="form-separate">
                <div class="split">
                  <label class="label-input">Freight Type</label>
                  <select v-model="freight"
                          required
                          aria-placeholder="Freight-Type"
                          aria-required="required">
                    <option value="">Freight Type</option>
                    <option value="Road Transportation">Road Transportation</option>
                    <option value="Air Transportation">Air Transportation</option>
                    <option value="Sea Transportation">Sea Transportation</option>
                    <option value="Warehousing">Warehousing</option>
                  </select>
                </div>
                <div class="split">
                  <label class="label-input">Service Pricing</label>
                  <select  v-model="Incoterms"
                           required
                           aria-placeholder="Service Pricing"
                           aria-required="required">
                    <option value="">Service Pricing</option>
                    <option value="BASIC FREIGHT">BASIC FREIGHT</option>
                    <option value="STRANDARD FREIGHT">STRANDARD FREIGHT</option>
                    <option value="PREMIUM FREIGHT">PREMIUM FREIGHT</option>
                  </select>
                </div>


              </div>

              <div class="split">
                <label class="label-input">City of departure</label>
                <input type="text"
                       class="input-form-1"
                       placeholder="Enter City of departure"
                       v-model="DepatureCity" required>
              </div>

              <div class="split">
                <label class="label-input">Total gross weight (KG)</label>
                <input type="text"
                       class="input-form-1"
                       placeholder="Enter total gross weight (KG)"
                       v-model="weight" required>
              </div>



              <div class="split">
                <label class="label-input">Delivery City</label>
                <input type="text"
                       class="input-form-1"
                       placeholder="Enter delivery City"
                       v-model="DeliveryCity" required>
              </div>

              <div class="split">
                <label class="label-input">Dimensions</label>
                <input type="text"
                       class="input-form-1"
                       placeholder="Enter Dimensions"
                       v-model="Dimensions" required>
              </div>

              <div class="split">
                <label class="label-input">Email</label>
                <input type="text"
                       class="input-form-1"
                       placeholder="Enter Email"
                       v-model="email" required>
              </div>



              <div class="split">
                <label class="label-input">Message</label>
                <textarea
                    name="message"
                    rows="4"
                    placeholder="Leave us a message..."
                    required
                    style="
                                    font-family: 'BR-Firma-Regular', sans-serif;
                                    letter-spacing: 1.5px;
                                    font-size: 13px;
"
                    v-model="message"
                ></textarea>
              </div>

                            <div class="split-2">
                              <button class="auth2" @click="register">Get Quote</button>
                            </div>

            </form>
          </div>

        </div>

      </div>

    </div>



  </div>
</template>

<script>
import Swal from "sweetalert2";
import {db} from "@/firebase/config";
import {doc, setDoc, serverTimestamp} from "firebase/firestore";

export default {
  name: "RequestBody",
  data() {
    return {
      freight: "",
      Incoterms: "",
      DepatureCity: "",
      weight: "",
      DeliveryCity: "",
      Dimensions: "",
      email: "",
      message: "",
      loading: false,  // This will track whether the form is sending or not
    };
  },
  methods: {


    async sendMessage() {
      this.loading = true;  // Start loading
      try {
        await setDoc(doc(db, "Quotes", this.email), {
          freight: this.freight,
          Incoterms: this.Incoterms,
          DepatureCity: this.DepatureCity,
          weight: this.weight,
          DeliveryCity: this.DeliveryCity,
          Dimensions: this.Dimensions,
          email: this.email,
          Message: this.message,
          createdAt: serverTimestamp(),
        }, { merge: true });

        await Swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'Request sent Successfully!',
        });
      } catch (error) {
        console.error("Error sending message:", error);
        await Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
        });
      } finally {
        this.resetForm();
        this.loading = false;  // Stop loading
      }
    },

    resetForm() {
      this.freight = '';
      this.Incoterms = '';
      this.email = '';
      this.DepatureCity = '';
      this.weight = '';
      this.DeliveryCity = '';
      this.Dimensions = '';
      this.message = '';
    },

  }
}
</script>

<style scoped>

.alpha{
  /*background-image: url("@/assets/background.png");*/
  /*background-color: #000;*/
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  padding-bottom: 5%;
  padding-top: 5%;
}
.section-alpha{
  display: flex;
  align-content: center;
  align-items: center;
}

.section-1{
  width: 50%;
}

.section-2{
  width: 50%;
}

.image{
  width: 85%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  border-radius: 12px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}

.contact-form {
  max-width: 540px;
  width: 100%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  /*margin-right: 10%;*/
  /*box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);*/
  /*padding: 20px 30px;*/
  /*border-radius: 8px;*/
  /*padding-bottom: 40px;*/
}

.contact-form  {
  /*border-bottom: solid 1px #ccc;*/
  /*margin-bottom: 15px;*/
}

.contact-form .form {
  display: flex;
  flex-direction: column;
  font-size: 16px;
}

.contact-form_title {
  text-align: left;
  font-size: 36px;
  line-height: 44px;
  padding-bottom: 10px;
  color: #101828;
  font-family: 'BR-Firma-Bold', sans-serif;
}

.contact-form_paragraph {
  text-align: left;
  font-size: 20px;
  line-height: 30px;
  padding-bottom: 6%;
  color: #475467;
}

.contact-form input[type="email"],
.contact-form input[type="text"],
.contact-form input[type="number"],
.contact-form textarea {
  padding: 11px 16px;
  margin-bottom: 15px;
  margin-top: 5px;
  outline: none;
  width: 100%;
  border-radius: 12px;
  color: #475467;
}


.contact-form select{
  padding: 11px 16px;
  margin-bottom: 15px;
  margin-top: 5px;
  outline: none;
  width: 100%;
  border-radius: 12px;
}

.contact-form textarea {
  resize: none;
}

.contact-form .button {
  background: #911e37;
  border: 1px solid #911e37;
  color: white;
  cursor: pointer;
  padding: 15px 16px;
  text-align: center;
  border-radius: 12px;
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
  gap: 2.5px;
}

.contact-form .button:hover {
  background: #1F1F2A;
  border: solid 1px #1F1F2A;
}

.contact-form input[type="email"],
.contact-form input[type="text"],
.contact-form input[type="checkbox"],
.contact-form input[type="number"],
.contact-form textarea,
.contact-form .button {
  font-size: 15px;
  border: solid 1px #EEF0F1;
}

.contact-form select{
  font-size: 15px;
  border: solid 1px #EEF0F1;
  color: #475467;
}



.form-separate{
  display: flex;
  justify-content: space-between;
}

.split{
  display: block;
}

.split-2{
  display: flex;
  align-items: center;
  align-content: center;
  margin-bottom: 30px;
}

.check-box-label{
  padding-left: 8px;
  color: #475467;
  font-size: 16px;
}

.label-input{
  color: #070e20;
  font-size: 14px;
}

.btn-image{
  width: 3.5%;
}




.newsletter {
  background: linear-gradient(179.02deg, #DEE1E6 -15.49%, #F7F7F7 107.09%);
  padding-top: 10px;
  padding-bottom: 55px;
}

.parent-wrapper {
  position: relative;
  width: 400px;
  height: 270px;
  margin: 50px auto 0;
  /*background-image: url('http://www.imgbase.info/images/safe-wallpapers/digital_art/1_miscellaneous_digital_art/41750_1_miscellaneous_digital_art_simple_dark_shapes.jpg');*/
  background-size: 100%;
  background-repeat: no-repeat;
  background-position-y: -600%;
  /*background-color: #070e20;*/
  background: #1F1F2A;
  border: 1px solid #1F1F2A;
  border-radius: 4px;
  color: #FFF;
  box-shadow: 0 0 10px 2.5px rgba(0, 0, 0, 0.25);
}

.close-btn {
  margin: 20px;
  font-size: 18px;
  cursor: pointer;
}

.subscribe-wrapper {
  position: absolute;
  left: -30px;
  right: -30px;
  height: 200px;
  padding: 30px;
  background-position-x: 272%;
  background-position-y: -1px;
  background-repeat: no-repeat;
  background-color: #FFF;
  border-radius: 4px;
  color: #333;
  box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.2);
}

.subscribe-wrapper:after {
  position: absolute;
  content: "";
  right: -10px;
  bottom: 71px;
  width: 0;
  height: 0;
  border-left: 0 solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 10px solid #1F1F2A;
}

.subscribe-wrapper h4 {
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 1px;
  padding-top: 25px;
  line-height: 28px;
  font-family: 'BR-Firma-Bold', sans-serif;
}

.subscribe-wrapper input {
  position: absolute;
  bottom: 30px;
  border: none;
  border-bottom: 1px solid #d4d4d4;
  padding: 10px;
  width: 65%;
  background: transparent;
  transition: all .25s ease;
}

.subscribe-wrapper input:focus {
  outline: none;
  background: #1F1F2A;
}

.subscribe-wrapper .submit-btn {
  position: absolute;
  border-radius: 20px 0 0 20px;
  background: #1F1F2A;
  border: 1.5px solid #1F1F2A;
  color: #FFF;
  padding: 12px 25px;
  display: inline-block;
  font-size: 12px;
  font-weight: bold;
  letter-spacing: 2px;
  right: -10px;
  bottom: 30px;
  cursor: pointer;
  transition: all .25s ease;
  /*box-shadow: -5px 6px 20px 0 rgba(51, 51, 51, 0.4);*/
}

.subscribe-wrapper .submit-btn:hover {
  background: #1F1F2A;
}

.auth2{
  background: linear-gradient(180deg, #f15070 0%, #ec2552 100%);
  border: 1px solid #f15070;
  color: #ffffff;
  padding: 0.9em 30px 0.8em 30px;
  border-radius: 12px;
  position: relative;
  display: inline-block;
  text-decoration: none;
  -webkit-transition: all 0.1s ease;
  transition: all 0.25s ease;
  margin: 0 2.5px;
  width: 100%;
  text-align: center;
  font-size: 13px;
}


@media (max-width: 990px){
  .alpha{
    display: block;
  }
  .contact-form{
    margin-left: 20%;
    margin-top: 10%;
  }
  .contact-form_title{
    font-size: 26px;
  }
}

@media (max-width: 800px) {
  .contact-form{
    margin-left: 11%;
  }

  .section-alpha{
    display: block;
  }

  .section-1{
    width: 100%;
  }

  .section-2{
    width: 90%;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
}

@media (max-width: 700px){
  .contact-form{
    margin-left: unset;
    margin-top: 10%;
    max-width: unset;
    width: unset;
    margin-right: 20px;
  }
}


@media (max-width: 500px){
  .parent-wrapper {
    position: relative;
    width: 300px;
    height: 270px;
    margin: 50px auto 0;
  }
  .subscribe-wrapper h4 {
    font-size: 17px;
    padding-top: 20px;
  }
}

@media (max-width: 990px){
  .alpha{
    display: block;
  }
  .contact-form{
    margin-left: 20%;
    margin-top: 10%;
  }
  .contact-text{
    text-align: center;
  }
  .contact-text-para-2{
    padding-bottom: unset;
  }
  .contact-text-para-3{
    padding-bottom: unset;
  }
  .contact-form_title{
    font-size: 26px;
  }
}


@media (max-width: 800px) {
  .contact-form{
    margin-left: 11%;
  }
}

@media (max-width: 700px){
  .contact-text-header {
    font-size: 30px;
  }
  .contact-text-para {
    font-size: 18px;
  }
  .contact-form{
    margin-left: unset;
    margin-top: 10%;
    max-width: unset;
    width: unset;
    margin-right: 20px;
  }
}

</style>