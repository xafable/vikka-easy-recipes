<template>

    <nav class="navbar navbar-expand-lg bg-light border-bottom">
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
                        <def-button data-bs-toggle="modal" data-bs-target="#navModal">
                            <template v-slot:buttonIcon>
                                <font-awesome-icon icon="fa-solid fa-blog" />
                            </template>
                            Блог
                        </def-button>
                    </li>
                </ul>


                <def-button data-bs-toggle="modal" data-bs-target="#navModal">
                    <template v-slot:buttonIcon>
                        <span style="color: blue;">
                        <font-awesome-icon icon="fa-brands fa-facebook" />
                        </span>
                    </template>
                </def-button>

                <def-button data-bs-toggle="modal" data-bs-target="#navModal">
                    <template v-slot:buttonIcon>
                        <span style="color: red;">
                            <font-awesome-icon icon="fa-brands fa-youtube" />
                        </span>
                    </template>
                </def-button>


            </div>
        </div>
    </nav>

</template>

<script>
    export default {
        mounted() {
            console.log(this.msg)
        },
        data() {
            return {
                appTitle: 'VikaRecipes',
            }
        }
    }
</script>
