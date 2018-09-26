<template>
  <v-container fluid>
    <v-layout row class="mt-4">
      <v-flex xs4></v-flex>
      <v-flex xs4>
        <div class="title pl-4 text-xs-center">Please fill in the form below for access</div>
        <v-card class="mt-3" width="500px">
          <v-card-text>
            <v-form v-model="valid" ref="form" lazy-validation>
              <v-layout wrap>
                <v-flex xs12>
                  <v-text-field name="name" label="Full Name" id="name" type="text" prepend-icon="perm_identity" :rules="nameRules" required></v-text-field>
                  <v-text-field name="email" label="Email Address" id="email" type="email" prepend-icon="email" :rules="emailRules" required></v-text-field>
                  <v-text-field name="password" label="Password" id="password" type="password" prepend-icon="lock" :rules="passwordRules" required></v-text-field>
                  <v-text-field name="phone" label="Phone Number" id="phone" type="text" prepend-icon="phone" :rules="phoneRules" required></v-text-field>
                  <v-text-field label="Organisation" prepend-icon="graphic_eq" refs="txtOrg" :rules="[v => !!v || 'Organizations is required']" required></v-text-field>
                </v-flex>
              </v-layout>
              <v-flex class="text-xs-right">
                <v-btn class="info" @click="submit" :disabled="!valid">Submit</v-btn>
                <v-btn @click="clear">reset</v-btn>
              </v-flex>
            </v-form>
          </v-card-text>
        </v-card>
        <v-flex class="mt-2">
          <router-link to="/signin">Already a  member? Login</router-link>
        </v-flex>
      </v-flex>
      <v-flex xs4></v-flex>
    </v-layout>
  </v-container>
</template>

<script>
// import axios from 'axios'

export default{
  data () {
    return {
      name: '',
      email: '',
      password: '',
      phone: '',
      organisation: '',
      request: '',
      valid: false,
      msg: '',
      checkUser: false,
      snackbar: false,
      signUpAlert: false,
      nameRules: [
        v => !!v || 'Name is required'
      ],
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
      ],
      passwordRules: [
        v => !!v || 'Password is required'
      ],
      phoneRules: [
        v => !!v || 'Phone Number is required',
        v => /^[0]?[789]\d{9}$/.test(v) || 'Phone Number must be valid'
      ],
      descRules: [
        v => !!v || 'Description is required',
        v => (v && v.length >= 30) || 'Name must be greater than 30 characters'
      ]
    }
  },
  methods: {
    submit () {
      this.valid = false
      if (this.$refs.form.validate()) {
        console.log('submitted')
      }
    },
    clear () {
      this.$refs.form.reset()
    },
    onDismissed () {
      this.signUpAlert = false
      this.clear()
    }
  }
}
</script>

<style scoped>
</style>
