<template>
<div class="section-alpha">

  <div class="section-content">

    <h1>News Letter Signup</h1>

    <input type="text"  placeholder="Enter Your Email" class="input-form-1" v-model="email" required/>
    <i class='bx bx-chevrons-right' @click="sendDeposit"></i>

  </div>

</div>
</template>

<script>
import {doc, serverTimestamp, setDoc} from "firebase/firestore";
import {db} from "@/firebase/config";
import router from "@/router";
import Swal from "sweetalert2";

export default {
  name: "news-letter",
  data() {
    return {
      email:"",
    }
  },
  methods: {
    async sendDeposit() {
      // noinspection JSUnresolvedFunction,JSCheckFunctionSignatures
      setDoc(doc(db, "NewsLetter", this.email), {
        email: this.email,
        createdAt: serverTimestamp()
      }, {merge: true})
          .then(() => {
            console.log('saved to the database')
          })
      await Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Request Sent!',
      });
      await router.push('/')

      await window.scrollTo(0, 0);
    },
  },
}
</script>

<style scoped>

.section-content{
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: space-around;
}

.section-content h1{
  color: white;
  font-size: 26px;
}

.section-alpha{
  background: #ec2552;
  padding-top: 20px;
  padding-bottom: 20px;
}

.bx-chevrons-right{
  color: #071333;
  font-size: 40px;
}
.bx-chevrons-right:hover{
  color: gold;
}


.input-form-1{
  width: 40%;
  padding: 8px 20px;
  margin: 8px 0;
  display: inline-block;
  box-sizing: border-box;
  margin-left: 3%;
  margin-right: 3%;
}

input {
  box-sizing: border-box;
  border: 1px solid #D0D5DD;
  border-radius: 5px;
  -webkit-transition: 0.3s;
  padding-top: 12px;
  padding-bottom: 12px;
  transition: 0.3s;
  outline: none;
  color: #101828;
  background-color: #FFFFFF;
  letter-spacing: 0.5px;
}

input:focus {
  border: 1px solid #2E90FA;
}

input::placeholder{
  color: #D0D5DD;
}

@media (max-width: 990px){
  .section-content{
    margin-left: unset;
    margin-right: unset;
  }
  .section-content h1{
    font-size: 25px;
    /*margin-top: 1%;*/
  }
}

@media (max-width: 550px){

  .section-content h1{
    letter-spacing: unset;
    font-size: 17px;
    text-align: center;
  }

  .section-content{
    /*margin-left: 20%;*/
    /*margin-right: 20%;*/
  }

  .bx-chevrons-right{
    font-size: 30px;
  }


}
</style>

