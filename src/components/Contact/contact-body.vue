<template>
  <div class="section-alpha">

    <div class="section-1">
      <h2 class="section-1-header">Get In Touch</h2>

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
      <br/>
      <br/>
      <div class="separate">
        <div class="vl"></div>
        <div class="law">
          <h2 class="section-1-header-2-i">United Kingdom - Branch Office</h2>

          <div class="section-1-content-i">
            <i class='bx bx-location-plus'></i>
            <p class="section-1-content-para-i">178-188 Great South West Road Orbital Park London TW4 6JS United Kingdom </p>
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
            <input type="text" class="input-form-1"  placeholder="Full Name"  v-model="Name" required>
          </div>

          <div class="options">
            <input type="text"  class="input-form-1"  placeholder="Email"  v-model="email" required>
          </div>

          <div class="options">
            <input type="text" class="input-form-1" placeholder="Phone Number"  v-model="PhoneNumber" required>
          </div>

          <div class="options">
            <input type="text"  placeholder="Subject" class="input-form-1" v-model="subject" required>
          </div>


          <div class="options">
            <textarea rows="7" cols="45" class="input-form-1" placeholder="Message" v-model="messages" aria-required="required">
            </textarea>
          </div>
          <button class="button">Send</button>
        </div>
      </form>
    </div>

  </div>
</template>

<script>
import {doc, serverTimestamp, setDoc} from "firebase/firestore";
import {db} from "@/firebase/config";
import router from "@/router";

export default {
  name: "contact-body",
  data() {
    return {
      Name: "",
      email:"",
      PhoneNumber:"",
      subject:"",
      messages:"",
    }
  },
  methods: {
    sendDeposit() {
      // noinspection JSUnresolvedFunction,JSCheckFunctionSignatures
      setDoc(doc(db, "ContactMessage", this.email), {
        Name: this.Name,
        email: this.email,
        PhoneNumber: this.PhoneNumber,
        messages: this.messages,
        subject: this.subject,
        createdAt: serverTimestamp()
      },{ merge: true })
          .then(() => {
            console.log('saved to the database')
          })
      router.push('/')
      alert("Message Sent")
      window.scrollTo(0, 0);
    },
  },
}
</script>

<style scoped>
.section-alpha {
  height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
}


.section-1{
  display: block;
  justify-content: space-between;
  padding-top: 5%;
  font-size: 16px;
  text-align: center;
  width: 50%;
  margin-left: 0;
  padding-left: 0;
}

.section-2 {
  width: 50%;
  margin-top: 4%;
}



.section-1-header{
  letter-spacing: 1px;
  padding-top: 5%;
  font-size: 25px;
  font-family: 'BR-Firma-Bold', sans-serif;
}
.law{
  display: block;
}
.vl {
  border-left: 6px solid #ec2552;
  height: 240px;
  margin-left: 25%;
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
  margin-left: 2%;
  padding-bottom: 5%;
  padding-top: 5%;
}

.section-1-content-i{
  display: flex;
  align-items: center;
  align-content: center;
  margin-left: 3%;
  padding-bottom: 4%;
  padding-top: 4%;
}

.section-1-content-para{
  font-size: 16px;
  /*padding-top: 5px;*/
  padding-left: 2%;
  text-align: left;
}

.section-1-content-para-i{
  font-size: 16px;
  /*padding-top: 5px;*/
  padding-left: 2%;
  text-align: left;
  width: 80%;
}

.form{

}

.form-content{
  background: #192744;
  margin-right: 10%;
  padding-top: 5%;
  padding-bottom: 10%;
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
  width: 82.5%;
  padding: 15px 20px;
  margin: 8px 0;
  display: inline-block;
  box-sizing: border-box;
  margin-right: auto;
  margin-left: auto;
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


.button{
  display: block;
  margin-right: auto;
  margin-left: auto;
  padding: 12px 100px;
  margin-top: 3%;
  background-color: #ec2552;
  border: 1px solid #ec2552;
  color: white;
  border-radius: 5px;
}

.button:hover{
  background-color: white;
  border: 1px solid #ec2552;
  color: #ec2552;
  border-radius: 5px;
}

option{
  font-size: 18px;
}

@media (max-width: 990px){
  .section-alpha {
    height: 100%;
    display: block;
  }

  .section-1{
    width: 100%;
  }

  .section-2{
    width: 100%;
    margin-left: 5%;
  }
}

@media (max-width: 550px){
  .section-1-header{
    font-size: 30px;
  }
  .section-1{
    width: 100%;
  }
  .vl {
    margin-left: 10%;
  }
  .section-2 {
    margin-top: 8%;
    width: 100%;
    margin-left: unset;
    padding-left: unset;
  }
  .form-content{
    margin-right: 2%;
    margin-left: 2%;
  }
}

</style>