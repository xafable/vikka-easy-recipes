<template>

    <nav class="navbar navbar-expand-lg bg-light border-bottom fixed-top ">
        <div class="container">

            <a class="navbar-brand" href="#"> {{ appTitle }}</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">

                <ul class="navbar-nav me-auto mb-2 mb-lg-0">

                    <li class="nav-item">




                        <def-button data-bs-toggle="modal" data-bs-target="#navModal">
                            <template v-slot:buttonIcon>
                                <font-awesome-icon icon="fa-solid fa-utensils" />
                            </template>
                            Рецепты
                        </def-button>

                     <modal-component modalTitle = "Обзор Рецептов" modalId = "navModal">
                         <explore-recipes-component></explore-recipes-component>
                     </modal-component>
                    </li>

                    <li class="nav-item">
                        <def-button>
                            <template v-slot:buttonIcon>
                                <font-awesome-icon icon="fa-solid fa-blog" />
                            </template>
                            Блог
                        </def-button>
                    </li>
                </ul>

                <div v-if="isLoggedIn">
                    <div class="dropdown">
                        <def-button class="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                            <img class="ava" src="https://via.placeholder.com/80/CC66FF/FFFFFF?text=X" alt="Avatar">
                            {{ getUserData.name }}
                        </def-button>




                        <ul class="dropdown-menu dropdown-menu-dark">
                            <li><a class="dropdown-item active" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                            <li><hr class="dropdown-divider"></li>
                            <li><a class="dropdown-item" href="#">Separated link</a></li>
                        </ul>
                    </div>

                </div>
                <div v-else>
                    <def-button data-bs-toggle="modal" data-bs-target="#navModalAuth">
                        <template v-slot:buttonIcon>
                            <font-awesome-icon icon="fa-solid fa-utensils" />
                        </template>
                        Авторизация
                    </def-button>
                    <modal-component modalTitle = "Авторизация" modalId = "navModalAuth">
                        <auth-component></auth-component>
                    </modal-component>
                </div>





                <def-button class="m-0" >
                    <template v-slot:buttonIcon>
                        <span style="color: blue;">
                        <font-awesome-icon icon="fa-brands fa-facebook" />
                        </span>
                    </template>
                </def-button>

                <def-button class="m-0">
                    <template v-slot:buttonIcon>
                        <span style="color: red;">
                            <font-awesome-icon icon="fa-brands fa-youtube" />
                        </span>
                    </template>
                </def-button>

                <def-button @click="run">
                    RUN
                </def-button>


            </div>
        </div>
    </nav>

</template>

<script>
    export default {
        computed:{
          getToken(){
              return this.$store.state.user.token;
          },
          getUserData(){
              return this.$store.state.user.userData;
          },
          isLoggedIn(){
              return this.$store.state.user.isLoggedIn;
          }
        },
        created() {
            this.token = this.$store.state.user.token;
        },
        data() {
            return {
                appTitle: 'VikaRecipes',
                token: '1',
            }
        },
        methods:{
            run(){
                console.log(this.$store.state.user.isLoggedIn);
            }
        }
    }
</script>
<style scoped>
.ava {
    border-radius: 50%;
    width: 40px;
    height: 40px;
}
</style>
