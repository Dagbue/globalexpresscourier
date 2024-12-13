<!--suppress BadExpressionStatementJS -->
<template>
  <div class="section-alpha">


    <div class="section-2">


      <form class="form" @submit.prevent="sendDeposit" >

        <div class="form-content">
          <div class="options">
            <select v-model="freight" class="input-form-1" aria-placeholder="Freight-Type" aria-required="required">
              <option value="">Freight Type</option>
              <option value="Road Transportation">Road Transportation</option>
              <option value="Air Transportation">Air Transportation</option>
              <option value="Sea Transportation">Sea Transportation</option>
              <option value="Warehousing">Warehousing</option>
            </select>

            <select  v-model="Incoterms" class="input-form-1" aria-placeholder="Service Pricing" aria-required="required">
              <option value="">Service Pricing</option>
              <option value="BASIC FREIGHT">BASIC FREIGHT</option>
              <option value="STRANDARD FREIGHT">STRANDARD FREIGHT</option>
              <option value="PREMIUM FREIGHT">PREMIUM FREIGHT</option>
            </select>
          </div>

          <div class="options">
            <input type="text" class="input-form-1" placeholder="City of departure" v-model="DepatureCity" required>

            <input type="text" class="input-form-1" placeholder="Total gross weight (KG)" v-model="weight" required>
          </div>

          <div class="options">
            <input type="text" class="input-form-1" placeholder="Delivery City" v-model="DeliveryCity" required>

            <input type="text" class="input-form-1" placeholder="Dimensions" v-model="Dimensions" required>
          </div>

          <div class="options">
            <input type="text" class="input-form-1" placeholder="Email"  v-model="email" required>
          </div>

          <div class="options">
            <textarea rows="7" cols="45" class="input-form-1"  placeholder="Message" v-model="Message" aria-required="required">
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
import {db} from "@/firebase/config";
import router from "@/router";
import {doc, setDoc, serverTimestamp} from "firebase/firestore";
export default {
  name: "quote-body",
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
      await router.push('/')
      await alert("Message Sent")
      await window.scrollTo(0, 0);

    },
  },
}
</script>

<style scoped>
.section-alpha {
  background-image: url("https://transgo.iamabdus.com/v1.1/wp-content/uploads/2019/10/Transparent-background-with-dots.png");
  height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin-bottom: 10%;
}


.section-2 {
  width: 73%;
  margin-top: 4%;
  display: block;
  margin-left: 17%;
  margin-right: auto;
}

.select-2{
  padding-right: 18%;
  padding-left: 5%;
}


i{
  color: #ec2552;
  font-size: 20px;
  font-weight: bold;
}

.form-content{
  background: #192744;
  margin-right: 11%;
  padding-top: 5%;
  padding-bottom: 5%;
  margin-bottom: 10%;
  border-radius: 5px;
}


.options{
  margin-top: 5%;
  display: flex;
  align-content: center;
  align-items: center;
}

.input-form-1{
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  box-sizing: border-box;
  margin-left: 5%;
  margin-right: 5%;
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
  padding: 13px 90px;
  margin-top: 1%;
  background-color: #ec2552;
  border:1px solid #ec2552;
  color: white;
  font-size: 16px;
  border-radius: 5px;
}

.button:hover{
  background-color: white;
  border:1px solid #ec2552;
  color: #ec2552;
}

option{
  font-size: 18px;
}

@media (max-width: 990px){
  .section-2 {
    width: 100%;
    margin-top: 4%;
    display: block;
    margin-left: 3.8%;
    margin-right: auto;
  }
}

@media (max-width: 550px){
  .section-2 {
    width: 100%;
    margin-top: 4%;
    display: block;
    margin-left: unset;
    margin-right: unset;
    margin-bottom: 10%;
  }

  .form-content{
    margin-right: 1%;
    margin-left: 1%;
  }

  .section-alpha{
    margin-bottom: 40%;
    margin-top: 10%;
  }
}

</style>