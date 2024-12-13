<template>
<div class="section-alpha">

  <div class="section">

    <h3>Track Your Item</h3>

    <input type="text" class="input-form-1" placeholder="Enter Email Address" v-model="SelectEmail">


    <button @click="update">Submit</button>

  </div>

  <base-modal @close="hideDialog" v-if="dialogIsVisible" class="subscribe">
    <div class="section-alpha-2" v-for="items in information" :key="items.key">

      <div class="container">
        <div class="details">

          <div class="order">

            <h1>order<span>{{items.OrderNumber}}</span></h1>

          </div>

          <div class="date">
            <p>Expected Arrival</p>
            <p>{{items.ExpectedArrival}}</p>
          </div>

        </div>

        <div class="separate">
          <div class="skill">
            <div class="outer">

              <div class="inner">
                <div id="number">
                  {{items.OrderConfirmed}}
                </div>
              </div>

            </div>
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
              <defs>
                <linearGradient id="GradientColor">
                  <stop offset="0%" stop-color="#e91e63" />
                  <stop offset="100%" stop-color="#673ab7" />
                </linearGradient>
              </defs>
              <circle cx="80" cy="80" r="70" stroke-linecap="round" />
            </svg>
            <i class='bx bx-calendar-check' ></i>
            <p>Order Confirmed</p>
          </div>
          <div class="skill">
            <div class="outer">

              <div class="inner">
                <div id="number">
                  {{items.OrderShipped}}
                </div>
              </div>

            </div>
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
              <defs>
                <linearGradient id="GradientColor">
                  <stop offset="0%" stop-color="#e91e63" />
                  <stop offset="100%" stop-color="#673ab7" />
                </linearGradient>
              </defs>
              <circle cx="80" cy="80" r="70" stroke-linecap="round" />
            </svg>
            <i class='bx bxs-ship' ></i>
            <p>Order Shipped</p>
          </div>
          <div class="skill">
            <div class="outer">

              <div class="inner">
                <div id="number">
                  {{items.OrderEnroute}}
                </div>
              </div>

            </div>
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
              <defs>
                <linearGradient id="GradientColor">
                  <stop offset="0%" stop-color="#e91e63" />
                  <stop offset="100%" stop-color="#673ab7" />
                </linearGradient>
              </defs>
              <circle cx="80" cy="80" r="70" stroke-linecap="round" />
            </svg>
            <i class='bx bxs-plane-land' ></i>
            <p>Order Enroute</p>
          </div>
          <div class="skill">
            <div class="outer">

              <div class="inner">
                <div id="number">
                  {{items.OrderArrived}}
                </div>
              </div>

            </div>
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
              <defs>
                <linearGradient id="GradientColor">
                  <stop offset="0%" stop-color="#e91e63" />
                  <stop offset="100%" stop-color="#673ab7" />
                </linearGradient>
              </defs>
              <circle cx="80" cy="80" r="70" stroke-linecap="round" />
            </svg>
            <i class='bx bxs-truck' ></i>
            <p>Order Arrived</p>
          </div>
        </div>


        <button class="button" @click="onPostClick">Back to Home Page</button>

      </div>

    </div>
  </base-modal>


</div>
</template>

<script>
import {collection, getDocs} from "firebase/firestore";
import {db} from "@/firebase/config";
import BaseModal from "@/BaseComponents/modal/BaseModal";


export default {
  name: "tracking-body",
  components: {BaseModal},
  data() {
    return {
      SelectEmail: "",
      information: [],
      dialogIsVisible: false,
    }
  },
  methods: {
    async update() {
      const querySnapshot = await getDocs(collection(db, this.SelectEmail));
      querySnapshot.forEach((doc) => {
        let data = {
          'id': doc.id,
          'TrackingNumber': doc.data().TrackingNumber,
          'OrderNumber': doc.data().OrderNumber,
          'OrderArrived': doc.data().OrderArrived,
          'OrderConfirmed': doc.data().OrderConfirmed,
          'OrderEnroute': doc.data().OrderEnroute,
          'OrderShipped': doc.data().OrderShipped,
          'ExpectedArrival': doc.data().ExpectedArrival,
          'userId': doc.data().userId,
        }
        this.information.push(data)
        this.dialogIsVisible = true;
      })
    },
    async onPostClick() {
      this.$router.push("/");
      window.scrollTo(0, 0);
    },
    hideDialog() {
      this.dialogIsVisible = false;
    },
  }
}
</script>

<style scoped>
.section-alpha{
  margin-bottom: 10%;
}
.section{
  margin-top: 5%;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.4);
  margin-left: 20%;
  margin-right: 20%;
  padding-top: 20px;
  padding-bottom: 20px;
}
.section h3{
  font-size: 20px;
  margin-right: 2%;
  letter-spacing: 0.8px;
}
button{
  margin-left: 3%;
  padding-left: 7%;
  padding-right: 7%;
  padding-top: 1.5%;
  padding-bottom: 1.5%;
  color: white;
  background-color: #ec2552;
  border:1px solid #ec2552;
  border-radius: 5px;
  letter-spacing: 0.8px;
}
button:hover{
  color: #ec2552;
  background-color: white;
  border:1px solid #ec2552;
}

.input-form-1{
  width: 40%;
  padding: 8px 20px;
  margin: 8px 0;
  display: inline-block;
  box-sizing: border-box;
  margin-left: 3%;
  margin-right: 3%;
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

:root{
  --body:#8c9eff;
  --cont:#eceff1;
  --line:#651fff;
  --txt:#007bfd;
  --light:#c5cae9;
}
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.section-alpha-2{
  display: flex;
  justify-content: center;
  align-items: center;
}

.container{
  width: 1100px;
  max-width: 100%;
  padding: 40px;
  margin: 0 30px;
  background: var(--cont);
  position: relative;
}

.details{
  display: flex;
  gap: 1em;
  flex-wrap: wrap;
  justify-content: space-between;
}

.order h1{
  text-transform: uppercase;
}

.order span{
  color: #ec2552;
}

.date p{
  font-size: 1.1rem;
}

.separate{
  display: flex;
  justify-content: space-evenly;
  margin-top: 5%;
}


.skill{
  width: 160px;
  height: 160px;
  /*background: cornflowerblue;*/
  position: relative;
}

.button{
  margin-top: 15%;
}


.outer{
  height: 160px;
  width: 160px;
  border-radius: 50%;
  padding: 20px;
  box-shadow: 6px 6px 10px -1px rgba(0,0,0,0.15),
  -6px -6px 10px -1px rgba(0,0,0,0.15);
}

.inner{
  height: 120px;
  width: 120px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: inset 4px 4px 6px -1px rgba(0,0,0,0.2),
  inset -4px -4px 6px -1px rgba(0,0,0,0.15),
  -0.5px -0.5px 0  rgba(0,0,0,0.15),
  0.5px 0.5px 0  rgba(0,0,0,0.15),
  0 12px 10px -10px rgba(0,0,0,0.05);

}

#number{
  font-weight: bold;
  color: white;
  font-size: 22px;
}

.skill p{
  font-size: 18px;
  font-weight: 700;

  margin-left: 8%;
  letter-spacing: 0.5px;
  margin-top: 7%;
}

circle{
  fill: none;
  stroke: url(#GradientColor);
  stroke-width: 20px;
  stroke-dasharray: 472;
  stroke-dashoffset: 472;
  animation: anim 2s linear forwards;
}

svg{
  position: absolute;
  top: 0;
  left: 0;
}

i{
  font-size: 60px;
  margin-left: 30%;
  margin-top: 10%;
}

@keyframes anim {
  100%{
    stroke-dashoffset: 20;
  }
}

@media (max-width: 550px){
  .separate{
    display: block;
    justify-content: center;
    margin-top: unset;
  }
  .skill{
    margin-top: 35%;
    /*margin-left: 22%;*/
    display: block;
    margin-right: auto;
    margin-left: auto;
  }

  .details{
    display: flex;
    text-align: center;
    margin-left: unset;
    gap: unset;
    flex-wrap: unset;
    margin-bottom: 0;
    padding-bottom: 0;
    margin-right: 10%;
  }
  .date{
    margin-left: unset;
  }

  .button{
    padding-left: 8%;
    padding-right: 8%;
    padding-top: 5%;
    padding-bottom: 5%;
    margin-top: 50%;
    display: block;
    margin-right: auto;
    margin-left: auto;
  }
}


@media (max-width: 990px){
  .section{
    margin-left: 2%;
    margin-right: 2%;
  }
}

@media (max-width: 550px){
  .section h3{
    font-size: 13px;
    letter-spacing: 0.5px;
  }

  .section{
    padding-left: 2%;
    padding-right: 2%;
  }
}


</style>

