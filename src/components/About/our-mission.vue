<template>
  <div class="section-2">

    <div class="section-2-content">

      <h1 class="section-2-header">Our Mission</h1>

      <div class="law">
        <i class='bx bx-check-double' ></i>
        <h1 class="section-2-header-2">On time pick-ups</h1>
      </div>

      <div class="law">
        <i class='bx bx-check-double' ></i>
        <h1 class="section-2-header-2">On time deliveries</h1>
      </div>

      <div class="law">
        <i class='bx bx-check-double' ></i>
        <h1 class="section-2-header-2">Accurate and prompt invoicing</h1>
      </div>

      <div class="law">
        <i class='bx bx-check-double' ></i>
        <h1 class="section-2-header-2">Discipline to customers’ procedures</h1>
      </div>

      <div class="law">
        <i class='bx bx-check-double' ></i>
        <h1 class="section-2-header-2">Proactive communication</h1>
      </div>

      <div class="law">
        <i class='bx bx-check-double' ></i>
        <h1 class="section-2-header-2">Exceeding customer expectations and excellent customer service</h1>
      </div>

    </div>


    <div class="section-2-content-2">
      <img alt="About-Image" src="https://images.unsplash.com/photo-1564035105550-e1f02aa8556b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" class="about-image" />
    </div>


  </div>
</template>

<script>
export default {
  name: "our-mission"
}
</script>

<style scoped>

.law{
  display: flex;
  margin-left: 18%;
}

.about-image{
  width: 95%;
  margin-top: 10%;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}
.law-2-inner p{
  padding-top: 25px;
}



i{
  font-size: 50px;
  color: rgba(236, 37, 82, 0.7);
}

.part-1-content h2{
}

.part-1-content p{
  width: 80%;
  margin-right: auto;
  margin-left: auto;
  padding-top: 2px;
}



.section-2-header-2{
  font-size: 18px;
  width: 70%;
  padding-top: 10px;
  padding-left: 10px;
  text-align: left;
  margin-left: 2%;
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
  padding-top: 7%;
  font-size: 16px;
  text-align: center;
  width: 50%;
  margin-left: 0;
  padding-left: 0;
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
  }

  .section-2-content{
    padding-top: unset;
    width: 100%;
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
    font-size: 26px;
  }
  .section-2{
    display: block;
    justify-content: space-between;
    padding-top: 3%;
    text-align: center;
  }
  .about-image{
    width: 95%;
    margin-right: 4.5%;
  }
}

</style>