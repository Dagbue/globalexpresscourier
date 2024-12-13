<template>
  <div class="section-2">

    <div class="section-2-content">

      <h1 class="section-2-header">REACH YOUR DESTINATION 100% SURE AND SAFE</h1>

      <div class="law">
        <div class="vl"></div>
        <h1 class="section-2-header-2">We are proudly delivering packages throughout the world. Browse our nationwide locations and see why thousands of companies are already using our courier and delivery services today.</h1>
      </div>

      <button class="button" @click="onPostClick">Contact Us</button>

    </div>


    <div class="section-2-content-2">


      <img class="partners-image-1" src="@/assets/support.png" alt="partners">


    </div>


  </div>
</template>

<script>
export default {
  name: "contact-now",
  methods: {
    onPostClick() {
      this.$router.push("/contact");
      window.scrollTo(0, 0);
    },
  },
}
</script>

<style scoped>

.law{
  display: flex;
}


.law-2-inner p{
  padding-top: 25px;
}

.vl {
  border-left: 6px solid #ec2552;
  height: 110px;
  margin-left: 14%;
  margin-top: 1%;
}

.section-2-header-2{
  font-size: 17px;
  width: 70%;
  padding-top: 20px;
  padding-left: 10px;
  text-align: left;
}
.section-2 {
  font-size: 16px;
  line-height: 1.7;
  color: #eee;
  height: 65vh;
  background-image:
      linear-gradient(to right bottom,
      rgba(25, 39, 68, 0.89),
      rgba(25, 39, 68, 0.89)),
      url("https://images.unsplash.com/photo-1565725001033-adccc84507e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80");
  background-size: cover;
  background-position: center;
  position: relative;
  margin-bottom: 0;
  padding-bottom: 10px;
  display: flex;
  align-items: center;
  align-content: center;
}

.section-2-header{
  text-align: center;
  letter-spacing: 0.9px;
  padding-top: 5%;
  font-size: 24px;
  font-family: 'BR-Firma-Bold', sans-serif;
  width: 65%;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.section-2-content{
  display: block;
  justify-content: space-between;
  padding-top: 5%;
  font-size: 16px;
  text-align: center;
  width: 60%;
  margin-left: 0;
  padding-left: 0;
}


.partners-image-1{
  margin-top: 7.3%;
  width: 85%;
  margin-left: 0;
  padding-left: 0;
  border-radius: 12px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}


.section-2-content-2{
  width: 40%;
}

img{
  width: 9%;
}
section {
  padding-top: 10%;
  width: 100%;
  margin: auto;
}

details[open] summary ~ * {
  animation: open 0.4s ease-in;
}

@keyframes open {
  0% {
    transform: translateY(-60px);
    opacity: 0;
  }
  50% {
    transform: translateY(0);
    opacity: 1;
  }
  60% {
    transform: translateX(10px);
  }
  70% {
    transform: translateX(-10px);
  }
  80% {
    transform: translateX(5px);
  }
  90% {
    transform: translateX(-5px);
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
details summary::-webkit-details-marker {
  display: none;
}

details summary {
  width: 100%;
  position: relative;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 300;
  list-style: none;
  padding-top: 18px;
  padding-bottom: 10px;
}

details summary:after {
  content: "+";
  color: black;
  position: absolute;
  font-size: 1.75rem;
  line-height: 0;
  margin-top: 0.75rem;
  right: 0;
  font-weight: bold;
  transform-origin: center;
  transition: 200ms linear;
}
details[open] summary:after {
  transform: rotate(45deg);
  font-size: 3rem;
}
details summary {
  outline: 0;
}
details p {
  font-size: 17px;
  margin: 0 0 1rem;
  padding-top: 1rem;
}
details {
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
  background: rgba(236, 37, 82, 0.5);
  position: relative;
  padding: 20px;
  margin-bottom: 5%;
  border-radius: 15px;
  margin-right: 10%;
}

.button{
  padding: 13px 100px;
  margin-top: 2.5%;
  background: linear-gradient(180deg, #f15070 0%, #ec2552 100%);
  border: 1px solid #f15070;
  color: white;
  border-radius: 12px;
}

.button:hover{
  background-color: white;
  border: 1px solid #ec2552;
  color: white;
}

@media (max-width: 500px){
  .details summary {
    font-size: 20px;
  }
  details p {
    font-size: 16px;
    margin: 0 0 1rem;
    padding-top: 1rem;
  }
  summary{
    font-size: 20px;
  }
  section {
    width: 82%;
  }
}
@media (max-width: 990px) {
  .section-2{
    height: 68vh;
    clip-path: unset;
    padding-top: 15px;
  }
  .section-2-header{
    font-size: 27px;
  }
  .vl {
    height: 145px;
    margin-left: 13%;
  }
  .section-2-header-2{
    font-size: 17px;
    width: 80%;
    padding-top: 20px;
    padding-left: 10px;
    text-align: left;
  }
  .partners-image-1{
    margin-top: 25%;
    width: 90%;
  }
}

@media (max-width: 800px) {
  .section-2 {
    height: 68vh;
  }
}

@media (max-width: 550px){
  .section-2-content {
    display: block;
    width: 100%;
  }
  .section-2 {
    height: 100%;
  }
  img{
    width: 18%;
  }

  .section-2-content-2{
    width: 100%;
  }

  .law{
    margin-bottom: 3%;
    margin-top: 3%;
  }

  .partners-image-1{
    margin-top: 7%;
  }

  .section-2-header{
    font-size: 19px;
    margin-right: 2%;
    margin-left: 2%;
  }
  .section-2{
    display: block;
    justify-content: space-between;
    padding-top: 3%;
    text-align: center;
  }
}

</style>