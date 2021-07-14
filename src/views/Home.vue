<template>
        <v-container fluid style="margin-top: 3%;">
            <v-row>
                <v-col cols="12" lg="4" sm="2"></v-col>
                <v-col cols="12" lg="4" sm="8">
                    <v-card elevation="5" class="pa-16">
                        <v-card-title class=" justify-center" style="font-family: 'Dancing Script', cursive; font-size: 2em">Press Button</v-card-title>
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
                                <v-card-text v-if="fshow" style="width:310px;font-family: 'Dancing Script', cursive; font-size: 1.7em">current temperature :
                                </v-card-text>
                                <v-card-text v-if="fshow" style="width:310px;font-family: 'Dancing Script', cursive; font-size: 1.7em"> 22 Celcius
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
                                <v-card-text v-if="gshow" style="width:310px;font-family: 'Dancing Script', cursive; font-size: 1.7em">lpg gas amount:
                                </v-card-text>
                                <v-card-text v-if="gshow" style="width:310px;font-family: 'Dancing Script', cursive; font-size: 1.7em">1000 ppm
                                </v-card-text>
                                <v-card-text v-if="gshow" style="width:310px;font-family: 'Dancing Script', cursive; font-size: 1.7em">smoke amount:
                                </v-card-text>
                                <v-card-text v-if="gshow" style="width:310px;font-family: 'Dancing Script', cursive; font-size: 1.7em">1000 ppm
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
                                <v-card-text v-if="atshow" style="width:310px;font-family: 'Dancing Script', cursive; font-size: 1.7em">last motion detection time:
                                </v-card-text>
                                <v-card-text v-if="atshow" style="width:310px;font-family: 'Dancing Script', cursive; font-size: 1.7em">1000 ms
                                </v-card-text>
                            </div>
                        </v-card-actions>
                        <v-card-actions class="justify-center" >
                            <div class="my-2" >
                                        <v-switch
                                            v-model="atflag"
                                            class="my-switch"
                                            color="success"
                                            label="Anti-theft "
                                        >
                                        </v-switch>
                            </div>
                        </v-card-actions>
                    </v-card>
                </v-col>
                <v-col cols="12" lg="4" sm="2">
                </v-col>
            </v-row>
        </v-container>

</template>

<script>

  export default {
    name: 'Home',
    data:()=>{
        return {
            atflag:false,
            atshow:false,
            gshow:false,
            fshow:false
        }
    },
    components: {
    },
    methods:{
        fClicked(){
            this.fshow=!this.fshow;
        },
        gClicked(){
            this.gshow=!this.gshow;
        },
        atClicked(){
            this.atshow=!this.atshow;
        }
    }
  }
</script>

<style>
.my-switch .v-label {
    font-family: 'Dancing Script', cursive;
    font-size: 1.5em;
    text-decoration: black;
    color: black;
}
</style>
