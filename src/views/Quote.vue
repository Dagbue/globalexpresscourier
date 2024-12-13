<template>
<div>
  <br/>
  <quote-header/>
  <request-body/>
  <news-letter/>
  <footer-home/>
</div>
</template>

<script>
import QuoteHeader from "@/components/Quote/quote-header";
import NewsLetter from "@/components/Home/news-letter";
import FooterHome from "@/components/Home/footer-home";
import RequestBody from "@/components/Quote/RequestBody.vue";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Quote",
  components: {RequestBody, FooterHome, NewsLetter, QuoteHeader}
}
</script>

<style scoped>

</style>