<template>
    <h1>MyCounter</h1>
    <h2>Direct Access: {{$store.state.counter.count}}</h2>
    <h2>Computed: {{countComputed}}</h2>

    <button @click="increment">+1</button>
    <button @click="incrementBy">+5</button>
    <button @click="randomInt" :disabled="isLoading">Random</button>

    <h1>mapState</h1>
    <h2>mapState: {{count}}</h2>
    <h2>lastMutation: {{lastMutation}}</h2>

    <h2>Direct Getter: {{$store.getters['counter/squareCount']}}</h2>

</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {

    computed: {
        ...mapState('counter',['count', 'lastMutation', 'isLoading']),
        countComputed() {
            return this.$store.state.count;
        }
    },
    methods: {
        increment() {
            this.$store.commit('counter/increment');
        },
        incrementBy() {
            this.$store.commit('counter/incrementBy', 5);
        },
        ...mapActions('counter', {
            randomInt: 'incrementRandomInt'
            }
        )
    }
}
</script>