<template>
    <div class="klokke">
        <h1>{{klokka}}</h1>
        <div class="date">{{dato}}</div>
    </div>
</template>

<style scoped>

h1 {
    margin: 0;
    padding: 0;
    font-size: 5em;
    text-align: center;
    text-shadow: 2px 2px 5px rgba(0,0,0,0.6);
}
.date {
    text-align: center;
}
.klokke {
    color: #fff;
    width: 30vw;
    background-color: rgba(0,0,0,0.5);
    padding: 20px;
    border-radius: 10px;
    margin-bottom: 20px;
}
</style>

<script>
export default {
    data() {
        return {
            klokka: "",
            dato: "",
            maneder: ["januar", "februar", "mars", "april", "mai", "juni", "juli", "august", "september", "oktober", "november", "desember"],
            dager: ["søndag", "mandag", "tirsdag", "onsdag", "torsdag", "fredag", "lørdag"]
        }
    },
    mounted() {
        let vm = this;
        vm.klokka = (new Date()).toTimeString().substr(0,5);
        vm.dato = vm.dager[(new Date()).getDay()] + " " + (new Date()).getDate() + ". " + vm.maneder[(new Date()).getUTCMonth()] + " " + (new Date()).getFullYear();
        setInterval(() => {
            vm.klokka = (new Date()).toTimeString().substr(0,5);
        }, 5000);
    }
}
</script>