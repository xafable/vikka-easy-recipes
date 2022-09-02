<template>

    <div class="modal fade top" :id="modalId" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-xl">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="ModalLabel">{{ modalTitle }}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <slot></slot>
                </div>

            </div>
        </div>
    </div>

</template>

<script>
export default {
    name: "ModalComponent",
    props: {
        modalTitle: String,
        modalId: Number,

    }
}
</script>

<style scoped>

</style>
