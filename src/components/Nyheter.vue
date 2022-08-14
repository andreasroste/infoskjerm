<template>
    <div class="njus">
        <h1>Njus</h1>
        <div class="nyhet" v-for="(nyhet, id) in nyheter" :key="id">
            <h4>{{nyhet.title}}</h4>
            <p>{{nyhet.description}}</p>
            <a :href="nyhet.link" target="_blank">Les mer ...</a>
        </div>
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
h4,p {
    margin: 0;
    padding: 0;
    text-shadow: 2px 2px 5px rgba(0,0,0,0.6);
}
.nyhet {
    border-bottom: 3px solid rgba(0,0,0,0.6);
    margin: 20px;
}
.date {
    text-align: center;
}
.njus {
    color: #fff;
    width: 35vw;
    background-color: rgba(0,0,0,0.5);
    padding: 20px;
    border-radius: 10px;
}
a {
    color: #aaa;
}
</style>

<script>

import {read} from 'feed-reader';

export default {
    data() {
        return {
            nyheter: []
        }
    },
    mounted() {
        read("https://www.nrk.no/toppsaker.rss").then((feed) => {
            this.nyheter = feed.entries.slice(0,7);
        });
        setInterval(() => {
            read("https://www.nrk.no/toppsaker.rss").then((feed) => {
                this.nyheter = feed.entries.slice(0,7);
            });
        }, 60000);
    }
}
</script>