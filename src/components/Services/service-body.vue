<template>
<div class="section-alpha">
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  <div class="law-1">
  <div class="section-1">
    <i class='bx bxs-truck' ></i>
    <h3>ROAD FREIGHT</h3>
    <p>Our Road Freight Products offer high quality road transportation, from standard services such as LTL (Less-than-Truck Load), PTL (Part) or FTL (Full-Truck Load) shipments to temperature controlled and highly secured transports.</p>
    <a>Read More</a>
  </div>

  <div class="section-2">
    <i class='bx bxs-ship' ></i>
    <h3>SEA FREIGHT</h3>
    <p>With our broad product range we cover different equipment types and consolidation services to ensure your cargo reaches the right place, at the right time in a cost-efficient way. In order to deliver highest reliability we have planned space protection from every major container port in the world.</p>
    <a>Read More</a>
  </div>
  </div>
  <br/>
  <br/>
  <br/>
  <div class="law-1">
    <div class="section-1">
      <i class='bx bxs-plane-take-off' ></i>
      <h3>AIR FREIGHT</h3>
      <p>Working with carefully selected carriers, we operate with schedules on all the world’s major routes so you can plan with certainty and become more efficient. We offer a range of highly flexible products which allow a choice of delivery speeds to best suit your requirements.</p>
      <a>Read More</a>
    </div>

    <div class="section-2">
      <i class='bx bxs-factory'></i>
      <h3>WAREHOUSING</h3>
      <p>Large or small, short term or long term, let Global Express Courier handle all your essential warehousing needs with the same dependability and standards of excellence that we are known for in all our services. Global Express Courier's warehouses are equipped with state-of-the-art surveillance and alarm systems, together with a professionally trained staff.</p>
      <a>Read More</a>
    </div>
  </div>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>

  <div class="law-1-1">
    <div class="section-1-1">
      <i class='bx bx-shield'></i>
      <h3>SAFE & SECURE</h3>
      <p>Looking for safe and secure delivery of high value or sensitive items, look no further with our Secure Courier Service. With fully tracked and deadlocked vehicles we will have your goods protected and carefully delivered with goods always in sight.</p>
    </div>

    <div class="section-1-1">
      <i class='bx bx-train' ></i>
      <h3>FAST DELIVERY</h3>
      <p>With our vast experience & knowledge in this field, we are engaged in providing a quality-assured range of Fast Delivery Courier Services.</p>
    </div>

    <div class="section-1-1">
      <i class='bx bxs-user-pin'></i>
      <h3>24/7 SUPPORT</h3>
      <p>What does 24/7/365 mean? At Courier Express, it means that we are open every second of every day of the year with trained employees who personally dispatch and monitor each and every order we have. </p>
    </div>
  </div>



</div>
</template>

<script>
export default {
  name: "service-body"
}
</script>

<style scoped>

.law-1{
  display: flex;
  margin-left: 17%;
  margin-right: 17%;
}

.law-1-1{
  display: flex;
}

.section-1-1{
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  padding: 85px 30px;
}

.section-1-1 i{
  margin-left: 43%;
}

.section-1-1 h3{
  text-align: center;
  margin-bottom: 7%;
  font-family: 'BR-Firma-Bold', sans-serif;
}

.section-1-1 p{
  text-align: center;
  margin-bottom: 7%;
  font-size: 18px;
}

i{
  color: #ec2552;
  font-size: 60px;
  margin-bottom: 6%;
}

.section-1{
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  padding: 60px 30px;
  border-top: 3px solid #ec2552;
}

.section-1 i{
  margin-left: 43%;
}

.section-1 h3{
  text-align: center;
  margin-bottom: 7%;
  font-family: 'BR-Firma-Bold', sans-serif;
}

.section-1 p{
  text-align: center;
  margin-bottom: 7%;
  font-size: 18px;
}

.section-1 a{
  margin-left: 42%;
  color: #ec2552;
  font-size: 18px;
}

.section-2{
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  padding: 60px 30px;
  border-top: 3px solid #676767;
}

.section-2 i{
  margin-left: 43%;
}

.section-2 h3{
  text-align: center;
  margin-bottom: 7%;
  font-family: 'BR-Firma-Bold', sans-serif;
}

.section-2 p{
  text-align: center;
  margin-bottom: 7%;
  font-size: 18px;
}

.section-2 a{
  margin-left: 42%;
  color: #ec2552;
  font-size: 18px;
}

@media (max-width: 990px){
  .law-1{
    display: flex;
    margin-left: 10%;
    margin-right: 10%;
  }

  .section-1 a{
    margin-left: 30%;
    color: #ec2552;
    font-size: 18px;
  }

  .section-2 a{
    margin-left: 35%;
    color: #ec2552;
    font-size: 18px;
  }

  .section-1-1 i{
    margin-left: 34%;
  }

}

@media (max-width: 990px){
  .law-1{
    display: block;
  }

  .law-1-1{
    display: block;
    margin-left: 3%;
    margin-right: 3%;
  }

  .section-1-1{
    margin-bottom: 10%;
  }

  .section-1-1 i{
    margin-left: 43%;
  }
}
</style>
