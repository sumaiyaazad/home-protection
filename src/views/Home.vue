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
                            >
                                Flame Sensor Status
                            </v-btn>
                        </div>
                        </v-card-actions>
                        <v-card-actions class="justify-center">
                            <div class="my-2">
                                <v-btn
                                    x-large
                                    color="success"
                                    dark
                                    style="width:310px;font-family: 'Dancing Script', cursive; font-size: 1.1em"
                                >
                                   Gas Sensor Status
                                </v-btn>
                            </div>
                        </v-card-actions>
                        <v-card-actions class="justify-center" >
                            <div class="my-2">
                                <v-btn
                                    x-large
                                    color="success"
                                    dark
                                    style="font-family: 'Dancing Script', cursive; font-size: 1.1em"
                                >
                                    Anti-theft Sensor Status
                                </v-btn>
                            </div>
                        </v-card-actions>
                        <v-card-actions class="justify-center" >
                            <div class="my-2" >
                                        <v-switch
                                            v-model="enable"
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
            enable:false
        }
    },
    components: {
    },
  }
</script>

<style>
.my-switch .v-label {
    font-family: 'Dancing Script', cursive;
    font-size: 1.5em;
    text-decoration: black;
}
</style>
