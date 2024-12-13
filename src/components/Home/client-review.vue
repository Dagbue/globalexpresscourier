<template>
  <div class="section-2">
    <h1 class="section-2-header">Clients That Trust Our Services</h1>
    <h1 class="section-2-header-2">Our team are always happy to receive feedback from our customers, as it helps us improve our services. Here is a sample of the testimonials that we have received.</h1>
    <div class="section-2-content">

      <div class="container">
        <img src="https://images.unsplash.com/photo-1614786269829-d24616faf56d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80" alt="Avatar" style="width:90px">
        <span>–Kathleen H</span>
        <p>Legal Industry Client </p>
        <p>“The staff has been fantastic. Whenever we need a pickup and delivery even for some complicated ones, it gets done on time. You have made my life easier. Kudos to all your staff.”</p>
      </div>

      <div class="container">
        <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="Avatar" style="width:90px">
        <span>–Jim V.</span>
        <p>Interoffice & Bank Delivery Client</p>
        <p>"[We have] a record of outstanding performance by Global Express Courier in delivering and returning highly-sensitive documents, compliance certificates, and payroll checks associated with our work locations."</p>
      </div>

      <div class="container">
        <img src="https://images.unsplash.com/photo-1642050923713-c48db6ea4bec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="Avatar" style="width:90px">
        <span>–Tanya R</span>
        <p>Medical Industry Client </p>
        <p>“Your staff, from the person that answers the phone to the person making the pick-up or delivery, is excellent! We appreciate your professionalism and wonderful service.”</p>
      </div>

    </div>
    <a @click.prevent="onPostClick" class="btn btn-white btn-animated">Get Started</a>
  </div>
</template>

<script>
export default {
name: "client-review",
  methods: {
    onPostClick() {
      this.$router.push('/quote');
      window.scrollTo(0, 0);
    }
  },
}
</script>

<style scoped>

.section-2-header-2{
  font-size: 17px;
  width: 70%;
  margin-right: auto;
  margin-left: auto;
  text-align: center;
  letter-spacing: 1px;
}

.section-2 {
  font-size: 16px;
  line-height: 1.7;
  color: #eee;
  height: 100%;
  background-image:
      linear-gradient(to right bottom,
      rgba(25, 39, 68, 0.93),
      rgba(25, 39, 68, 0.93)),
      url("https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=449&q=80");
  background-size: cover;
  background-position: center;
  position: relative;
  margin-bottom: 0;
  padding-bottom: 40px;
}

.section-2-header{
  text-align: center;
  letter-spacing: 1px;
  padding-top: 3%;
  font-size: 28px;
}

.section-2-content{
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  text-align: center;
  padding-left: 8%;
  padding-right: 8%;
}


.btn:hover {
  background-color: white;
  border: 1px solid #ec2552;
  color: #ec2552;
}

.btn-white {
  background-color: #ec2552;
  border: 1px solid #ec2552;
  color: white;
  font-size: 15px;
  text-decoration: none;
  margin-top: 2%;
  margin-left: 42%;
  padding: 13px 75px;
  display: inline-block;
  transition: all .3s;
  position: relative;
  border-radius: 5px;
}
img{
  width: 26%;
}
.container {
  border: 2px solid rgba(122,122,122,.23);
  background-color: rgba(122,122,122,.23);
  border-radius: 5px;
  padding: 16px;
  margin: 16px 0;
  width: 33%;
  height: 50%;
  margin-top: 3%;
}

.container::after {
  content: "";
  clear: both;
  display: table;
}

.container img {
  float: left;
  margin-right: 20px;
  border-radius: 50%;
}

.container p {
  font-size: 18px;
  margin-right: 15px;
  color: #071333;
}

.container span {
  font-size: 20px;
  margin-right: 15px;
  color: #ec2552;
}

@media (max-width: 990px) {
  .section-2{
    clip-path: unset;
    padding-top: 15px;
  }
  .btn-white{
    margin-left: 39%;
  }
  .section-2-header{
    font-size: 30px;
  }
  .section-2-content{
    display: block;
    margin-left: 5%;
    margin-right: 5%;
    padding-left: unset;
    padding-right: unset;
  }
  .container {
    border-radius: 5px;
    padding: 16px;
    width: 100%;
    height: 50%;
    margin-top: 3%;
  }
  .section-2-header{
    padding-top: 2%;
  }
  .section-2-header-2{
    width: 80%;
    letter-spacing: 0.5px;
  }
  .container p {
    margin-right: unset;
  }
}

@media (max-width: 800px) {
  .section-2 {
    height: 100%;
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
    font-size: 25px;
    margin-bottom: 1.5%;
  }

  .section-2-header-2{
    font-size: 18px;
    width: 80%;
  }

  .btn-white {
    margin-top: 4%;
    margin-bottom: 2%;
    margin-left: unset;
    padding: 9px 30px;
    font-size: 15px;
  }

  .section-2{
    display: block;
    justify-content: space-between;
    padding-top: 3%;
    text-align: center;
  }
}

@media (max-width: 500px) {
  .container {
    text-align: center;
  }
  .container img {
    margin: auto;
    float: none;
    display: block;
  }
}

</style>