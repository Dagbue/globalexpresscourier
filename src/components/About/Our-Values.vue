<template>
  <div class="section-2">

    <div class="section-2-content">

      <h1 class="section-2-header">Our Company Core Values</h1>

      <div class="law">
        <div class="vl"></div>
        <h1 class="section-2-header-2">Focused on the right strategy Customer First is about removing friction. People Led is our employee experience. And Innovation Driven is the value we create for shareowners.</h1>
      </div>

    </div>


    <div class="section-2-content-2">

      <div class="separate">
        <div class="part-1">

          <div class="part-1-content">
            <i class='bx bxs-hourglass'></i>
            <h2>Integrity</h2>
            <p> We will always do the right thing, even when no one is looking.</p>
          </div>

          <div class="part-1-content">
            <i class='bx bxs-truck' ></i>
            <h2>Detailed</h2>
            <p>  We will take great care to ensure all deliveries are completed correctly and documented properly.</p>
          </div>

        </div>

        <div class="part-1">

          <div class="part-1-content">
            <i class='bx bxs-lock-alt' ></i>
            <h2>Protection</h2>
            <p>We will be a reliable and trusted partner to our clients and staff.We handle each parcel carefully</p>
          </div>

          <div class="part-1-content">
            <i class='bx bxs-institution'></i>
            <h2>Detailed</h2>
            <p>We will take great care to ensure all deliveries are completed correctly and documented properly.</p>
          </div>

        </div>

      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: "Our-Values"
}
</script>

<style scoped>

.law{
  display: flex;
}

.law-2-inner p{
  padding-top: 25px;
}

.separate{
  display: flex;
  margin-top: 6%;
  margin-right: 10%;
}

.vl {
  border-left: 6px solid #ec2552;
  height: 135px;
  margin-left: 12%;
}

i{
  font-size: 70px;
  color: rgba(236, 37, 82, 0.7);
}

.part-1-content h2{
}

.part-1-content p{
  width: 70%;
  margin-right: auto;
  margin-left: auto;
}

.part-1-content{
  display: block;
  justify-content: center;
  text-align: center;
  background-color: rgba(255, 255, 255, 0.1);
  margin-right: 5%;
  margin-left: 5%;
  margin-top: 3%;
  padding: 20px;
  border-right: 3px solid rgba(236, 37, 82, 0.7);
}

.part-1{
  display: block;
  flex-direction: row-reverse;
}

.section-2-header-2{
  font-size: 18px;
  width: 70%;
  padding-top: 10px;
  padding-left: 10px;
  text-align: left;
  margin-left: 3%;
}
.section-2 {
  font-size: 16px;
  line-height: 1.75;
  color: #eee;
  height: 95vh;
  background-color: rgba(25, 39, 68, 1);
  background-size: cover;
  background-position: center;
  position: relative;
  margin-bottom: 0;
  /*padding-bottom: 10px;*/
  display: flex;
}

.section-2-header{
  text-align: center;
  padding-top: 5%;
  font-size: 30px;
  font-family: 'BR-Firma-Bold', sans-serif;
}

.section-2-content{
  display: block;
  justify-content: space-between;
  padding-top: 5%;
  font-size: 16px;
  text-align: center;
  width: 50%;
  margin-left: 0;
  padding-left: 0;
  margin-top: 8%;
}

.section-2-content-2{
  width: 50%;
  margin-top: 2%;
}

img{
  width: 9%;
}
section {
  padding-top: 10%;
  width: 100%;
  margin: auto;
}

h2{
  font-family: 'BR-Firma-Bold', sans-serif;
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
  .part-1-content p{
    width: 100%;
    margin-right: auto;
    margin-left: auto;
  }
  .section-2 {
    height: 100%;
    display: block;
  }
  .section-2-content{
    padding-top: 3%;
    width: 100%;
    margin-top: unset;
  }
  .section-2-content-2{
    width: 100%;
    margin-left: 3.5%;
  }
}



@media (max-width: 550px){
  .section-2-content {
    display: block;
  }
  .section-2 {
    height: 100%;
  }
  img{
    width: 18%;
  }

  .section-2-header{
    font-size: 22px;
  }
  .section-2{
    display: block;
    justify-content: space-between;
    padding-top: 3%;
    text-align: center;
  }
  .vl {
    height: 225px;
  }
}

</style>