<template>
  <div>
    <div class="display-1 mt-2 text-xs-center">
      <u>Request Access</u>
    </div>
    <div class="mt-3">
      <v-data-table :headers="headers" :items="request_user" :loading="load" class="elevation-1">
        <v-progress-linear slot="progress" color="blue" indeterminate></v-progress-linear>
        <template slot="items" slot-scope="props">
          <td>{{ props.item.name }}</td>
          <td class="text-xs-left">{{ props.item.email }}</td>
          <td class="text-xs-left">{{ props.item.password }}</td>
          <td class="text-xs-left">{{ props.item.phone }}</td>
          <td class="text-xs-left">{{ props.item.organisation }}</td>
          <td><v-select :items="request_type" label="Set Permission" v-model="props.item.request"></v-select></td>
          <td><v-select :items="user_type" label="Set User Type" v-model="props.item.user"></v-select></td>
          <td><v-btn fab small color="success" @click="saveUser(props.item.id, props.item.name, props.item.email, props.item.password, props.item.phone, props.item.organisation, props.item.request, props.item.user)">save</v-btn></td>
        </template>
      </v-data-table>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      load: false,
      request: '',
      user: '',
      request_type: ['Accept', 'Decline'],
      user_type: ['Master', 'Admin', 'Common'],
      headers: [
        {
          text: 'Name',
          sortable: true,
          value: 'name'
        },
        { text: 'Email', value: 'Email' },
        { text: 'Password', value: 'Password' },
        { text: 'Phone Number', value: 'Phone' },
        { text: 'Organisation', value: 'Organisation' },
        { text: 'Request', value: 'Request' },
        { text: 'Member Type', value: 'User_type' },
        { text: 'Save', value: 'Save' }
      ],
      request_user: [
        {
          id: 1,
          value: false,
          name: 'Bhavesh Joshi',
          email: 'bhavesh@email.com',
          password: 'password',
          phone: 9437236159,
          organisation: 'UPSC',
          request: 'declined',
          user: 'user'
        },
        {
          id: 2,
          value: false,
          name: 'Bhavesh Joshi',
          email: 'bhavesh@email.com',
          password: 'password',
          phone: 9437236159,
          organisation: 'UPSC',
          request: 'declined',
          user: 'user'
        },
        {
          id: 3,
          value: false,
          name: 'Bhavesh Joshi',
          email: 'bhavesh@email.com',
          password: 'password',
          phone: 9437236159,
          organisation: 'UPSC',
          request: 'declined',
          user: 'user'
        },
        {
          id: 4,
          value: false,
          name: 'Bhavesh Joshi',
          email: 'bhavesh@email.com',
          password: 'password',
          phone: 9437236159,
          organisation: 'UPSC',
          request: 'declined',
          user: 'user'
        },
        {
          id: 5,
          value: false,
          name: 'Bhavesh Joshi',
          email: 'bhavesh@email.com',
          password: 'password',
          phone: 9437236159,
          organisation: 'UPSC',
          request: 'declined',
          user: 'user'
        },
        {
          id: 6,
          value: false,
          name: 'Bhavesh Joshi',
          email: 'bhavesh@email.com',
          password: 'password',
          phone: 9437236159,
          organisation: 'UPSC',
          request: 'declined',
          user: 'user'
        },
        {
          id: 7,
          value: false,
          name: 'Bhavesh Joshi',
          email: 'bhavesh@email.com',
          password: 'password',
          phone: 9437236159,
          organisation: 'UPSC',
          request: 'declined',
          user: 'user'
        }
      ]
    }
  },
  methods: {
    saveUser (id, name, email, password, phone, organisation, request, user) {
      var removeIndex = this.request_user.map(function (item) {}).indexOf(this.id)
      console.log(removeIndex)
      this.request_user.splice(removeIndex, 1)
    }
  }
}
</script>
