<template>
  <transition-group name="fade" mode="out-in" tag="div" class="slides">
    <div class="slideParent" :key="image.id">
      <div class="slideImage" :style="setBackgroundImage">
        <div class="slideTitle">
          <transition appear name="fade2" mode="out-in">
            <h2>{{ image.title }}</h2>
          </transition>

          <transition appear name="fade2" mode="out-in">
            <p>{{ image.para }}</p>
          </transition>

          <div class="buttons">
            <a @click.prevent="onPostClick" class="btn btn-white btn-animated"
            >LEARN MORE</a
            >
            <a @click.prevent="onPostClick2" class="btn btn-white btn-animated"
            >GET A QUOTE</a
            >
          </div>

        </div>
      </div>
    </div>
  </transition-group>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Slides",
  props: ["image"],
  computed: {
    setBackgroundImage() {
      return { backgroundImage: "url(" + this.image.url + ")" };
    },
  },
  methods: {
    onPostClick() {
      this.$router.push("/about");
      window.scrollTo(0, 0);
    },
    onPostClick2() {
      this.$router.push("/quote");
      window.scrollTo(0, 0);
    },
  },
};
</script>

<style scoped>
.slides .slideParent {
  height: 78vh;
  width: 100%;
}
.slides .slideImage {
  height: 100%;
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  animation-fill-mode: forwards;
  animation-name: zoom;
  animation-duration: 2.5s;
  animation-iteration-count: 1;
}
.slides .slideImage:before{
  position: absolute;
  content: "";
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: #000;
  opacity: 0.5;
}
@keyframes zoom {
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1);
  }
}
.slideTitle {
  color: white;
  /*position: absolute;*/
  padding-top: 10%;
  /*padding-left: 7%;*/
  width: 70%;
  display: flex;
  flex-direction: column;
  letter-spacing: 1px;
  /*margin-left: 8%;*/
  text-align: center;
  /*margin-top: 2%;*/
  margin-left: auto;
  margin-right: auto;
}

.slideTitle h2 {
  line-height: 1.5;
  font-size: 35px;
}

.slideTitle p {
  font-size: 20px;
  line-height: 1.7;
}

.slideTitle a {
  padding: 17px 52px;
  margin-left: 5%;
  margin-top: 4%;
}

.fade-enter-active {
  animation-name: fadeEnter;
  animation-duration: 1s;
  animation-iteration-count: 1;
}
.fade-move {
  transition: all 1s;
}
.fade-leave-active {
  animation-name: fadeLeave;
  animation-duration: 1s;
  animation-iteration-count: 1;
  position: absolute;
}
@keyframes fadeEnter {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes fadeLeave {
  from {
    opacity: 1;
  }
  to {
    opacity: 1;
  }
}


.btn:hover {
  /*transform: translateY(-3px);*/
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.6);
  background-color: white;
  color: #ec2552;
}
.btn-white {
  background-color: #ec2552;
  color: white;
  font-size: 12px;
  padding: 6px 16px;
  text-transform: uppercase;
  text-decoration: none;
  display: inline-block;
  transition: all 0.5s;
  position: relative;
  border-radius: 5px;
}

.fade2-enter-from {
  opacity: 0;
}
.fade2-enter-active {
  transition: opacity 5s ease-in;
}
.fade2-leave-to {
  opacity: 0;
}
.fade2-leave-active {
  transition: opacity 5s ease-in;
}

.buttons{
  /*margin-right: 10%;*/
}

@media (max-width: 990px) {
  .slideTitle{
    /*padding-top: 28%;*/
    /*width: 85%;*/
  }
  .slideTitle h2{
    /*font-size: 40px;*/
    /*line-height: unset;*/
  }
  .buttons{
    /*margin-top: 2%;*/
  }
}

@media (max-width: 500px) {
  .slideTitle{
    /*margin-top: unset;*/
    /*margin-left: unset;*/
    /*margin-right: 9%;*/
    /*width: unset;*/
    /*text-align: center;*/
    /*align-content: center;*/
    width: 90%;
  }
  .slideTitle h2{
    /*font-size: 34px;*/
    /*line-height: 45px;*/
    /*margin-left: unset;*/
    /*margin-right: 2%;*/
    /*padding-left: unset;*/
  }
  .slideTitle p{
    /*line-height: 1.3;*/
    /*margin-left: 4%;*/
    /*margin-right: 2%;*/
    /*padding-left: unset;*/
  }
  .slideTitle a {
    /*margin-left: unset;*/
    /*margin-right: unset;*/
    /*font-size: 12px;*/
    /*padding: 15px 80px;*/
    /*text-align: center;*/
    /*align-content: center;*/
  }
  .buttons{
    /*margin-left: 14%;*/
  }
  .buttons a{
    /*margin-right: 5%;*/
  }
}
</style>
