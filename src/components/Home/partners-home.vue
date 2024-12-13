<template>
<div class="section-alpha">



  <div class="section-1">

    <a href=""><img src="https://cdn.shopify.com/shopifycloud/web/assets/v1/vite/client/en/assets/shopify-wordmark-monochrome-CpVsfBAAmxEP.svg"></a>
    <div class="vl"></div>
    <a href=""><img src="https://transgo.iamabdus.com/v1.1/wp-content/uploads/elementor/thumbs/client-logo-1-320x320-plwrz50hbf8bsnh5poks2wfop9z4yor7y613xdnupw.png"></a>
    <div class="vl"></div>
    <a href=""><img src="https://transgo.iamabdus.com/v1.1/wp-content/uploads/elementor/thumbs/client-logo-2-320x320-plwrz194k336i7mmbmy9sxdubqho3wcalnf609tfes.png"></a>
    <div class="vl"></div>
    <a href=""><img src="https://transgo.iamabdus.com/v1.1/wp-content/uploads/elementor/thumbs/client-logo-7-320x320-plwrytqf1esvxbxjjjp98za5kniqebifwm7a624ksk.png"></a>


  </div>


</div>
</template>

<script>
export default {
  name: "partners-home",
  components: {  },
}
</script>

<style scoped>
img{
  width: 85%;
  /*padding-right: 35px;*/
  /*padding-left: 10%;*/
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
  padding-bottom: 4%;
  padding-top: 0;
  margin-top: 0;
}

.section-1{
  display: flex;
  justify-content: space-evenly;
  align-content: center;
  align-items: center;
  background-color: #192744;
  padding-right: 3%;
  padding-left: 3%;
  padding-top: 35px;
  padding-bottom: 35px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}

.vl {
  border-left: 4px solid rgba(122,122,122,.23);
  height: 240px;
  /*padding-left: 2%;*/
}

img{
  width: 45%;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

@media (max-width: 990px){
  img{
    width: 100%;
    /*padding-right: 30px;*/
    margin-top: 5%;
  }
  .vl {
    border-left: 6px solid rgba(122,122,122,.23);
    height: 170px;
    padding-left: 1%;
  }
  .section-1{

  }
}

@media (max-width: 500px) {
  img{
    width: 50%;
    padding-bottom: unset;
    padding-right: unset;
    display: block;
    margin-left: auto;
    margin-right: auto;
    /*margin-left: 19%;*/
  }

  .section-1{
    display: block;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
  }

  .vl {
    border-bottom: 4px solid rgba(122,122,122,.23);
    border-left: unset;
    height: unset;
    padding-left: unset;
  }

  .section-1{
    padding-right: 5%;
    padding-left: 5%;
    padding-top: unset;
    padding-bottom: unset;
  }

}
</style>

