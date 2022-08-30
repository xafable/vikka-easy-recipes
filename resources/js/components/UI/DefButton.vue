<template>
    <button type="button" class="btn btn-outline-pink border-0 c-button"  >
        <slot name="buttonIcon"></slot>
        <slot></slot>
    </button>

</template>

<script>
export default {
    name: "DefButton",


}
</script>

<style scoped>
.c-button
{
    color:#1a202c;
}

</style>
