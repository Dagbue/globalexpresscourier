<template>
  <div class="alpha">

    <div class="section-alpha">

      <div class="section-1">
        <p class="text-1">>500K</p>
        <p class="text-2">Employees</p>
        <hr class="new"/>
      </div>

      <div class="section-1">
        <p class="text-1">200+</p>
        <p class="text-2">Countries and territories</p>
        <hr class="new"/>
      </div>

      <div class="section-1">
        <p class="text-1">22.3M</p>
        <p class="text-2">Packages delivered per day</p>
        <hr class="new"/>
      </div>

      <div class="section-1">
        <p class="text-1">$91B</p>
        <p class="text-2">Total revenue for 2023</p>
        <hr class="new"/>
      </div>

      <div class="section-2">
        <p class="text-3">Get Quote</p>
      </div>

    </div>


  </div>
</template>

<script>
export default {
  name: "AboutSection1",
  methods: {
    onPostClick() {
      this.$router.push("/register");
    },
    onPostClick2() {
      this.$router.push("/login");
    },
  },
}
</script>

<style scoped>
.alpha{
  background-image: url("@/assets/bus-image.jpg");
  background-color: #cccccc;
  height: 600px;
  width: 75%;
  display: block;
  margin-left: auto;
  margin-right: auto; 
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  margin-top: 8%;
  margin-bottom: 8%;
  border-radius: 8px;
}

.section-alpha {
  background: #fff;
  padding: 40px 50px;
  float: right;
  width: 100%;
  border-radius: 8px;
  opacity: 1;
  max-width: 400px;
  margin-right: 10%;
  margin-top: 3%;
}

.section-1{
  margin-bottom: 7%;
  text-align: center;
}

.new{
  border: 2px solid #f2f2f2;
  margin-top: 6%;
}

.text-1{
  font-size: 30px;
  font-family: 'BR-Firma-Bold', sans-serif;
}

.text-3{

  background: linear-gradient(180deg, #f15070 0%, #ec2552 100%);
  border: 1px solid #f15070;
  color: #ffffff;
  padding: 0.7em 30px 0.6em 30px;
  border-radius: 12px;
  position: relative;
  display: inline-block;
  text-decoration: none;
  -webkit-transition: all 0.1s ease;
  transition: all 0.25s ease;
  margin: 0 2.5px;
  width: 240px;
  text-align: center;
  font-size: 13px;
  display: block;
  margin-right: auto;
  margin-left: auto;
}

@media (max-width: 700px) {

}


@media (max-width: 500px) {

}
</style>