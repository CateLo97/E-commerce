<script>

    import Sidebar from './components/Sidebar.vue'
    import MainComponent from './components/MainComponent.vue'
    export default {
        components: {
            Sidebar,
            MainComponent,
    },
    methods: {
        navigateToApp() {
            this.$router.push('/app');
        },
    },
};
</script>

<template>

<div class="wrapper">
    <Sidebar/>
    <MainComponent/>
</div>


</template>