<template>
  <div class="alpha">
    <main>
      <h1>Testimonials</h1>

      <p class="text-1">
        Our team is always happy to receive feedback from our customers, as it helps us improve our
        services. Here is a sample of the testimonials that we have received.
      </p>

      <!-- Testimonials Slider -->
      <div class="slider">
        <section
            v-for="(testimonial, index) in testimonials"
            :key="testimonial.id"
            class="t-bq-section"
            v-show="currentTestimonialIndex === index"
            :class="{ 'fade-in': currentTestimonialIndex === index }"
        >
          <div class="t-bq-wrapper t-bq-wrapper-boxed">
            <div class="t-bq-quote t-bq-quote-jenny">
              <div class="t-bq-quote-jenny-base">
                <blockquote class="t-bq-quote-jenny-text" :cite="testimonial.cite">
                  {{ testimonial.text }}
                </blockquote>
              </div>
              <div class="t-bq-quote-jenny-meta">
                <div class="t-bq-quote-jenny-meta-info">
                  <div class="t-bq-quote-jenny-author">
                    <cite>{{ testimonial.author }}</cite>
                  </div>
                  <div class="t-bq-quote-jenny-source">
                    <span>{{ testimonial.source }}</span>
                  </div>
                </div>
                <div class="t-bq-quote-jenny-userpic">
                  <img :src="testimonial.image" alt="image" class="t-bq-quote-jenny-userpic" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  </div>
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from "vue";

export default {
  name: "HomeSection7",
  setup() {
    const currentTestimonialIndex = ref(0);
    const testimonials = ref([
      {
        id: 1,
        text: "The staff has been fantastic. Whenever we need a pickup and delivery even for some complicated ones, it gets done on time. You have made my life easier. Kudos to all your staff.",
        author: "Kathleen H",
        source: "Legal Industry Expert",
        cite: "Kathleen H",
        image:
            "https://images.unsplash.com/photo-1614786269829-d24616faf56d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
      },
      {
        id: 2,
        text: "[We have] a record of outstanding performance by Global Express Courier in delivering and returning highly-sensitive documents, compliance certificates, and payroll checks associated with our work locations.",
        author: "Jim V",
        source: "Interoffice & Bank Delivery Expert",
        cite: "Jim V",
        image:
            "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      },
      {
        id: 3,
        text: "Your staff, from the person that answers the phone to the person making the pick-up or delivery, is excellent! We appreciate your professionalism and wonderful service.",
        author: "Tanya R",
        source: "Medical Industry Expert",
        cite: "Tanya R",
        image:
            "https://images.unsplash.com/photo-1642050923713-c48db6ea4bec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      },
    ]);
    let slideInterval;

    const startSlideshow = () => {
      slideInterval = setInterval(() => {
        currentTestimonialIndex.value =
            (currentTestimonialIndex.value + 1) % testimonials.value.length;
      }, 5000);
    };

    const stopSlideshow = () => {
      clearInterval(slideInterval);
    };

    onMounted(() => {
      startSlideshow();
    });

    onBeforeUnmount(() => {
      stopSlideshow();
    });

    return {
      currentTestimonialIndex,
      testimonials,
    };
  },
};
</script>



<style scoped>



main {
  /*width: 800px;*/
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding-top: 4%;

  /*padding-bottom: 10%;*/
}

.alpha{
  padding-top: 5%;

  height: 100%;

  font-size: 16px;
  line-height: 1.7;
  color: #eee;
  height: 100%;
  background-image:
      linear-gradient(to right bottom,
      rgba(25, 39, 68, 0.93),
      rgba(25, 39, 68, 0.93)),
      url("https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=449&q=80");
  background-size: cover;
  background-position: center;
  position: relative;
  margin-bottom: 0;
  padding-bottom: 60px;
}

main h1 {
  text-align: center;
  font-size: clamp(2rem, 4vw, 2.4rem);
  color: #ffffff;
  font-family: 'BR-Firma-Bold', sans-serif;
}

.text-1 {
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -0.015em;
  text-align: center;
  color: #ffffff;
  margin-bottom: 24px;
  width: 65%;
  display: block;
  margin-left: auto;
  margin-right: auto;
}




* {
  box-sizing: border-box;
  outline: 0;
  transition: all 0.3s ease;
}

body {
  margin: 0;
  margin-top: 60px;
  padding: 0;
  line-height: 1.68em;
  color: #333333;
  background: #fafafa;
}

blockquote {
  padding: 0;
  margin: 0;
}

section.t-bq-section {
  padding: 30px;
  margin-bottom: 60px;
}

.t-bq-wrapper.t-bq-wrapper-boxed {
  max-width: 800px;
  margin: 0 auto;
}

.t-bq-wrapper.t-bq-wrapper-fullwidth {
  max-width: 100%;
}

.t-bq-wrapper .t-bq-quote {
  padding: 20px;
}


.fade-in {
  animation: fadeIn 1s;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Additional styling for smoother fading */
.t-bq-section {
  position: absolute;
  width: 100%;
}
.slider {
  position: relative;
  height: 300px; /* Set this to the height of your testimonials or as needed */
}







/* ========== 01. Emma ========== */

.t-bq-quote-emma {
  position: relative;
  display: flex;
  flex-direction: row;
  min-height: 250px;
  background: #ffffff;
  padding: 0!important;
  align-items: stretch;
  border-radius: 20px;
  box-shadow: 2px 2px 25px #cecece;
}

.t-bq-quote-emma .t-bq-quote-emma-qmark {
  position: absolute;
  top: -30px;
  left: calc(50% - 30px);
  background: #ffffff;
  width: 60px;
  height: 60px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Impact, Garamond, Georgia, serif;
  font-size: 42pt;
  color: #666666;
  line-height: 60px;
  user-select: none;
  -moz-user-select: none;
  -o-user-select: none;
  -ms-user-select: none;
  border-top: 2px solid #eeeeee;
}

.t-bq-quote-emma .t-bq-quote-emma-qmark span {
  padding-top: 0.25em;
}

.t-bq-quote-emma .t-bq-quote-emma-userpic {
  flex-basis: 150px;
  width: 150px;
  min-width: 150px;
  max-height: auto;
  background: url("https://raw.githubusercontent.com/taviskaron/t-div-blockquotes/main/img/strug.jpg") center center no-repeat;
  background-size: cover;
  border-radius: 20px 0 0 20px;
}

.t-bq-quote-emma .t-bq-quote-emma-base {
  flex-basis: calc(100% - 150px);
  padding: 60px 30px 45px 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.t-bq-quote-emma .t-bq-quote-emma-base .t-bq-quote-emma-text {
  font-size: 16px;
  line-height: 30px;
}

.t-bq-quote-emma .t-bq-quote-emma-base .t-bq-quote-emma-text:after {
  content: "\2014\00A0" attr(cite);
  display: block;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-weight: bold;
  margin-top: 10px;
}

@media screen and (max-width: 768px) {

  .t-bq-quote-emma {
    flex-direction: column;
  }

  .t-bq-quote-emma .t-bq-quote-emma-base {
    padding-top: 0;
  }

  .t-bq-quote-emma .t-bq-quote-emma-userpic {
    border-radius: 20px;
    height: 150px;
    margin: 40px auto 20px auto;
  }

  .t-bq-quote-emma .t-bq-quote-emma-base .t-bq-quote-emma-text {
    font-size: 18px;
  }

main{
  height: 600px;
}
}



/* ========== 02. Sophia ========== */

.t-bq-quote-sophia .t-bq-quote-sophia-base {
  background: white;
  padding: 20px 40px 40px 40px;
  border-radius: 10px;
  margin-bottom: 40px;
  position: relative;
}

.t-bq-quote-sophia .t-bq-quote-sophia-base:after {
  content: "";
  position: absolute;
  background: #ffffff;
  transform: rotate(45deg);
  width: 30px;
  height: 30px;
  margin: 0 auto;
  bottom: -15px;
  left: calc(50% - 15px);
  z-index: -1;
}

.t-bq-quote-sophia .t-bq-quote-sophia-author {
  text-align: center;
  margin-bottom: 10px;
}

.t-bq-quote-sophia .t-bq-quote-sophia-text {
  font-size: 16px;
  line-height: 30px;
}

.t-bq-quote-sophia .t-bq-quote-sophia-author cite {
  font-style: normal;
  text-transform: uppercase;
  letter-spacing: 0.03em;
  font-size: 18px;
  font-weight: bold;
}

.t-bq-quote-sophia .t-bq-quote-sophia-userpic {
  width: 100px;
  height: 100px;
  background: url("https://raw.githubusercontent.com/taviskaron/t-div-blockquotes/main/img/strug.jpg") center center no-repeat;
  background-size: cover;
  margin: 0 auto;
  border-radius: 50%;
}









/* ========== 03. Jenny ========== */

.t-bq-quote-jenny .t-bq-quote-jenny-base {
  border: 2px solid rgba(122,122,122,.23);
  background-color: rgba(122,122,122,.23);
  padding: 20px 40px 40px 40px;
  border-radius: 10px;
  margin-bottom: 40px;
  position: relative;
}

.t-bq-quote-jenny .t-bq-quote-jenny-base:after {
  content: "";
  position: absolute;
  border: 2px solid rgba(122,122,122,.23);
  background-color: rgba(122,122,122,.23);
  transform: rotate(45deg);
  width: 30px;
  height: 30px;
  margin: 0 auto;
  bottom: -15px;
  left: calc(100% - 100px - 15px);
  z-index: -1;
  display: none;
}

.t-bq-quote-jenny .t-bq-quote-jenny-base .t-bq-quote-jenny-text {
  text-indent: 5em;
  line-height: 30px;
  font-size: 16px;
}

.t-bq-quote-jenny .t-bq-quote-jenny-base .t-bq-quote-jenny-text:before {
  content: "\201C";
  position: absolute;
  left: -55px;
  top: 55px;
  font-family: Georgia, serif;
  font-size: 160pt;
  color: #ec2552;

}

.t-bq-quote-jenny .t-bq-quote-jenny-meta {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
}

.t-bq-quote-jenny .t-bq-quote-jenny-meta .t-bq-quote-jenny-meta-info {
  flex-basis: calc(100% - 50px);
}

.t-bq-quote-jenny .t-bq-quote-jenny-meta .t-bq-quote-jenny-author,
.t-bq-quote-jenny .t-bq-quote-jenny-meta .t-bq-quote-jenny-source {
  text-align: right;
  flex-basis: 100%;
  padding-right: 15px;
  line-height: 1.38em;
}

.t-bq-quote-jenny .t-bq-quote-jenny-meta .t-bq-quote-jenny-author cite {
  font-style: normal;
  text-transform: uppercase;
  letter-spacing: 0.03em;
  font-size: 10pt;
  font-weight: bold;
}

.t-bq-quote-jenny .t-bq-quote-jenny-meta .t-bq-quote-jenny-source span {
  font-size: 11pt;
}

.t-bq-quote-jenny .t-bq-quote-jenny-meta .t-bq-quote-jenny-userpic {
  flex-basis: 50px;
  flex-grow: 0;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-left: auto;
}




</style>