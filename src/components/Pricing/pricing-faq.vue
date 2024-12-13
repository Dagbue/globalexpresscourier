<template>
  <div class="section-2">

    <div class="section-2-content">

      <h1 class="section-2-header">Frequently Asked Questions</h1>

      <div class="law">
        <div class="vl"></div>
        <h1 class="section-2-header-2">Do you still have any questions ? For further information, please contact.</h1>
      </div>

        <button class="btn">Contact Us</button>


    </div>


    <div class="section-2-content-2">

      <div>
        <section>
          <details>
            <summary>What does it cost for a courier? </summary>
            <p>
              Costs for our courier and delivery services will vary based upon the size and weight of the item, what type of vehicle you require, how quickly you need the item delivered and the distance from your pick up point and delivery point. Contact us or use our online request form for an accurate quote.
            </p>
          </details>
          <details>
            <summary>How quickly can you deliver my package? </summary>
            <p>
              Our rush courier and delivery services can vary in terms of delivery time. We offer a rush service where a courier will pick up and deliver your package direct with no stops in between; which is usually delivered in under 60 minutes. Other courier services we offer include a 3 hour delivery, a 5 hour delivery, and a same day delivery which would deliver your package before end of business day. Contact us for more details regarding the types of services we provide.
            </p>
          </details>
          <details>
            <summary>What is the largest package you can deliver? </summary>
            <p>
              We can deliver any item that is smaller than 25ft x 8ft x 8ft. This can be achieved by using our 26 foot box trucks with lift gates for all of your courier and delivery needs.
            </p>
          </details>
          <details>
            <summary>How does your online delivery quote work? </summary>
            <p>
              Simply fill out your name, phone number, email, speed, pick up and delivery destination, and details of your delivery and we will get back to you with a quote within minutes.
            </p>
          </details>
        </section>
      </div>

    </div>


  </div>
</template>

<script>
export default {
  name: "pricing-faq"
}
</script>

<style scoped>

.law{
  display: flex;
}

.law-2-inner p{
  padding-top: 25px;
}

.vl {
  border-left: 6px solid #ec2552;
  height: 80px;
  margin-left: 12%;
}


.section-2-header-2{
  font-size: 17px;
  width: 70%;
  padding-top: 10px;
  padding-left: 10px;
  text-align: left;
}
.section-2 {
  font-size: 16px;
  line-height: 1.7;
  color: #eee;
  height: 90vh;

  background-image:
      linear-gradient(to right bottom,
      rgba(25, 39, 68, 0.89),
      rgba(25, 39, 68, 0.89)),
      url("https://images.unsplash.com/photo-1536099629323-44806c1ea264?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80");

  background-size: cover;
  background-position: center;
  position: relative;
  margin-bottom: 0;
  padding-bottom: 10px;
  display: flex;
}

.section-2-header{
  text-align: center;
  letter-spacing: 1px;
  padding-top: 5%;
  font-size: 30px;
}

.section-2-content{
  display: block;
  justify-content: space-between;
  padding-top: 5%;
  font-size: 16px;
  text-align: center;
  width: 50%;
  margin-left: 0;
  padding-left: 0;
}

.section-2-content-2{
  width: 50%;
}

img{
  width: 9%;
}
section {
  padding-top: 10%;
  width: 100%;
  margin: auto;
}

details[open] summary ~ * {
  animation: open 0.4s ease-in;
}

@keyframes open {
  0% {
    transform: translateY(-60px);
    opacity: 0;
  }
  50% {
    transform: translateY(0);
    opacity: 1;
  }
  60% {
    transform: translateX(10px);
  }
  70% {
    transform: translateX(-10px);
  }
  80% {
    transform: translateX(5px);
  }
  90% {
    transform: translateX(-5px);
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
details summary::-webkit-details-marker {
  display: none;
}

details summary {
  width: 100%;
  position: relative;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 300;
  list-style: none;
  padding-top: 18px;
  padding-bottom: 10px;
}

details summary:after {
  content: "+";
  color: black;
  position: absolute;
  font-size: 1.75rem;
  line-height: 0;
  margin-top: 0.75rem;
  right: 0;
  font-weight: bold;
  transform-origin: center;
  transition: 200ms linear;
}
details[open] summary:after {
  transform: rotate(45deg);
  font-size: 3rem;
}
details summary {
  outline: 0;
}
details p {
  font-size: 17px;
  margin: 0 0 1rem;
  padding-top: 1rem;
}
details {
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
  background: rgba(236, 37, 82, 0.5);
  position: relative;
  padding: 20px;
  margin-bottom: 5%;
  border-radius: 5px;
  margin-right: 10%;
}
@media (max-width: 500px){
  .details summary {
    font-size: 20px;
  }
  details p {
    font-size: 16px;
    margin: 0 0 1rem;
    padding-top: 1rem;
  }
  summary{
    font-size: 20px;
  }
  section {
    width: 82%;
  }
}
@media (max-width: 990px) {
  .section-2{
    height: 68vh;
    clip-path: unset;
    padding-top: 15px;
  }
  .section-2-header{
    font-size: 30px;
  }

  .section-2 {
    height: 100%;
    display: block;
  }

  .section-2-content{
    width: 100%;
  }

  .section-2-content-2{
    width: 100%;
    margin-left: 4%;
  }

  .vl {
    height: 60px;
  }

}


@media (max-width: 550px){
  .section-2-content {
    display: block;
  }
  .section-2 {
    height: 100%;
  }
  img{
    width: 18%;
  }

  .section-2-header{
    font-size: 19px;
  }

  .section-2{
    display: block;
    justify-content: space-between;
    padding-top: 3%;
    text-align: center;
  }
}

.btn{
  background-color: rgba(236, 37, 82, 0.8);
  border: 1px solid #ec2552;
  padding: 15px 80px;
  margin-top: 5%;
  margin-bottom: 5%;
  display: block;
  margin-right: auto;
  margin-left: auto;
  color: white;
  font-size: 17px;
  border-radius: 5px;
}
.btn:hover{
  background-color: white;
  border-color: #ec2552;
  color: #ec2552;
}

</style>