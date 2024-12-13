<template>
  <div class="section-2">

    <div class="section-2-content">

      <h1 class="section-2-header">We Are Global Express Courier!</h1>

      <div class="law">
        <div class="vl"></div>
        <h1 class="section-2-header-2">Global Express Courier is more than just a delivery service. With our trained customer service representatives, experienced and bonded drivers, and cutting-edge technology, we deliver peace of mind for everyone who needs their package delivered in a rush manner. Our technology allows for real-time tracking during your delivery, and you’ll receive a signature confirmation upon completion.</h1>
      </div>

    </div>


    <div class="section-2-content-2">
      <img alt="About-Image" src="https://images.unsplash.com/photo-1587149185211-28a2ef4c9a10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" class="about-image" />
    </div>


  </div>
</template>

<script>
export default {
  name: "we-are"
}
</script>

<style scoped>

.law{
  display: flex;
}

.about-image{
  width: 95%;
  margin-top: 10%;
  border-radius: 5px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
}

.law-2-inner p{
  padding-top: 25px;
}

.vl {
  border-left: 6px solid #ec2552;
  height: 230px;
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


.section-2-header-2{
  font-size: 17px;
  width: 70%;
  padding-top: 2px;
  padding-left: 10px;
  text-align: left;
  margin-left: 3%;
}
.section-2 {
  font-size: 16px;
  line-height: 1.7;
  color: #071333;
  height: 90vh;
  background-size: cover;
  background-position: center;
  position: relative;
  margin-bottom: 0;
  padding-bottom: 10px;
  display: flex;
  margin-top: 3%;
}

.section-2-header{
  text-align: center;
  padding-top: 5%;
  font-size: 30px;
}

.section-2-content{
  display: block;
  justify-content: space-between;
  padding-top: 1%;
  font-size: 17px;
  text-align: center;
  width: 50%;
  margin-left: 0;
  padding-left: 0;
  margin-top: 8%;
}

.section-2-content-2{
  width: 50%;
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


@media (max-width: 990px) {
  .section-2{
    height: 100%;
    clip-path: unset;
    padding-top: 15px;
    display: block;
    padding-bottom: 50px;
  }

  .section-2-content{
    display: block;
    padding-top: 1%;
    width: 100%;
    margin-top: unset;
  }

  .section-2-content-2{
    width: 100%;
    margin-left: 2.5%;
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
    height: 390px;
  }
  .law{
    margin-top: 2%;
  }
  .about-image{
    width: 95%;
    margin-right: 4%;
  }
}

</style>