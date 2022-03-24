<template>
    <div v-text="data"></div>
</template>

<script>
// const jsdom = require("jsdom");
// const { JSDOM } = jsdom;
// import axios from 'axios'

export default {
    data() {
        return {
            data: ""
        }
    },
    mounted() {
        let vm = this;
        fetch("https://meny.cissky.net/maned.php", {method: "GET", headers: {Accept: "application/html"}}).then(r => {
            console.log(r);
            vm.data = r
        })
    }
}
</script>