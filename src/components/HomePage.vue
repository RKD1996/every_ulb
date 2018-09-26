<template>
  <v-container>
    <v-layout row wrap class="mb-4">
      <v-flex xs12 sm6>
        <v-layout row wrap>
          <v-flex xs12>
            <span class="headline">WB-Meghalaya Landscape Mgmnt.</span>
          </v-flex>
          <v-flex xs12>
            <span>powered by everyULB</span>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex xs12 sm6>
        <v-layout row wrap>
          <v-flex xs4 class="text-xs-right">
            <v-btn color="success" @click="homeComponent('map')" small flat outline>Village Profile</v-btn>
          </v-flex>
          <v-flex xs4 class="text-xs-left">
            <v-btn color="success" @click="homeComponent('project')" small flat outline>PROJECT PROGRESS</v-btn>
          </v-flex>
          <v-flex xs4>
            <v-btn color="success" @click="homeComponent('request')" small flat outline>User Info</v-btn>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
    <v-divider></v-divider><br>
    <v-layout row wrap v-show="home === 'map'">
      <v-flex xs12>
        <map-view></map-view>
      </v-flex>
    </v-layout>
    <v-layout row wrap v-show="home === 'request'">
      <v-flex xs12>
        <request-access></request-access>
      </v-flex>
    </v-layout>
    <div v-show="home === 'project'">
      <div class="text-xs-center display-1 mb-4">
        <u>Project View</u>
      </div>
      <v-stepper width="100px">
        <v-stepper-header>
          <v-stepper-step v-for="(t, i) in StepCount"  :key="t.id" :complete="t.state"></v-stepper-step>
        </v-stepper-header>
      </v-stepper><br>
      <v-tabs slot="extension" v-model="tabs" centered color="green" slider-color="white">
        <v-tab class="subheading">PLANNING</v-tab>
        <v-tabs-slider color="white"></v-tabs-slider>
        <v-tab class="subheading">IMPLEMENTATION</v-tab>
        <v-tabs-slider color="white"></v-tabs-slider>
        <v-tab class="subheading">MONITORING</v-tab>
        <v-tabs-slider color="wwhite"></v-tabs-slider>
      </v-tabs>
      <v-tabs-items v-model="tabs">
        <v-tab-item>
          <plan></plan>
        </v-tab-item>
        <v-tab-item>
          <imply></imply>
        </v-tab-item>
        <v-tab-item>
          <monitor></monitor>
        </v-tab-item>
      </v-tabs-items>
    </div>
  </v-container>
</template>

<script>
import Plan from '@/components/tab/Planning'
import Imply from '@/components/tab/Implementation'
import Monitor from '@/components/tab/Monitoring'
import Map from '@/components/map/Map'
import Request from '@/components/request/RequestAccess'

export default {
  name: 'home',
  components: {
    'plan': Plan,
    'imply': Imply,
    'monitor': Monitor,
    'map-view': Map,
    'request-access': Request
  },
  data () {
    return {
      show: '',
      home: '',
      tabs: null,
      StepCount: [
        {
          id: 1,
          state: false
        },
        {
          id: 2,
          state: true
        },
        {
          id: 3,
          state: false
        },
        {
          id: 4,
          state: false
        },
        {
          id: 5,
          state: false
        },
        {
          id: 6,
          state: false
        },
        {
          id: 7,
          state: false
        }
      ]
    }
  },
  methods: {
    showComponent (event) {
      this.show = event
      this.dot = event
    },
    homeComponent (event) {
      this.home = event
    }
  },
  mounted () {
    this.showComponent('pl')
    this.homeComponent('project')
  }
}
</script>
