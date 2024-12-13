<template>
<div>
  <br/>
  <tracking-header/>
  <tracking-body/>
  <news-letter/>
  <footer-home/>
</div>
</template>

<script>
import TrackingHeader from "@/components/Tracking/tracking-header";
import TrackingBody from "@/components/Tracking/tracking-body";
import NewsLetter from "@/components/Home/news-letter";
import FooterHome from "@/components/Home/footer-home";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Tracking",
  components: {FooterHome, NewsLetter, TrackingBody, TrackingHeader}
}
</script>

<style scoped>

</style>