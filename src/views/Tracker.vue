<template>
<div class="section-alpha">

  <div class="container">
    <div class="details">

      <div class="order">

        <h1>order<span>x3yhd45</span></h1>

      </div>

      <div class="date">
        <p>Expected Arrival</p>
        <p>15th <b>May 2022</b></p>
      </div>

    </div>

  <div class="separate">
  <div class="skill">
    <div class="outer">

      <div class="inner">
        <div id="number">
          50%
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
          0%
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
          0%
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
          0%
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
  <br/>
  <br/>
  <br/>

  <news-letter/>
  <footer-home/>
</template>

<script>


import NewsLetter from "@/components/Home/news-letter";
import FooterHome from "@/components/Home/footer-home";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Tracker",
  components: {FooterHome, NewsLetter},
  data() {
    return {
      number: "",
    };
  },
  methods: {
   async onPostClick() {
      this.$router.push("/");
      window.scrollTo(0, 0);
    },
  },
  props: {
    information: String
  }
}

</script>


<style scoped>
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
.section-alpha{
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
  font-family: GTEestiProDisplay-Bold,serif;
}

.order span{
  color: #ec2552;
  font-family: GTEestiProDisplay-Bold,serif;
}

.date p{
  font-size: 1.1rem;
  font-family: GTEestiProDisplay-Bold,serif;
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

button{
  padding-left: 3%;
  padding-right: 3%;
  padding-top: 1.5%;
  padding-bottom: 1.5%;
  color: white;
  background-color: #ec2552;
  border: none;
  border-radius: 20px;
  letter-spacing: 0.8px;
  font-family: GTEestiProDisplay-Regular,serif;
  margin-top: 17%;
  margin-left: 5%;
}

button:hover{
  box-shadow: 0 0 10px rgba(0, 0, 0, 1);
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
  color: #555;
  font-size: 22px;
  font-family: GTEestiProDisplay-Bold,serif;
}

.skill p{
  font-size: 18px;
  font-weight: 700;
  font-family: GTEestiProDisplay-Bold,serif;
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
    margin-left: 22%;
  }

  .details{
    display: flex;
    text-align: center;
    margin-left: 10%;
  }

  .date{
    margin-left: 20%;
  }

  button{
    padding-left: 8%;
    padding-right: 8%;
    padding-top: 5%;
    padding-bottom: 5%;
    margin-top: 50%;
    margin-left: 20%;
  }
}



</style>