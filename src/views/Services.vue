<template>
<div>
  <service-header/>
  <service-body/>
  <news-letter/>
  <footer-home/>
</div>
</template>

<script>
import ServiceHeader from "@/components/Services/service-header";
import ServiceBody from "@/components/Services/service-body";
import NewsLetter from "@/components/Home/news-letter";
import FooterHome from "@/components/Home/footer-home";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Services",
  components: {FooterHome, NewsLetter, ServiceBody, ServiceHeader}
}
</script>

<style scoped>

</style>