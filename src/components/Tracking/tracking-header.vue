<template>
  <div>

    <p class="header">
      Tracking Services
    </p>

    <p class="content">
      Visibility. Solvability. Dependability.Ask anyone shipping or receiving a package what's important, and you'll hear reliability. So we created tracking technology that empowers you to see, solve, and meet expectations—locally, globally, by package or shipload.
    </p>

  </div>
</template>

<script>
export default {
  name: "tracking-header"
}
</script>

<style scoped>
.header{
  text-align: center;
  font-size: 35px;
  text-shadow: -3px -3px 4px rgba(150, 150, 150, 1);
  letter-spacing: 2px;
}

.content{
  text-align: center;
  width: 70%;
  margin-right: auto;
  margin-left: auto;
  font-size: 18px;
  margin-top: 2%;
  letter-spacing: 1px;
}

@media (max-width: 550px){
  .content{
    width: 90%;
    font-size: 17px;
  }

  .header{
    font-size: 33px;
  }
}
</style>