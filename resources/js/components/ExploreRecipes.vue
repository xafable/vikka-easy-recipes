<template>
    <div class="container text-center">
        <div class="row">
            <div class="col-4">

                <div class="list-group">
                <def-button @click="fetchSubCategories(item.id)" v-for="item in categories" :key="item.id">{{item.title}}</def-button>
                </div>

            </div>
            <div class="col-8">
                <def-button v-for="item in subCategories" :key="item.id">{{item.title}}</def-button>
            </div>
        </div>
    </div>

</template>

<script>
export default {
    data() {
        return {
            count: 1,
            compTitle: 'ExploreRecipes',
            categories: [],
            subCategories: [],
        }
    },
    methods: {
        fetchSubCategories(categoryId){
            fetch(this.app_url + '/api/category/'+categoryId+'/sub_categories',{
                method: 'GET',
                headers: {
                    'Accept': 'application/json' } })
                .then(response => response.json())
                .then(data => this.subCategories = data.subCategories );

        },
        fetchData(){
               fetch(this.app_url + '/api/categories',{
                method: 'GET',
                headers: {
                    'Accept': 'application/json' } })
                   .then(response => response.json())
                   .then(data => this.categories = data.categories );
           },
        },
        mounted() {
        this.fetchData();
            console.log(111);
        console.log(this.categories);
            console.log(222);

        }
}
</script>

<style scoped>

</style>
