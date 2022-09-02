<template>
    <form>
        <div class="alert alert-primary" role="alert">
            {{ user_id}}
        </div>
        <div class="mb-3">
            <label for="InputName" class="form-label">Name</label>
            <input v-model="data.name" type="text" class="form-control" id="InputName" aria-describedby="emailHelp">
        </div>
        <div class="mb-3">
            <label for="InputEmail" class="form-label">Email address</label>
            <input v-model="data.email" type="email" class="form-control" id="InputEmail" aria-describedby="emailHelp">
            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div class="mb-3">
            <label for="InputPassword" class="form-label">Password</label>
            <input v-model="data.password" type="password" class="form-control" id="InputPassword">
        </div>

        <button @click="login" class="btn btn-primary">Submit</button>
    </form>
</template>

<script>
export default {
    name: "RegisterComponent",
    methods: {
        register(){

            fetch(this.app_url + '/api/register',{
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.data),
            })
                .then(response => response.json())
                .then(data => this.user_id = data.user_id );
        }
    }
}
</script>

<style scoped>

</style>
