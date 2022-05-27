<template>
    <div class="animate__animated animate__bounce pellet">
        <p>{{pelletNumber}}</p>
    </div>
</template>

<script>

export default {
    props: ['itemsOnCart'],
    data(){
        return {
            pelletNumber: 0
        }
    },
    updated(){
        this.pelletNumber = this.itemsOnCart
        this.$forceUpdate()
    },
    beforeMount(){
        this.pelletNumber = this.itemsOnCart
    }
}
</script>

<style scoped lang="scss">
.pellet {
    position: absolute;
    left: 34px;
    top: -13px;
    width: 28px;
    height: 26px;
    border-radius: 50%;
    background-color: whitesmoke;
    color: black !important;
    font-family: 'Roboto Mono', monospace;
    font-weight: bolder;
    border: 3px solid blue;

    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;

}
</style>
