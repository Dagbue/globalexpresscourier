<template>
  <div class="alpha">
    <navigation-view/>
    <!--    <div class="topmost-header" v-if="$route.name !== 'DashHome'" >-->
    <!--      <div class="topmost-header-1">-->
    <!--        <p class="topmost-header-text">-->
    <!--          <i class='bx bxs-map' ></i>-->
    <!--          3560 Air Center Cove Ste 101 Memphis, Tennessee, USA-->
    <!--        </p>-->
    <!--        <p class="topmost-header-text">-->
    <!--          <i class='bx bxs-time-five' ></i>Mon – Sat: 9:00am–18:00pm.-->
    <!--        </p>-->
    <!--        <p class="topmost-header-text">-->
    <!--          <i class='bx bxs-phone' ></i>+1760-314-5437-->
    <!--        </p>-->
    <!--      </div>-->
    <!--    </div>-->
    <!--    <div class="style-4" v-if="$route.name !== 'DashHome'" >-->

    <!--      <img alt="company logo" src="../src/assets/companylogo.png" class="logo" />-->

    <!--      <ul class="menu-4" v-show="!mobile">-->
    <!--        <li><router-link  to="/">HOME</router-link></li>-->
    <!--        <li><router-link  to="/about">ABOUT US</router-link></li>-->
    <!--        <li><router-link  to="/services">SERVICES</router-link></li>-->
    <!--        <li><router-link  to="/contact">CONTACT</router-link></li>-->
    <!--        <li><router-link to="/pricing">PRICING</router-link></li>-->
    <!--        <li><router-link  to="/tracking">TRACKING</router-link></li>-->
    <!--        <li><router-link  to="/quote">REQUEST A QUOTE</router-link></li>-->
    <!--      </ul>-->

    <!--      <transition name="mobile-nav">-->

    <!--        <ul class="dropdown-nav" v-show="mobileNav">-->
    <!--          <li @click="toggleMobileNav2"><router-link  to="/">HOME</router-link></li>-->
    <!--          <li @click="toggleMobileNav2"><router-link  to="/about">ABOUT</router-link></li>-->
    <!--          <li @click="toggleMobileNav2"><router-link  to="/services">SERVICES</router-link></li>-->
    <!--          <li @click="toggleMobileNav2"><router-link  to="/contact">CONTACT</router-link></li>-->
    <!--          <li @click="toggleMobileNav2"><router-link to="/pricing">PRICING</router-link></li>-->
    <!--          <li @click="toggleMobileNav2"><router-link  to="/tracking">TRACKING</router-link></li>-->
    <!--          <li @click="toggleMobileNav2"><router-link  to="/quote">REQUEST A QUOTE</router-link></li>-->
    <!--        </ul>-->


    <!--      </transition>-->

    <!--      <div class="icon">-->
    <!--        <i @click="toggleMobileNav" class='bx bx-menu' v-show="mobile" :class="{'icon-active' : mobileNav}"></i>-->
    <!--      </div>-->

    <!--    </div>-->
  </div>

  <router-view v-slot="{ Component }">
    <transition name="route" mode="out-in">
      <component :is="Component"></component>
    </transition>
  </router-view>

</template>

<script>


import NavigationView from "@/BaseComponents/NavigationView.vue";

export default {
  components: {NavigationView},
  data()  {
    return {
      value1: false,
      mobile: false,
      mobileNav: false,
      windowWidth: false,
    }
  },
  created() {
    window.addEventListener('resize', this.checkScreen);
    this.checkScreen();
  },
  methods: {
    toggleMobileNav() {
      this.mobileNav = !this.mobileNav;
    },
    toggleMobileNav2(){
      this.mobileNav = false;
    },
    checkScreen() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth <= 990){
        this.mobile = true;
        return;
      }
      this.mobile = false;
      this.mobileNav = false;
      return;
    },

  }

};
</script>


<style>

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body{
  cursor: pointer;
  counter-reset: Serial;
  font-family: 'BR-Firma-Regular', sans-serif;
  background: hsla(0, 0%, 100%, 1.0);
}
a{
  text-decoration: none;
}
input{
  font-family: 'BR-Firma-Regular', sans-serif;
}
textarea{
  font-family: 'BR-Firma-Regular', sans-serif;
}
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}
.route-enter-from {
  opacity: 0;
  transform: translateX(100px);
}
.route-enter-active {
  transition: all 1s ease-out;
}
.route-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}
.route-leave-active {
  transition: all 1s ease-in;
}

.mobile-nav-enter-active,
.mobile-nav-leave-active {
  transition: 1s ease all;
}

.mobile-nav-enter-from,
.mobile-nav-leave-to{
  transform: translateX(-250px);
}

.mobile-nav-enter-to{
  transform: translateX(0);
}

.slide-fade-enter {
  opacity: 0;
  transform: translateY(10px);
}

.slide-fade-enter-to {
}

.slide-fade-enter-active {
  transition: all 0.4s ease-in;
}

.slide-fade-leave {
}

.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

.slide-fade-leave-active {
  transition: all 0.4s ease-out;
}


.whatsapp_float {
  position: fixed;
  width: 55px;
  height: 55px;
  bottom: 40px;
  right: 40px;
  background-color: #25d366;
  color: #fff;
  border-radius: 50px;
  text-align: center;
  font-size: 30px;
  z-index: 100;
}



/* for mobile */
@media screen and (max-width: 767px){
  .whatsapp-icon {
    margin-top: 10px;
  }
  .whatsapp_float {
    width: 40px;
    height: 40px;
    bottom: 20px;
    right: 10px;
    font-size: 22px;
  }
}

</style>