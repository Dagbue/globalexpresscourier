<template>
<div>

<!--  <div class="section-1">-->

<!--    <div class="section-1-content">-->
<!--      <p>BASIC FREIGHT</p>-->
<!--    </div>-->
<!--    <div class="section-1-content">-->
<!--      <p>STRANDARD FREIGHT</p>-->
<!--    </div>-->
<!--    <div class="section-1-content">-->
<!--      <p>PREMIUM FREIGHT</p>-->
<!--    </div>-->

<!--  </div>-->


  <div class="third-alpha">

    <div class="third-section top">
      <p class="text-1">Basic Freight</p>
      <p class="text-2">$255 <span class="text-2-inner">/ (per 100km)</span></p>
      <!--            <p class="text-2">Basic plan</p>-->
      <p class="text-3">For those getting started and want a simple plan</p>

      <div class="btn" @click="onPostClick">
        <p>Purchase</p>
      </div>

      <div class="separate">
        <p>Single covered truck</p>
        <i class='bx bxs-info-circle'></i>
      </div>

      <div class="separate">
        <p>Two men for transport</p>
        <i class='bx bxs-info-circle'></i>
      </div>

      <div class="separate">
        <p>Minimum 10 miles</p>
        <i class='bx bxs-info-circle'></i>
      </div>

      <div class="separate">
        <p>Maximum 100 miles</p>
        <i class='bx bxs-info-circle'></i>
      </div>
    </div>

    <div class="third-section top">
      <p class="text-1">Standard Freight</p>
      <p class="text-2">$355 <span class="text-2-inner">/ (per 100km)</span></p>
      <!--            <p class="text-2">Basic plan</p>-->
      <p class="text-3">For small teams and those who want more control over their Freight</p>

      <div class="btn" @click="onPostClick">
        <p>Purchase</p>
      </div>

      <div class="separate">
        <p>Single cooled truck</p>
        <i class='bx bxs-info-circle'></i>
      </div>

      <div class="separate">
        <p>Four men for transport</p>
        <i class='bx bxs-info-circle'></i>
      </div>

      <div class="separate">
        <p>Minimum 10 miles</p>
        <i class='bx bxs-info-circle'></i>
      </div>

      <div class="separate">
        <p>Maximum 200 miles</p>
        <i class='bx bxs-info-circle'></i>
      </div>

      <div class="separate">
        <p>Insurance</p>
        <i class='bx bxs-info-circle'></i>
      </div>

    </div>

    <div class="third-section top">
      <p class="text-1">Premium Freight</p>
      <p class="text-2">$455 <span class="text-2-inner">/ (per 100km)</span></p>
      <!--            <p class="text-2">Basic plan</p>-->
      <p class="text-3">For growing teams who want unlimited access and advanced permissions for Freight</p>

      <div class="btn" @click="onPostClick">
        <p>Purchase</p>
      </div>

      <div class="separate">
        <p>Single or double covered truck</p>
        <i class='bx bxs-info-circle'></i>
      </div>

      <div class="separate">
        <p>Five men for transport</p>
        <i class='bx bxs-info-circle'></i>
      </div>

      <div class="separate">
        <p>Minimum 10 miles</p>
        <i class='bx bxs-info-circle'></i>
      </div>

      <div class="separate">
        <p>Maximum 300 miles</p>
        <i class='bx bxs-info-circle'></i>
      </div>

      <div class="separate">
        <p>Insurance</p>
        <i class='bx bxs-info-circle'></i>
      </div>

      <div class="separate">
        <p>Additional trucks available</p>
        <i class='bx bxs-info-circle'></i>
      </div>

      <div class="separate">
        <p>Additional personnel available</p>
        <i class='bx bxs-info-circle'></i>
      </div>
    </div>

  </div>


</div>
</template>

<script>
export default {
  name: "pricing-body",
  methods: {
    onPostClick() {
      this.$router.push("/quote");
      window.scrollTo(0, 0);
    },
  },
}
</script>

<style scoped>

input[type="checkbox"] {
  position: relative;
  width: 30px;
  height: 15px;
  -webkit-appearance: none;
  appearance: none;
  background: #ec2552;
  outline: none;
  border-radius: 2rem;
  cursor: pointer;
}

input[type="checkbox"]::before {
  content: "";
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background: #fff;
  position: absolute;
  top: 0;
  left: 0;
  transition: 0.5s;
}

input[type="checkbox"]:checked::before {
  transform: translateX(100%);
  background: #fff;
}

input[type="checkbox"]:checked {
  background: #617275;
}

.select-check{
  display: flex;
  align-content: center;
  align-items: center;
  /*margin-top: 1.5%;*/
  padding-bottom: 1px;
}

.select-check p {
  color: #667085;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  padding-right: 5px;
  padding-left: 5px;
}

.select-check-last-paragraph{
  font-size: 12px;
  padding-left: 3px;
}

.select-check-alpha{
  display: block;
  margin-left: 79.5%;
  margin-bottom: 5px;
}

.third-section{
  width: 350px;
  height: 588px;
  background: #FFFFFF;
  border: 1px solid #EAECF0;
  box-shadow: 0px 12px 16px -4px rgba(16, 24, 40, 0.08), 0px 4px 6px -2px rgba(16, 24, 40, 0.03);
  border-radius: 4px;
  margin-left: 4%;
  /*margin-top: 96px;*/
  margin-bottom: 5%;
}

.separate{
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
}

.separate i{
  padding-top: 15px;
  padding-right: 13px;
}

.separate p{
  width: 220px;
  padding-top: 15px;
  font-size: 14px;
  line-height: 24px;
  color: #667085;
  padding-left: 13px;
}

.btn{
  margin-top: 5%;
  margin-bottom: 1%;
}

.btn p{
  display: block;
  margin-left: auto;
  margin-right: auto;
  align-items: center;
  padding: 12px 20px;
  gap: 8px;
  width: 225px;
  height: 44px;
  background: linear-gradient(180deg, #f15070 0%, #ec2552 100%);
  border: 1px solid #f15070;
  color: #ffffff;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border-radius: 8px;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
}

.btn p:hover{
  background-color: white;
  border: 1px solid #ec2552;
  color: #ec2552;
  transition: 4ms ease-in;
}

.third-alpha{
  display: flex;
  justify-content: space-between;
  margin-right: 4%;
  margin-top: 2%;
}

.top{
  margin-top: 1%;
}
.top-half{
  margin-top: 2%;
}

.text-1{
  text-align: center;
  padding-top: 9%;
  padding-bottom: 2%;
  font-size: 21px;
  font-family: 'BR-Firma-Bold', sans-serif;
}

.text-2{
  text-align: center;
  padding-bottom: 5%;
  font-size: 29px;
  font-weight: bold;
}

.text-2-inner{
  font-size: 15px;
  font-weight: normal;
}

.text-3{
  text-align: center;
  font-size: 14px;
  width: 75%;
  display: block;
  margin-right: auto;
  margin-left: auto;
}

@media (max-width: 900px){
  .third-alpha{
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  .third-section{
    width: 400px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    /*margin-top: 96px;*/
    /*margin-bottom: 5%;*/
  }
}
</style>
