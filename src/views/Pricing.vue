<template>
<div>
  <br/>
  <pricing-header/>
  <br/>
  <pricing-body/>
  <br/>
  <br/>
  <br/>
  <br/>
  <pricing-faq/>
  <news-letter/>
  <footer-home/>
</div>
</template>

<script>
import PricingHeader from "@/components/Pricing/pricing-header";
import PricingBody from "@/components/Pricing/pricing-body";
import PricingFaq from "@/components/Pricing/pricing-faq";
import NewsLetter from "@/components/Home/news-letter";
import FooterHome from "@/components/Home/footer-home";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Pricing",
  components: {FooterHome, NewsLetter, PricingFaq, PricingBody, PricingHeader}
}
</script>

<style scoped>

</style>