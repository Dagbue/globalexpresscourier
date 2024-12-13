<template>
  <div class="section-alpha">



    <div class="section-1">

      <img src="https://transgo.iamabdus.com/v1.1/wp-content/uploads/2019/12/partner-company-4.png.webp" class="image">
      <div class="vl"></div>
      <img src="https://transgo.iamabdus.com/v1.1/wp-content/uploads/2019/12/partner-company-5.png.webp" class="image">
      <div class="vl"></div>
      <img src="https://transgo.iamabdus.com/v1.1/wp-content/uploads/2019/12/partner-company-1.png.webp" class="image">
      <div class="vl"></div>
      <img src="https://transgo.iamabdus.com/v1.1/wp-content/uploads/2019/12/partner-company-2.png.webp" class="image">

      <img src="https://transgo.iamabdus.com/v1.1/wp-content/uploads/2019/12/partner-company-3.png.webp" class="image">

    </div>


  </div>
</template>

<script>
export default {
  name: "about-partners"
}
</script>

<style scoped>
img{
  width: 80%;
  padding-right: 35px;
}


a{
  width: 100%;
}

h1{
  text-align: center;
  padding-top: 4%;
  padding-bottom: 1%;
  margin-bottom: 0;
  color: #071333;
}

.section-alpha{
  padding-bottom: 5%;
  padding-top: 0;
  margin-top: 0;
}

.section-1{
  display: flex;
  justify-content: center;
  background-color: #192744;
  padding-right: 5%;
  padding-left: 5%;
  padding-top: 70px;
  padding-bottom: 70px;
}

.vl {
  border-left: 6px solid rgba(122,122,122,.23);
  height: 100px;
  padding-left: 2%;
  margin-top: 2%;
}

@media (max-width: 990px){
  .section-1{
    padding-right: unset;
    padding-left: unset;
    margin-right: 10%;
    margin-left: 10%;
    display: none;
  }
}
@media (max-width: 500px) {
  img{
    width: 75%;
    padding-bottom: 6%;
  }

  .section-1{
    display: none;
    justify-content: center;
    flex-direction: column;
    margin-left: 21%;
  }



  .vl {
    border-left: none;
    border-bottom: 6px solid rgba(122,122,122,.23);
  }

}
</style>