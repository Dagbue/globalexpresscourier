<template>
  <div>

    <p class="header">
      Our Services
    </p>

    <p class="parah">
      We tailor our services to meet your specific needs with customized logistics solutions designed to improve how you serve your customers and help you operate more efficiently.
    </p>

  </div>
</template>

<script>
export default {
  name: "service-header"
}
</script>

<style scoped>
.header{
  text-align: center;
  font-size: 40px;
  text-shadow: -3px -3px 4px rgba(150, 150, 150, 1);
  letter-spacing: 2px;
}

.parah{
  text-align: center;
  font-size: 20px;
  padding-top: 2%;
  width: 50%;
  margin-right: auto;
  margin-left: auto;
}

@media (max-width: 990px) {
  .parah{
    width: 80%;
  }
}
</style>