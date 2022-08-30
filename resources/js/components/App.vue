<template>

    <navigation-component></navigation-component>
    <router-view></router-view>






</template>

<script>
export default {
    data() {
        return {
            currentComponent: 'dash',
        }
    },
    computed: {
        currentComponent() {
            return this.currentComponent.toLowerCase() + '-component';
        }
    },
    methods: {
        onChangeComponent(event){
            alert(event.target.value);
            this.currentComponent = event.target.value;
        }
    }
}
</script>

<style scoped>

</style>
