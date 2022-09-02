<template>
    <div>
        <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li class="nav-item" role="presentation" style="color: red">
                <def-button class=" active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" aria-controls="pills-home" aria-selected="true" role="tab">
                    Авторизация
                </def-button>
            </li>
            <li class="nav-item" role="presentation">
                <def-button class="m-1" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" aria-controls="pills-profile" aria-selected="false" role="tab">
                    Регистрация
                </def-button>
            </li>
        </ul>
        <div class="tab-content" id="pills-tabContent">

            <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabindex="0">
                <login-component></login-component>

            </div>

            <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabindex="0">...

            </div>

        </div>
    </div>

</template>

<script>
export default {
name: "AuthComponent",
}
</script>

<style scoped>

</style>
