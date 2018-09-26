<template>
  <v-container>
    <v-card>
      <v-card-text>
        <v-layout row wrap>
          <v-flex xs12 sm6>
            <v-card class="mt-4" hover v-for="(t,i) in implyData"  :key="t.id" :color="colors" @click.native="showImpl(t.topic, t.critical, t.eoi, t.final)">
              <v-card-text>
                <v-layout row wrap>
                  <v-flex xs8 style="border-right: 1px solid #dee1e5;">
                    <v-layout row wrap>
                      <v-flex xs2>
                        <v-checkbox :input-value="t.status"></v-checkbox>
                      </v-flex>
                      <v-flex xs10>
                        <div class="mt-3 pt-1">{{t.topic}}</div>
                      </v-flex>
                    </v-layout><br>
                    <v-divider></v-divider>
                    <span>{{t.department}}</span>
                  </v-flex>
                  <v-flex xs1></v-flex>
                  <v-flex xs3 class="text-xs-right">
                    <span><b>{{t.stage}}</b></span>
                  </v-flex>
                </v-layout>
              </v-card-text>
            </v-card>
          </v-flex>
          <v-flex xs12 sm6>
            <v-card class="ma-4" color="yellow lighten-3" v-show="drop2 === 'imp'">
              <v-card-title >
                <div class="title">{{head}}</div>
              </v-card-title>
              <v-card-text>
                <v-layout row class="text-xs-center mt-4">
                  <v-flex xs4 class="mr-1">
                    <v-card hover>
                      <span class="subheading">Critical areas</span><br><br>
                      <span class="title">{{ critical }}</span><br>
                      <span>villages</span>
                    </v-card>
                  </v-flex>
                  <v-flex xs4 class="mr-1">
                    <v-card hover>
                      <span class="subheading">EOI Submitted</span><br><br>
                      <span class="title">{{ eoi }}</span><br>
                      <span>villages</span>
                    </v-card>
                  </v-flex>
                  <v-flex xs4>
                    <v-card hover>
                      <span class="subheading">Final Selected</span><br><br>
                      <span class="title">{{ final }}</span><br>
                      <span>villages</span>
                    </v-card>
                  </v-flex>
                </v-layout>
                <v-layout row wrap class="text-xs-center mt-5">
                  <v-flex xs6>
                    <span>VILLAGES</span>
                  </v-flex>
                  <v-flex xs6>
                    <span>INDEX SCORE</span>
                  </v-flex>
                </v-layout>
                <v-divider></v-divider>
                <v-expansion-panel popout class="text-xs-center">
                  <v-expansion-panel-content class="mt-2" v-for="(item,i) in place_index" :key="item.id">
                    <div slot="header" class="subheading">{{item.place_name}}</div><div slot="header" class="ml-5 pl-5">{{item.index}}</div>
                    <v-divider></v-divider>
                    <v-card class="ml-2 mb-3" hover>
                      <v-layout row wrap class="text-xs-center mt-2" v-for="(plan,i) in item.planning_index"  :key="plan.id">
                        <v-flex xs6>
                          <span>{{plan.index_name}}</span>
                        </v-flex>
                        <v-flex xs6>
                          <span class="blue--text"><u>{{plan.index}}</u></span>
                        </v-flex>
                      </v-layout>
                    </v-card>
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        drop2: '',
        head: '',
        colors: '',
        value: [],
        critical: '',
        eoi: '',
        final: '',
        place_index: [
          {
            id: 1,
            place_name: 'Nongkhlaw',
            index: 8.5,
            planning_index: [
              {
                id: 1,
                index_name: 'Vegetation Index',
                index: 8.2
              },
              {
                id: 2,
                index_name: 'Slope',
                index: 7.5
              },
              {
                id: 3,
                index_name: 'Soil brightness index',
                index: 6.5
              },
              {
                id: 4,
                index_name: 'Acute water shortage',
                index: 7.3
              },
              {
                id: 5,
                index_name: 'Resource dependency poverty',
                index: 8.3
              },
              {
                id: 6,
                index_name: 'Resource dependency poverty',
                index: 8.3
              }
            ]
          },
          {
            id: 2,
            place_name: 'Shillong',
            index: 8.4,
            planning_index: [
              {
                id: 1,
                index_name: 'Vegetation Index',
                index: 8.2
              },
              {
                id: 2,
                index_name: 'Slope',
                index: 7.5
              },
              {
                id: 3,
                index_name: 'Soil brightness index',
                index: 6.5
              },
              {
                id: 4,
                index_name: 'Acute water shortage',
                index: 7.3
              },
              {
                id: 5,
                index_name: 'Resource dependency poverty',
                index: 8.3
              },
              {
                id: 6,
                index_name: 'Resource dependency poverty',
                index: 8.3
              }
            ]
          },
          {
            id: 3,
            place_name: 'Sohkymphor',
            index: 8.8,
            planning_index: [
              {
                id: 1,
                index_name: 'Vegetation Index',
                index: 8.2
              },
              {
                id: 2,
                index_name: 'Slope',
                index: 7.5
              },
              {
                id: 3,
                index_name: 'Soil brightness index',
                index: 6.5
              },
              {
                id: 4,
                index_name: 'Acute water shortage',
                index: 7.3
              },
              {
                id: 5,
                index_name: 'Resource dependency poverty',
                index: 8.3
              },
              {
                id: 6,
                index_name: 'Resource dependency poverty',
                index: 8.3
              }
            ]
          },
          {
            id: 4,
            place_name: 'Rombagre',
            index: 8.6,
            planning_index: [
              {
                id: 1,
                index_name: 'Vegetation Index',
                index: 8.2
              },
              {
                id: 2,
                index_name: 'Slope',
                index: 7.5
              },
              {
                id: 3,
                index_name: 'Soil brightness index',
                index: 6.5
              },
              {
                id: 4,
                index_name: 'Acute water shortage',
                index: 7.3
              },
              {
                id: 5,
                index_name: 'Resource dependency poverty',
                index: 8.3
              },
              {
                id: 6,
                index_name: 'Resource dependency poverty',
                index: 8.3
              }
            ]
          }
        ],
        implyData: [
          {
            id: 1,
            topic: 'Establishment of PMUs',
            department: 'MBMA',
            stage: 'YES(70% done)',
            status: false,
            critical: 236,
            eoi: 52,
            final: 123
          },
          {
            id: 2,
            topic: 'Identify critical areas',
            department: 'NESAC',
            stage: '78% done(2000 Villages identified)',
            status: true,
            critical: 159,
            eoi: 152,
            final: 1213
          },
          {
            id: 3,
            topic: 'Sensitization + Awareness + Green Citizen Charter',
            department: 'SPMU, DPMU, BPMU',
            stage: '3/3 Completed',
            status: true,
            critical: 1236,
            eoi: 152,
            final: 1123
          },
          {
            id: 4,
            topic: 'Village level committee + Bank Account + Youth identification for capacity building',
            department: 'Village',
            stage: '4/4 Completed',
            status: true,
            critical: 536,
            eoi: 552,
            final: 523
          },
          {
            id: 5,
            topic: 'Screening process',
            department: '',
            stage: '400 Villages identified Avg. Index Score - 7.4',
            status: false,
            critical: 1136,
            eoi: 532,
            final: 423
          }
        ]
      }
    },
    methods: {
      showImpl (topic, critical, eoi, final) {
        this.drop2 = 'imp'
        this.colors = 'yellow lighten-3'
        this.head = topic
        this.critical = critical
        this.eoi = eoi
        this.final = final
      }
    }
  }
</script>
