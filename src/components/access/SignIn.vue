<template>
  <v-container fluid class="mt-5">
    <v-layout row>
      <v-flex xs12 sm4 offset-sm4>
        <v-card class="mt-3">
          <v-card-text>
            <h3 class="display-1 text-xs-center font-weight-light"><u>Sign-In</u></h3>
          </v-card-text>
          <v-card-text>
            <v-form v-model="valid" ref="form" lazy-validation>
              <v-layout row>
                <v-flex xs12>
                  <v-text-field name="Username" v-model="username" label="Username" id="username" type="text" prepend-icon="people" :rules="userRules" required></v-text-field>
                </v-flex>
              </v-layout>
              <v-layout row>
                <v-flex xs12>
                  <v-text-field name="password" v-model="password" label="Password" id="password" type="password" prepend-icon="lock" :rules="passwordRules" required></v-text-field>
                </v-flex>
              </v-layout>
              <v-layout>
                <v-flex xs12 class="text-xs-center">
                  <v-btn class="info" @click="loginUser(username, password)" :disabled="!valid">Login</v-btn>
                </v-flex>
              </v-layout>
            </v-form>
          </v-card-text>
        </v-card>
        <v-layout class="mt-3">
          <v-flex xs6>
            <router-link to="/request_access">Request Access</router-link>
          </v-flex>
          <v-flex xs6 class="text-xs-right">
            <router-link to="/forgot_password">Forgot Password?</router-link>
          </v-flex>
        </v-layout>
        <v-alert type="success" :value="show === true">success</v-alert>
        <v-alert type="error" :value="show === false">un-success</v-alert>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import axios from 'axios'

export default{
  name: 'signin',
  data () {
    return {
      username: '',
      password: '',
      valid: false,
      show: '',
      userRules: [
        v => !!v || 'Username is required'
      ],
      passwordRules: [
        v => !!v || 'Password is required',
        v => (v && v.length >= 8) || 'Password must be 8 characters'
      ]
    }
  },
  methods: {
    loginUser (user, pass) {
      var obj = this
      console.log(user, pass)
      axios({
        url: this.$hostname + '/auth/sign_in',
        method: 'post',
        data: {
          'email': user,
          'password': pass
        }
      }).then(function (res) {
        console.log(res.data)
        // obj.valid = false
        obj.show = true
        localStorage.setItem('username', res.data.data.email)
        localStorage.setItem('api_token', res.headers['access-token'])
        localStorage.setItem('client', res.headers.client)
        localStorage.setItem('uid', res.headers.uid)
        obj.$router.push('/homepage')
      })
    },
    onDismissed () {
      this.clear()
    },
    clear () {
      this.$refs.form.reset()
    }
  }
}
</script>
