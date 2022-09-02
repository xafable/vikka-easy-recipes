<template>



    <div role="button" class="card mt-3" :class="{'card-mouseenter' : isMouseEntered}" @mouseenter="mouseEnter" @mouseleave="mouseLeave" @click="click">
        <img class="ava" src="https://via.placeholder.com/10/CC66FF/FFFFFF?text=X" alt="Avatar" height="250">
        <div class="card-body">
            <h5>{{ title }}</h5>
            <p class="card-text"> {{ shortDescription}}</p>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>

        </div>
    </div>


</template>

<script>
export default {
    name: "RecipeItemComponent",
    data() {
        return {
            isMouseEntered: false,
        }
    },
    props:{
        title: String,
        id: Number,
        shortDescription: String,
    },
    methods: {
        mouseEnter(){
            this.isMouseEntered = true;

        },
        mouseLeave(){
            this.isMouseEntered = false;

        },
        click(){
            this.$router.push('/recipe/'+this.id)
        }
    }
}
</script>

<style scoped>
.card-mouseenter{
    background: #ffbaf3;
}
</style>
