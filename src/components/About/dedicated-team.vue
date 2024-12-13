<template>
  <div class="trusted-alpha">
    <h2 class="trust-header">Our Dedicated Team</h2>

    <div class="section-1">
      <div class="section">
        <img class="one" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80">
        <h2>Terry Douglas, CEO</h2>
        <p>Terry brings over 25 years of Senior Executive experience in the areas of company growth and profitability, process improvement, product development, team building/restructuring and more.

          Terry has been a successful business leader in both the Consumer Products as well as the Utility industries serving in roles from Executive Vice President to CEO.</p>

      </div>
      <div class="section">
        <img class="two" src="https://images.unsplash.com/photo-1642792735536-b6f7ef18b918?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80">
        <h2>Dana Webb</h2>
        <p> Having worked for some of the top, large logistics companies in the country, Dana brings to his current role experience longevity, along with a proven track record for improving operations and productivity, reducing labor cost and increasing branch profitability, among other accomplishments. The branches he has managed through the years have often been recognized as top performers in the company.</p>

      </div>
      <div class="section">
        <img class="three" src="https://images.unsplash.com/photo-1598257006458-087169a1f08d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80">
        <h2>Sherrie Bourgoyne</h2>
        <p>Sherrie has been with the company for over 30 years. In her early role as Branch Manager, she proved her leadership abilities by increasing on-time deliveries to over 98% and consistently maintaining the strongest employee retention rate in the company, among other accomplishments.</p>

      </div>
    </div>


  </div>
</template>

<script>
export default {
  name: "dedicated-team"
}
</script>


<style scoped>

.section-1{
  display: flex;
  margin-left: 3%;
  margin-right: 3%;
  justify-content: space-around;
}
.trust-header{
  text-align: center;
  padding-bottom: 3%;
  color: #071333;
  font-size: 32px;
  font-weight: bold;
  font-family: GTEestiProDisplay-Regular, serif;
}

.trust-text{
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  width: 55%;
  padding-bottom: 30px;
  padding-top: 2px;
  font-size: 19px;
  color: #071333;
  font-family: GTEestiProDisplay-Regular, serif;
}

/*img{*/
/*  width: 100%;*/
/*  margin-top: 0;*/
/*  padding-top: 0;*/
/*}*/

.one{
    width: 135%;
    margin-top: 0;
  padding-right: 34.7%;
    padding-top: 0;
  padding-bottom: 0;
}
.two{
  width: 100%;
  margin-top: 0;
  padding-top: 0;
}
.three{
  width: 100%;
  margin-top: 0;
  padding-top: 0;
}
.section{
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-left: 2%;
  margin-right: 2%;
  border-radius: 15px;
  padding: 0 0 5% 0;
}
.section:hover {
  transform: translateY(-6px);
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.9);
  transition: 4ms ease-in;
}
.section:active {
  transform: translateY(-3px);
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.9);
  transition: 4ms ease-in;
}
.section h2{
  text-align: center;
  padding-top: 20px;
  color: #071333;
  margin-bottom: 1%;
  font-family: GTEestiProDisplay-Bold, serif;
}

.section p{
  text-align: center;
  margin-right: auto;
  margin-left: auto;
  width: 90%;
  color: #071333;
  font-size: 18px;
  font-family: GTEestiProDisplay-Light, serif;
  padding-top: 2%;
}
.trusted-alpha{
  padding-bottom: 3%;
}
.header-button{
  padding: 15px 10px;
  background-color: #ec2552;
  border: #ec2552;
  border-radius: 15px;
  margin-top: 5%;
  margin-left: 15%;
  margin-right: 15%;
  color: white;
  font-family: GTEestiProDisplay-Regular, serif;
}

.header-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.9);
  transition: 4ms ease-in;
}
.header-button:active {
  transform: translateY(-1px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.9);
  transition: 4ms ease-in;
}
@media (max-width: 500px) {
  .section-1{
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
  .section{
    margin-bottom: 7%;
  }
}

</style>
