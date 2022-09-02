<template>

    <div class="container text-center">
        <div class="row">
            <div class="col-sm-8">
                <div v-for="item in recipes" :key="item.id" >
                    <recipe-item-component :title="item.title" :shortDescription="item.short_description" :id="item.id"></recipe-item-component>
                </div>

                <div class="row justify-content-md-center">
                    <div class="col-md-auto">
                        <def-button  @click="load">Загрузить еще</def-button>
                    </div>
                </div>

            </div>
            <div class="col-sm-4">
                2 of 3 (wider)
            </div>

        </div>
    </div>










</template>

<script>


export default {
    name: "Home",
    data(){
        return {
            nextPage: 1,
            recipes: [],
        }
    },
    methods: {
         async load(){
            fetch(this.app_url + '/api/recipes?page='+ this.nextPage ,{
                method: 'GET',
                headers: {
                    'Accept': 'application/json' }
            })
                .then(response => {
                    if (response.ok) {
                        console.log('ok');
                        return response.json();
                    }
                    else
                        return response.json().then(data => { throw new Error(data.message) })
                })
                .then(data => {

                    console.log(data.recipes.values);

                    if(this.nextPage === 1){
                        this.recipes = data.recipes;
                    }
                    else {
                        let newRecipes = this.recipes;
                        data.recipes.forEach(function (item) {
                            newRecipes.push(item)
                        });
                        this.recipes = newRecipes;
                    }
                    this.nextPage++;
                });

        }
    },
    mounted() {
       this.load();
    }

}
</script>

<style scoped>

</style>
