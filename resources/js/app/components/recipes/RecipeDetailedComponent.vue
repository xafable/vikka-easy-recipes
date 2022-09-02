<template>
    <h1 class="display-1">{{ recipe.title }}</h1>
    <div>User {{ recipeId }}</div>
</template>

<script>
export default {
    name: "RecipeDetailedComponent",
    data() {
        return {
            recipeId: '',
            recipe:''
        }
    },
    props:{
        title: String
    },
    mounted() {
        this.recipeId = this.$route.params.id;
        this.fetchRecipe();
    },
    methods: {
        async fetchRecipe(){
            fetch(this.app_url + '/api/recipe/'+ this.recipeId ,{
                method: 'GET',
                headers: {
                    'Accept': 'application/json' }
            })
                .then(response => {
                    if (response.ok) {
                        return response.json();
                    }
                    else
                        return response.json().then(data => { throw new Error(data.message) })
                })
                .then(data => {
                    this.recipe = data.recipe;
                });

        }

    }
}
</script>

<style scoped>

</style>
