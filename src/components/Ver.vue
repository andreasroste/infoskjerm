<template>
    <div class="ver">
        <div class="time" v-for="(time, id) in timefortime" :key="id">
            <span>{{time.klokkeslett}}</span>
            <img :src="'weathericons/' + time.ikon + '.png'" alt="">
            <span>{{time.temperatur}}&deg;C</span>
            <span>{{time.vindstyrke}} m/s</span>
        </div>
    </div>
</template>

<script>

import axios from 'axios';

export default {
    data() {
                return {
                    timefortime: []
                }
    },
    methods: {
        updateWeather() {
            let vm = this;
            axios.get("https://api.met.no/weatherapi/locationforecast/2.0/compact.json?lat=61.1495212&lon=10.380725").then((data) => {  // Jørstadmoen: https://api.met.no/weatherapi/locationforecast/2.0/compact.json?lat=61.1495212&lon=10.380725
                let verdata = data.data.properties.timeseries.slice(1,5);
                verdata.forEach(timedata => {
                    vm.timefortime.push({
                        klokkeslett: (new Date(timedata.time)).toTimeString().substr(0,5),
                        ikon: timedata.data.next_1_hours.summary.symbol_code,
                        vindstyrke: timedata.data.instant.details.wind_speed,
                        temperatur: timedata.data.instant.details.air_temperature
                    });
                });
            });
        }
    },
    mounted() {
        this.updateWeather();
    }
}
</script>

<style scoped>
h3 {
    width: 100%;
    text-align: center;
}
.ver {
    display: flex;
    justify-content: space-around;
    color: #fff;
    background-color: rgba(0,0,0,0.5);
    border-radius: 20px;
    max-height: fit-content;
    padding: 20px;
    margin-bottom: 20px;
}
.time {
    display: flex;
    flex-direction: column;
    text-align: center;
}
.time > img {
    max-width: 50px;
}
</style>