<template>
        <v-container fluid style="margin-top: 0%;">
            <v-row>
                <v-col cols="12" lg="3" sm="0"></v-col>
                <v-col cols="12" lg="6" sm="12">
                    <v-card elevation="5" class="pa-16">
                        <v-card-title class=" justify-center" style="font-family: 'Dancing Script', cursive; font-size: 2em">Press Button</v-card-title>
                        <v-card-actions class="justify-center">
                            <div class="my-2">
                                <v-btn
                                    x-large
                                    color="success"
                                    style="width:310px;font-family: 'Dancing Script', cursive; font-size: 1.1em"
                                    dark
                                    @click="allClicked"
                                >
                                    All Sensor Status
                                </v-btn>
                                        <v-card-text v-if="allshow" style="font-family: 'Dancing Script', cursive; font-size: 1.7em">temperature reading :
                                        </v-card-text>
                                        <v-card-text v-for="item in temp" :key="item.id" v-if="allshow && item.field3!==null" style="font-family: 'Dancing Script', cursive; font-size: 1.2em"> {{item.created_at}}   :   {{item.field3}} C
                                        </v-card-text>
                                        <v-card-text v-if="allshow" style="font-family: 'Dancing Script', cursive; font-size: 1.7em">lpg gas reading:
                                        </v-card-text>
                                        <v-card-text v-for="item in lpg" :key="item.id" v-if="allshow && item.field1!==null" style="font-family: 'Dancing Script', cursive; font-size: 1.2em">{{item.created_at}}   :   {{item.field1}} ppm
                                        </v-card-text>
                                        <v-card-text v-if="allshow" style="font-family: 'Dancing Script', cursive; font-size: 1.7em">smoke reading:
                                        </v-card-text>
                                        <v-card-text v-for="item in smoke" :key="item.id" v-if="allshow  && item.field2!==null" style="font-family: 'Dancing Script', cursive; font-size: 1.2em">{{item.created_at}}   :   {{item.field2}} ppm
                                        </v-card-text>
                                        <v-card-text v-if="allshow" style="font-family: 'Dancing Script', cursive; font-size: 1.7em">anti theft reading:
                                        </v-card-text>
                                        <v-card-text v-if="allshow" style="font-family: 'Dancing Script', cursive; font-size: 1.2em">{{at}}
                                        </v-card-text>
                                        <v-card-text v-if="allshow" style="font-family: 'Dancing Script', cursive; font-size: 1.7em">last motion :
                                        </v-card-text>
                                        <v-card-text  v-if="allshow" style="font-family: 'Dancing Script', cursive; font-size: 1.2em">{{md}}
                                        </v-card-text>
                                    </div>
                        </v-card-actions>
                        <v-card-actions class="justify-center">
                            <div class="my-2">
                            <v-btn
                                x-large
                                color="success"
                                style="width:310px;font-family: 'Dancing Script', cursive; font-size: 1.1em"
                                dark
                                @click="fClicked"
                            >
                                Flame Sensor Status
                            </v-btn>
                                <v-card-text v-if="fshow" style="font-family: 'Dancing Script', cursive; font-size: 1.7em">temperature reading :
                                </v-card-text>
                                <v-card-text v-for="item in temp" :key="item.id" v-if="fshow && item.field3!==null" style="font-family: 'Dancing Script', cursive; font-size: 1.2em"> {{item.created_at}}   :   {{item.field3}} C
                                </v-card-text>
                            </div>
                        </v-card-actions>
                        <v-card-actions class="justify-center">
                            <div class="my-2">
                                <v-btn
                                    x-large
                                    color="success"
                                    dark
                                    style="width:310px;font-family: 'Dancing Script', cursive; font-size: 1.1em"
                                    @click="gClicked"
                                >
                                   Gas Sensor Status
                                </v-btn>
                                <v-card-text v-if="gshow" style="font-family: 'Dancing Script', cursive; font-size: 1.7em">lpg gas reading:
                                </v-card-text>
                                <v-card-text v-for="item in lpg" :key="item.id" v-if="gshow && item.field1!==null" style="font-family: 'Dancing Script', cursive; font-size: 1.2em">{{item.created_at}}   :   {{item.field1}} ppm
                                </v-card-text>
                                <v-card-text v-if="gshow" style="font-family: 'Dancing Script', cursive; font-size: 1.7em">smoke reading:
                                </v-card-text>
                                <v-card-text v-for="item in smoke" :key="item.id" v-if="gshow && item.field2!==null" style="font-family: 'Dancing Script', cursive; font-size: 1.2em">{{item.created_at}}   :   {{item.field2}} ppm
                                </v-card-text>
                            </div>
                        </v-card-actions>

                        <v-card-actions class="justify-center" >
                            <div class="my-2">
                                <v-btn
                                    x-large
                                    color="success"
                                    dark
                                    style="font-family: 'Dancing Script', cursive; font-size: 1.1em"
                                    @click="atClicked"
                                >
                                    Anti-theft Sensor Status
                                </v-btn>
                                <v-card-text v-if="atshow" style="font-family: 'Dancing Script', cursive; font-size: 1.7em">anti theft reading:
                                </v-card-text>
                                <v-card-text v-if="atshow " style="font-family: 'Dancing Script', cursive; font-size: 1.2em">{{at}}
                                </v-card-text>
                            </div>
                        </v-card-actions>
                        <v-card-actions class="justify-center">
                            <div class="my-2">
                                <v-btn
                                    x-large
                                    color="success"
                                    style="width:310px;font-family: 'Dancing Script', cursive; font-size: 1.1em"
                                    dark
                                    @click="mdClicked"
                                >
                                    Motion Detection Status
                                </v-btn>
                                <v-card-text v-if="mdshow" style="font-family: 'Dancing Script', cursive; font-size: 1.7em">last motion :
                                </v-card-text>
                                <v-card-text v-if="mdshow" style="font-family: 'Dancing Script', cursive; font-size: 1.2em">{{md}}
                                </v-card-text>
                            </div>
                        </v-card-actions>
<!--                        <v-card-actions class="justify-center" >-->
<!--                            <div class="my-2" >-->
<!--                                        <v-switch-->
<!--                                            v-model="atflag"-->
<!--                                            class="my-switch"-->
<!--                                            color="success"-->
<!--                                            label="Anti-theft "-->
<!--                                        >-->
<!--                                        </v-switch>-->
<!--                            </div>-->
<!--                        </v-card-actions>-->
                    </v-card>
                </v-col>
                <v-col cols="12" lg="3" sm="0">
                </v-col>
            </v-row>
        </v-container>

</template>

<script>
import {mapActions} from 'vuex'

  export default {
    name: 'Home',
    data:()=>{
        return {
            atflag:'',
            atshow:false,
            gshow:false,
            fshow:false,
            mdshow:false,
            allshow:false,
            temp:[],
            lpg:[],
            smoke:[],
            at:'',
            md:'',
        }
    },
    components: {},
    async mounted() {
        this.at=await this.fetchAT();
        if(this.at==="PIR Active"){
            this.atflag=true;
        }else{
            this.atflag=false;
        }
    },
      watch: {
        atflag: {
            handler: async function(newVal, oldVal) {
                if(newVal===true && oldVal===false){
                    await this.postAT('1');
                }
                if(newVal===false && oldVal===true){
                    await this.postAT('0');
                }

            },
            deep: true
        },
    },
    methods:{
        ...mapActions(['fetchFlame','fetchGasLpg','fetchGasSmoke','fetchAT','fetchMD','postAT']),

        async fClicked(){
            if(this.fshow===false){
                this.temp=await this.fetchFlame();
                this.fshow=(this.temp.length===0 ? false : true);
            }
            else{
                this.fshow=false;
            }
        },
        async gClicked(){
            if(this.gshow===false){
                this.lpg=await this.fetchGasLpg();
                this.smoke=await this.fetchGasSmoke();
                this.gshow=(this.lpg.length===0 && this.smoke.length===0? false : true);
            }
            else{
                this.gshow=false;
            }
        },
        async atClicked(){
            if(this.atshow===false){
                this.at=await this.fetchAT();
                this.atshow=(this.at.length===0 ? false : true);
            }
            else{
                this.atshow=false;
            }
        },
        async mdClicked(){
            if(this.mdshow===false){
                this.md=await this.fetchMD();
                this.mdshow=(this.md.length===0 ? false : true);
            }
            else{
                this.mdshow=false;
            }
        },
        async allClicked(){
            if(this.allshow===false){
                this.temp=await this.fetchFlame();
                this.lpg=await this.fetchGasLpg();
                this.smoke=await this.fetchGasSmoke();
                this.at=await this.fetchAT();
                this.md=await this.fetchMD();
                this.allshow=(this.temp.length===0 && this.lpg.length===0 && this.smoke.length===0 && this.at.length===0 && this.md.length===0 ? false : true);
            }
            else{
                this.allshow=false;
            }
        }
    }
  }
</script>

<style>
.my-switch .v-label {
    font-family: 'Dancing Script', cursive;
    font-size: 1.7em;
    text-decoration: black;
    color: black;
}
</style>
