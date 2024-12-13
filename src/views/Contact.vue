<template>
<div>
  <br/>
  <contact-header/>
  <br/>
  <br/>
  <contact-body/>
  <br/>
  <br/>
  <contact-map/>
  <news-letter/>
  <footer-home/>
</div>
</template>

<script>
import ContactHeader from "@/components/Contact/contact-header";
import ContactBody from "@/components/Contact/contact-body";
import ContactMap from "@/components/Contact/contact-map";
import NewsLetter from "@/components/Home/news-letter";
import FooterHome from "@/components/Home/footer-home";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Contact",
  components: {FooterHome, NewsLetter, ContactMap, ContactBody, ContactHeader}
}
</script>

<style scoped>

</style>