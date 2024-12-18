<template>
  <dash-content>
    <div class="fields-alpha"  >

      <div class="body">
        <h2>Update Location</h2>
        <div class="row trans-mgt">
          <div class="form-group fg--search">
            <button type="submit"><i class="fa fa-search"></i></button>
            <input type="text" class="input" placeholder="Search User List..."/>
          </div>
          <div class="row filter_group">
            <!--          <div class="blue">Download transactions</div>-->
            <div class="action-content">
              <img src="@/assets/Filterslines.svg"  alt="Export"/>
              <p>Filter</p>
            </div>
          </div>
        </div>
      </div>

      <div class="section-5">
        <div class="empty-state" v-if="this.investments.length === 0">
          <img src="@/assets/empty.svg" alt="empty">
          <p class="empty-state-text-1">You have nothing to see</p>
          <p class="empty-state-text-2">This is where your list of users will appear</p>
          <!--        <p class="empty-state-text-3">-->
          <!--          <i class='bx bx-plus' ></i>-->
          <!--          Transaction-->
          <!--        </p>-->
        </div>

        <div class="table" v-if="this.investments.length >0">
          <table>
            <tr>
              <th>Email</th>
              <th>Tracking Number</th>
              <th>Order Number</th>
              <th>Order Confirmed</th>
              <th>Order Shipped</th>
              <th>Order Enroute</th>
              <th>Order Arrived</th>
              <th>Expected Arrival</th>
            </tr>

            <tbody v-for="child in paginatedItems" :key="child.key">
            <tr>
              <td>{{child.email}}</td>
              <td>{{child.TrackingNumber}}</td>
              <td>{{child.OrderNumber}}</td>
              <td>{{child.OrderConfirmed}}</td>
              <td>{{child.OrderShipped}}</td>
              <td>{{child.OrderEnroute}}</td>
              <td>{{child.OrderArrived}}</td>
              <td>{{child.ExpectedArrival}}</td>
            </tr>
            </tbody>

          </table>

          <div class="pagination">
            <button @click="previousPage" :disabled="currentPage === 1" class="previous">Previous</button>
            <div class="page-indicator">
              Page {{ currentPage }} of {{ totalPages }}
            </div>
            <button @click="nextPage" :disabled="currentPage === totalPages" class="previous">Next</button>
          </div>


        </div>

      </div>

      <form class="form">

        <div class="part-1">
          <label>Select Email</label>
          <select class="select-form" v-model="SelectEmail" aria-placeholder="Select Value">
            <option v-for="option in investments" :key="option" :value="option.email" >
              {{ option.email }}
            </option>
          </select>

          <label>Order Confirmed</label>
          <select class="select-form" v-model="OrderConfirmed" aria-placeholder="Select Value">
            <option value="">Select Value</option>
            <option value="0%">0%</option>
            <option value="50%">50%</option>
            <option value="100%">100%</option>
          </select>

          <label>Order Shipped</label>
          <select class="select-form" v-model="OrderShipped" aria-placeholder="Select Value">
            <option value="">Select Value</option>
            <option value="0%">0%</option>
            <option value="50%">50%</option>
            <option value="100%">100%</option>
          </select>
        </div>

        <div class="part-2">
          <label>Order Enroute</label>
          <select class="select-form" v-model="OrderEnroute" aria-placeholder="Select Value">
            <option value="">Select Value</option>
            <option value="0%">0%</option>
            <option value="50%">50%</option>
            <option value="100%">100%</option>
          </select>

          <label>Order Arrived</label>
          <select class="select-form" v-model="OrderArrived" aria-placeholder="Select Value">
            <option value="">Select Value</option>
            <option value="0%">0%</option>
            <option value="50%">50%</option>
            <option value="100%">100%</option>
          </select>

          <label>Expected Arrival</label>
          <input type="date" v-model="ExpectedArrival"/>


          <button class="btn-form" @click="update" type="button">Submit</button>
        </div>

      </form>
    </div>
  </dash-content>
</template>

<script>
import DashContent from "@/BaseComponents/dash/DashContent";
import {collection, getDocs, doc, setDoc} from "firebase/firestore";
import {db} from "@/firebase/config";
import router from "@/router";
export default {
  name: "Update-Location",
  components: {DashContent},
  data () {
    return {
      investments: [],
      SelectEmail: "",
      OrderConfirmed: "",
      OrderShipped: "",
      OrderEnroute: "",
      OrderArrived: "",
      ExpectedArrival: "",
      currentPage: 1,
      itemsPerPage: 7,
    }
  },
  computed:{
    paginatedItems() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      return this.investments.slice(startIndex, endIndex);
    },
    totalPages() {
      return Math.ceil(this.investments.length / this.itemsPerPage);
    },
  },
  async created() {
    const querySnapshot = await getDocs(collection(db, "Quotes"));
    querySnapshot.forEach((doc) => {
      let data = {
        'id': doc.id,
        'email': doc.data().email,
        'TrackingNumber': doc.data().TrackingNumber,
        'OrderNumber': doc.data().OrderNumber,
        'OrderArrived': doc.data().OrderArrived,
        'OrderConfirmed': doc.data().OrderConfirmed,
        'OrderEnroute': doc.data().OrderEnroute,
        'OrderShipped': doc.data().OrderShipped,
        'ExpectedArrival': doc.data().ExpectedArrival
      }
      this.investments.push(data)
    })

  },

  methods: {
    previousPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },

    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },

    goToPage(pageNumber) {
      if (pageNumber > 0 && pageNumber <= this.totalPages) {
        this.currentPage = pageNumber;
      }
    },
   async update() {
     await setDoc(doc(db, "Quotes" ,this.SelectEmail ), {
        OrderConfirmed: this.OrderConfirmed,
        OrderShipped: this.OrderShipped,
        OrderEnroute: this.OrderEnroute,
        OrderArrived: this.OrderArrived,
        ExpectedArrival: this.ExpectedArrival
      },{ merge: true })
          .then(() => {router.push("/quotes")});

     await setDoc(doc(db, this.SelectEmail, "information"), {
        OrderConfirmed: this.OrderConfirmed,
        OrderShipped: this.OrderShipped,
        OrderEnroute: this.OrderEnroute,
        OrderArrived: this.OrderArrived,
        ExpectedArrival: this.ExpectedArrival
      },{ merge: true })
          .then(() => {router.push("/quotes")});
    },
  }
}
</script>

<style scoped>
.fields-alpha{
  /*box-shadow: 0 12px 20px rgba(0, 0, 0, 0.5);*/
  /*background-color: #282E3BC7;*/
  padding-top: 20px;
  padding-bottom: 50px;
  margin-left: 4%;
  margin-right: 2%;
  border-radius: 12px;
  margin-top: 2%;
}

.part-2{
  margin-top: 1%;
}

option{
  padding-left: 10px;
  padding-right: 20px;
}

.form{
  box-shadow: 0 0 13px #E3EBF6;
  margin-bottom: 1%;
  margin-right: 5%;
  margin-left: 10%;
  margin-top: 3%;
  padding: 20px;
  padding-right: 5px;
}

label{
  padding-right: 5px;
  padding-left: 10px;
}
.btn-form{
  margin-left: 10px;
  padding: 3px 30px;
}


table, th, td {
  border: 1px solid #E3EBF6;
  padding: 2px;
}

tr td:first-child:before
{
  counter-increment: Serial;      /* Increment the Serial counter */
  content:counter(Serial); /* Display the counter */
}

.body{
  padding: 32px;
}
h2{
  font-weight: 700;
  font-size: 19px;
  line-height: 25px;
  color: #353542;
}
.row{
  display: flex;

}
.trans-mgt{
  margin-top: 17px;
  /* align-items: center; */
}
.filter_group{
  margin-left: auto;
  gap: 16px;
}


.fg--search {
  background: white;
  position: relative;
  width: 400px;
  margin-left: 1%;
}
.fg--search input {
  width: 100%;
  padding: 10px;
  padding-left: 15px;
  display: block;
  background: #FFFFFF;
  border: 1px solid #D0D5DD;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border-radius: 6px;
}

.fg--search button {
  background: transparent;
  border: none;
  cursor: pointer;
  display: inline-block;
  font-size: 10px;
  position: absolute;
  top: 0;
  right: 0;
  padding: 10px;
  margin-top: 5px;
}

.fa-search{
  color: #667085;
  margin-right: 10px;
}
table {
  border-collapse: collapse;
  width: 100%;
}
.table{
  margin-left: 2%;
  margin-right: 3%;
}

tr{
  border: 1px solid #E3EBF6;
}

th {
  background-color: #071333;
  padding: 10px;
  letter-spacing: 0.5px;
  font-weight: 500;
  font-size: 14px;
  color: #ffffff;
  text-align: center;
}

td {
  /*border: 1px solid #E3EBF6;*/
  text-align: center;
  align-items: center;
  align-content: center;
  padding: 15px 8px;
  /*letter-spacing: 1px;*/
  color: #667085;
  font-weight: 200;
  font-size: 15px;

}

.empty-state{
  text-align: center;
  margin-top: 7%;
  margin-right: 8%;
}

.empty-state-text-1{
  font-weight: 600;
  font-size: 18px;
  line-height: 20px;
  color: #353542;
  padding-top: 0.5%;
  padding-bottom: 0.5%;
}

.empty-state-text-2{
  font-weight: 200;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  color: #353542;
  padding-bottom: 1.25%;
}


.action-content{
  display: flex;
  align-items: center;
  align-content: center;
  padding: 8px 14px;
  gap: 8px;
  width: 88px;
  height: 36px;
  background: #FFFFFF;
  border: 1px solid #D0D5DD;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border-radius: 4px;
  margin-right: 13px;
}

.action-content:hover{
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
}

.action-content p {
  color: #667085;
  font-size: 13px;
}


/*select {*/
/*  width: 45%;*/
/*  padding: 4px;*/
/*  !*padding-left: 15px;*!*/
/*  display: block;*/
/*  background: #FFFFFF;*/
/*  border: 1px solid #D0D5DD;*/
/*  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);*/
/*  border-radius: 5px;*/
/*}*/

.pagination{
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: space-between;
  padding-top: 8px;
}

.previous{
  /*display: flex;*/
  /*align-content: center;*/
  /*align-items: center;*/
  text-align: center;
  padding: 8px 14px;
  gap: 8px;
  font-size: 12px;
  width: 100px;
  height: 30px;
  background: transparent;
  color: #667085;
  /*border: 1px solid #1570EF;*/
  border: 1px solid #E3EBF6;
  box-shadow: 0 1px 2px rgba(16, 24, 40, 0.05);
  border-radius: 4px;
}

.previous:hover{
  box-shadow: 0 0 5px rgba(16, 24, 40, 0.2);
}

.page-indicator{
  color: #667085;
  font-weight: 200;
  font-size: 13px;
}


@media (max-width: 990px) {
  .fields-alpha{

    margin-left: unset;
    margin-right: unset;

  }
}
@media (max-width: 550px) {
  th{
    font-size: 12px;
  }
  td{
    font-size: 12px;
  }
  .table{
    width: 100%;
  }
  .fields-alpha{
    padding-top: 15px;
    margin-top: 3%;
    margin-left: unset;
    margin-right: unset;
  }
  .form{
    margin-right: unset;
    margin-left: unset;
    padding-right: unset;
  }
}

</style>