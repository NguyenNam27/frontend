<template>
  <div class="card">
    <div class="card-header">Login Form</div>
    <div class="card-body">

      <form @submit.prevent="LoginData">
        <div class="form-group" >
          <label>Email</label>
          <input type="email" v-model="student.email" class="form-control"  placeholder="Email">
        </div>
        <div class="form-group" >
          <label>Password</label>
          <input type="password" v-model="student.password" class="form-control"  placeholder="Password">
        </div>

        <button type="submit" @click="LoginData()" class="btn btn-primary">Login</button>
      </form>
    </div>
  </div>
</template>

<script>
import { createApp} from 'vue';
import axios from 'axios';

// Vue.use(axios)
export default {
  name: 'Login',
  data () {
    return {
      result: {},
      student:{
        email: '',
        password: ''
      }
    }
  },
  created() {
  },
  mounted() {
    console.log("mounted() called.......");
    // this.LoginData();
  },
  methods: {
    LoginData()
    {
      axios.post("http://127.0.0.1:8000/api/auth/login", this.student)
          .then(
              ({data})=>{
                console.log(data);
                try {
                  this.result = data;
                  localStorage.setItem('jwtToken', data.access_token)
                  console.log(this.result);
                } catch (err) {
                  alert("Error, please try again");
                }
              }
          )
    }
  }
}
</script>
