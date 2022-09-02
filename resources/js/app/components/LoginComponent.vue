<template>
    <form>
        <div class="alert alert-primary" role="alert">
            {{ user_id}}
        </div>

        <div class="mb-3">
            <label for="InputEmail" class="form-label">Email address</label>
            <input v-model="user.email" type="email" class="form-control" id="InputEmail" aria-describedby="emailHelp">
            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div class="mb-3">
            <label for="InputPassword" class="form-label">Password</label>
            <input v-model="user.password" type="password" class="form-control" id="InputPassword">
        </div>

        <button @click="login" class="btn btn-primary">Войти</button>
    </form>
</template>

<script>
import { useToast } from "vue-toastification";

export default {
    name: "LoginComponent",
    setup() {
        const toast = useToast();
        return { toast }
    },
    data(){
     return {
         user: {
             email: '',
             password: '',
             userId: '',
             token: ''
         }
     }
    },
    methods: {
    login(){
        fetch(this.app_url + '/api/login',{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.user),
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                else
                    return response.json().then(data => { throw new Error(data.message) })
            })
            .then(data => {
                this.user.user_id = data.user_id;
                this.user.token = data.token;

                this.$cookies.set('_token', this.user.token,'180d');

                this.toast(data.message);
            } )
            .catch( error =>  this.toast.error(error.message));


    }
    }
}
</script>

<style scoped>

</style>
