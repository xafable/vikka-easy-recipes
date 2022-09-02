<template>

    <navigation-component></navigation-component>

    <div class="container nav-bar">
        <router-view></router-view>
    </div>









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
        },
        store(){

            return this.$store.state.isLoggedin;
        }
    },
    methods: {
        onChangeComponent(event){
            alert(event.target.value);
            this.currentComponent = event.target.value;
        },
        checkToken(){
            if(this.$cookies.isKey('_token')){
                console.log('TokenFinded');
                this.token = this.$cookies.get('_token');

                fetch(this.app_url + '/api/get_me/',{
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Authorization' : 'Bearer ' + this.token,

                    } })
                    .then(response => response.json())
                    .then(data => {
                        console.log(data);
                        this.$store.commit('setToken',this.token);

                    });
            }

        }
    },
    created() {
        if(this.$cookies.isKey('_token')){
            console.log('TokenFinded');
            let token = this.$cookies.get('_token');

            fetch(this.app_url + '/api/get_me/',{
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Authorization' : 'Bearer ' + token,

                } })
                .then(response => response.json())
                .then(data => {

                    console.log(data);
                    this.$store.commit('setToken',token);
                    this.$store.commit('setUserData',data.user);
                    this.$store.commit('setLoggedInTrue');





                });
        }
    }
}
</script>

<style scoped>
.nav-bar {
    margin-top: 100px;
}
</style>
