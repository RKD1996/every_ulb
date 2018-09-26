<template>
  <v-container fluid class="mt-5">
    <v-layout row>
      <v-flex xs12 sm4 offset-sm4>
        <v-card class="mt-3">
          <v-card-text>
            <h3 class="display-1 text-xs-center font-weight-light"><u>Reset Password</u></h3>
          </v-card-text>
          <v-card-text>
            <v-form v-model="valid" ref="form" lazy-validation>
              <v-layout row>
                <v-flex xs12>
                  <v-text-field name="Username" label="Username" id="username" v-model="username" type="text" prepend-icon="people" :rules="userRules" required></v-text-field>
                </v-flex>
              </v-layout>
              <v-layout row>
                <v-flex xs12>
                  <v-text-field name="password" label="Password" id="password" v-model="password" type="password" prepend-icon="lock" :rules="passwordRules" required></v-text-field>
                </v-flex>
              </v-layout>
              <v-layout row>
                <v-flex xs12>
                  <v-text-field name="password" label="Confirm Password" id="cpassword" v-model="cpassword" type="password" prepend-icon="lock" :rules="confirmpasswordRules" required></v-text-field>
                </v-flex>
              </v-layout>
              <v-layout>
                <v-flex xs12 class="text-xs-center">
                  <v-btn class="info" @click="loginUser" :disabled="!valid">Login</v-btn>
                </v-flex>
              </v-layout>
            </v-form>
          </v-card-text>
        </v-card>
        {{username}}
        {{password}}
        {{cpassword}}
        <v-alert type="success" :value="show === true">success</v-alert>
        <v-alert type="error" :value="show === false">un-success</v-alert>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
// import axios from 'axios'

export default{
  data () {
    return {
      username: '',
      password: '',
      cpassword: '',
      valid: false,
      show: '',
      userRules: [
        v => !!v || 'Username is required'
      ],
      passwordRules: [
        v => !!v || 'Password is required',
        v => (v && v.length >= 8) || 'Password must be 8 characters'
      ],
      confirmpasswordRules: [
        v => !!v || 'Re-Type your Password',
        v => (v && v.length >= 8) || 'Confirm Password must be 8 characters'
      ]
    }
  },
  methods: {
    loginUser () {
      this.valid = false
      if (this.password === this.cpassword) {
        this.show = true
      } else {
        this.show = false
      }
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
