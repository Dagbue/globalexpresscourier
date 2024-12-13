<template>
  <div class="home">
<!--    <Slider/>-->
    <hero-section/>
    <about-company/>
    <partners-home/>
    <trusted/>
    <home-section7/>
    <latest-news/>
    <special/>
    <not-sure/>
    <contact-now/>
    <news-letter/>
    <footer-home/>
  </div>
</template>

<script>
import AboutCompany from "@/components/Home/about-company";
import PartnersHome from "@/components/Home/partners-home";
import Trusted from "@/components/Home/Trusted";
import LatestNews from "@/components/Home/latest-news";
import Special from "@/components/Home/Special";
import NotSure from "@/components/Home/not-sure";
import ContactNow from "@/components/Home/contact-now";
import NewsLetter from "@/components/Home/news-letter";
import FooterHome from "@/components/Home/footer-home";
import HeroSection from "@/components/Home/hero-section.vue";
import HomeSection7 from "@/components/Home/HomeSection7.vue";
export default {
  name: 'HomeView',
  components: {
    HomeSection7,
    HeroSection,
    FooterHome,
    NewsLetter,
    ContactNow,
    NotSure,
    Special,
    LatestNews,
    Trusted,
    PartnersHome,
    AboutCompany,
    // Slider
  },
}
</script>
