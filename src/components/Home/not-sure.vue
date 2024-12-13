<template>
<div class="section-alpha">

  <div class="section-1">
    <h2 class="section-1-header">Not Sure Which Solution Fits Your Business Needs?</h2>
    <div class="separate">
      <div class="vl"></div>
      <div class="law">
        <h2 class="section-1-header-2">United States - Head Quarter</h2>

        <div class="section-1-content">
          <i class='bx bx-location-plus'></i>
          <p class="section-1-content-para">3560 Air Center Cove Ste 101 Memphis, Tennessee, 38118</p>
        </div>

        <div class="section-1-content">
          <i class='bx bxs-phone-incoming'></i>
          <p class="section-1-content-para">+1760-314-5437</p>
        </div>

        <div class="section-1-content">
          <i class='bx bx-envelope' ></i>
          <p class="section-1-content-para">support@global-express-courier.com</p>
        </div>

      </div>
    </div>

    <div class="separate">
      <div class="vl"></div>
      <div class="law">
        <h2 class="section-1-header-2-i">United Kingdom - Branch Office</h2>

        <div class="section-1-content-i">
          <i class='bx bx-location-plus'></i>
          <p class="section-1-content-para-i">178-188 Great South West Road Orbital Park London TW4 6JS United Kingdom</p>
        </div>

        <div class="section-1-content-i">
          <i class='bx bxs-phone-incoming'></i>
          <p class="section-1-content-para-i">+1760-314-5437</p>
        </div>

        <div class="section-1-content-i">
          <i class='bx bx-envelope' ></i>
          <p class="section-1-content-para-i">support@global-express-courier.com</p>
        </div>

      </div>
    </div>

  </div>

  <div class="section-2">
    <form class="form" @submit.prevent="sendDeposit">

      <div class="form-content">
        <div class="options">
          <select class="input-form-1" v-model="freight" aria-placeholder="Freight-Type" aria-required="required">
            <option value="">Freight Type</option>
            <option value="Road Transportation">Road Transportation</option>
            <option value="Air Transportation">Air Transportation</option>
            <option value="Sea Transportation">Sea Transportation</option>
            <option value="Warehousing">Warehousing</option>
          </select>

          <select class="input-form-1" v-model="Incoterms" aria-placeholder="Service Pricing" aria-required="required">
            <option value="">Service Pricing</option>
            <option value="BASIC FREIGHT">BASIC FREIGHT</option>
            <option value="STRANDARD FREIGHT">STRANDARD FREIGHT</option>
            <option value="PREMIUM FREIGHT">PREMIUM FREIGHT</option>
          </select>
        </div>

        <div class="options">
          <input type="text" class="input-form-1"  placeholder="City of departure" v-model="DepatureCity" required>

          <input type="text" class="input-form-1" placeholder="Total gross weight (KG)" v-model="weight" required>
        </div>

        <div class="options">
          <input type="text" class="input-form-1"  placeholder="Delivery City" v-model="DeliveryCity" required>

          <input type="text" class="input-form-1"  placeholder="Dimensions" v-model="Dimensions" required>
        </div>

        <div class="options">
          <input type="text" class="input-form-1"  placeholder="Email"  v-model="email" required>
        </div>

        <div class="options">
          <textarea rows="7" cols="45" class="input-form-1" placeholder="Message" v-model="Message" aria-required="required">

          </textarea>
        </div>
        <br/>
        <br/>
        <br/>
        <button class="button">Send</button>
      </div>


    </form>
  </div>

</div>
</template>

<script>
import {doc, serverTimestamp, setDoc} from "firebase/firestore";
import {db} from "@/firebase/config";
import Swal from "sweetalert2";
import router from "@/router";

export default {
  name: "not-sure",
  data() {
    return {
      freight: "",
      Incoterms:"",
      DepatureCity:"",
      weight:"",
      DeliveryCity:"",
      Dimensions:"",
      email:"",
      Message:"",
      userId: "",
      TrackingNumber: "",
      OrderNumber: "",
      OrderConfirmed: 0,
      OrderShipped: 0,
      OrderEnroute: 0,
      OrderArrived: 0,
      ExpectedArrival: 0,
    }
  },
  methods: {
    async sendDeposit() {
      // noinspection JSUnresolvedFunction,JSCheckFunctionSignatures
      await setDoc(doc(db, "Quotes", this.email), {
        userId: Math.floor(Math.random() * 100) + 1,
        TrackingNumber: Math.floor(100000000000 + Math.random() * 900000000000),
        OrderNumber: Math.random().toString(36).substring(2,7),
        freight: this.freight,
        Incoterms: this.Incoterms,
        DepatureCity: this.DepatureCity,
        weight: this.weight,
        DeliveryCity: this.DeliveryCity,
        Dimensions: this.Dimensions,
        email: this.email,
        Message: this.Message,
        OrderConfirmed: this.OrderConfirmed,
        OrderShipped: this.OrderShipped,
        OrderEnroute:this.OrderEnroute,
        OrderArrived:this.OrderArrived,
        ExpectedArrival: this.ExpectedArrival,
        createdAt: serverTimestamp()
      },{ merge: true })
          .then(() => {
            console.log('saved to the database')
          })
      // router.push('/')
      // alert("Message Sent")
      // window.scrollTo(0, 0);

      await setDoc(doc(db, this.email, "information" ), {
        userId: Math.floor(Math.random() * 100) + 1,
        TrackingNumber: Math.floor(100000000000 + Math.random() * 900000000000),
        OrderNumber: Math.random().toString(36).substring(2,7),
        OrderConfirmed: this.OrderConfirmed,
        OrderShipped: this.OrderShipped,
        OrderEnroute:this.OrderEnroute,
        OrderArrived:this.OrderArrived,
        ExpectedArrival: this.ExpectedArrival,
        createdAt: serverTimestamp()
      },{ merge: true })
          .then(() => {
            console.log('saved to the database again')
          })
      await Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Request Sent!',
      });
      await router.push('/')
      // await window.scrollTo(0, 0);

    },
  },
}
</script>

<style scoped>
.section-alpha {
  background-image: url("https://transgo.iamabdus.com/v1.1/wp-content/uploads/2019/10/Transparent-background-with-dots.png");
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-content: center;
  align-items: center;
}


.section-1{
  display: block;
  justify-content: space-between;
  /*padding-top: 5%;*/
  font-size: 16px;
  text-align: center;
  width: 50%;
  margin-left: 0;
  padding-left: 0;
}

.section-2 {
  width: 50%;
}


.section-1-header{
  text-align: center;
  letter-spacing: 1px;
  padding-top: 5%;
  font-size: 25px;
  font-family: 'BR-Firma-Bold', sans-serif;
  width: 70%;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.law{
  display: block;
}
.vl {
  border-left: 6px solid #ec2552;
  height: 220px;
  margin-left: 15%;
}
.section-1-header-2{
  padding-left: 15px;
  text-align: left;
  font-family: 'BR-Firma-Bold', sans-serif;
}

.section-1-header-2-i{
  padding-left: 15px;
  text-align: left;
  font-family: 'BR-Firma-Bold', sans-serif;
}

i{
  color: #ec2552;
  font-size: 20px;
  font-weight: bold;
}

.separate{
  display: flex;
  margin-top: 3%;
}

.section-1-content{
  display: flex;
  align-items: center;
  align-content: center;
  margin-left: 5%;
  padding-bottom: 3.5%;
  padding-top: 3.5%;
}

.section-1-content-i{
  display: flex;
  align-items: center;
  align-content: center;
  margin-left: 5%;
  padding-bottom: 3%;
  padding-top: 3%;
}

.section-1-content-para{
  font-size: 16px;
  padding-left: 2%;
  text-align: left;
}

.section-1-content-para-i{
  font-size: 16px;
  padding-left: 2%;
  text-align: left;
  width: 75%;
}



.form-content{
  background: #192744;
  margin-right: 11%;
  padding-top: 5%;
  padding-bottom: 8%;
  margin-bottom: 10%;
  border-radius: 5px;
  margin-top: 10%;
}

.options{
  margin-top: 5%;
  display: flex;
  align-content: center;
  align-items: center;
  margin-left: 5.5%;
  margin-right: 5.5%;
}

.input-form-1{
  width: 100%;
  padding: 15px 20px;
  margin: 8px 8px;
  display: inline-block;
  box-sizing: border-box;
}

input {
  box-sizing: border-box;
  border: 1px solid #D0D5DD;
  border-radius: 5px;
  -webkit-transition: 0.3s;
  padding-top: 12px;
  padding-bottom: 12px;
  transition: 0.3s;
  outline: none;
  color: #101828;
  background-color: #FFFFFF;
  letter-spacing: 0.5px;
}

input:focus {
  border: 1px solid #2E90FA;
}

input::placeholder{
  color: #D0D5DD;
}

textarea {
  box-sizing: border-box;
  border: 1px solid #D0D5DD;
  border-radius: 5px;
  -webkit-transition: 0.3s;
  padding-top: 12px;
  padding-bottom: 12px;
  transition: 0.3s;
  outline: none;
  color: #101828;
  margin-bottom: 1%;
  letter-spacing: 0.5px;
}

textarea:focus {
  border: 1px solid #2E90FA;
}

textarea::placeholder {
  color: #D0D5DD;
  font-family: 'Outfit', sans-serif;
}

select {
  box-sizing: border-box;
  border: 1px solid #D0D5DD;
  border-radius: 5px;
  -webkit-transition: 0.3s;
  padding-top: 12px;
  padding-bottom: 12px;
  transition: 0.3s;
  outline: none;
  color: #101828;
  margin-bottom: 1%;
  letter-spacing: 0.5px;
}

select:focus {
  border: 1px solid #2E90FA;
}

select::placeholder {
  color: #D0D5DD;
}

.button{
  display: block;
  margin-right: auto;
  margin-left: auto;
  padding: 15px 250px;
  background: linear-gradient(180deg, #f15070 0%, #ec2552 100%);
  border: 1px solid #f15070;
  color: #ffffff;
  border-radius: 12px;
}

.button:hover{
  background-color: white;
  border: 1px solid #ec2552;
  color: #ffffff;
}



@media (max-width: 990px) {
  .section-alpha {
    display: block;
    /*margin-left: auto;*/
    /*margin-right: auto;*/
  }

  .section-1{
    width: 100%;
  }

  .section-2{
    width: 100%;
  }

  .form-content{
    margin-right: 4%;
    margin-left: 4%;
  }
}

@media (max-width: 550px){
  .vl {
    margin-left: 11%;
    margin-bottom: 2%;
  }


}

</style>
