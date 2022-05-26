<template>
    <div class="shopPanel">
        <div @click="handleImageClick()" class="burgerDiv">
            <img src="../assets/burger1.jpeg" alt="Burger">
        </div>
        <div @click="handleImageClick()" class="saladDiv">
            <img src="../assets/salad1.jpeg" alt="Salad">
        </div>
    </div>
</template>

<script>

export default {
    methods: {
        handleImageClick(){
            console.log("hola");
            this.$store.dispatch('updateNavRenderOptions', 2);
            this.$router.push('/menu')
        }
    }
}
</script>


<style lang="scss" scoped>
@import '../styles/mixins.scss';
@import '../styles/variables.scss';

.shopPanel {
    @include prepareApp($main-box-color);
}

.burgerDiv {
    @include shopImageDiv;
    border-radius: $main-border-radius 0 0 $main-border-radius;

    img {
        scale: 1.4;
        filter: blur(2px);
        transition: scale 0.5s;
        object-fit: cover;

        &:hover {
            scale: 1.2;
            filter: blur(0px)
        }
    }
}

.saladDiv {
    @include shopImageDiv;
    border-radius: 0 $main-border-radius $main-border-radius 0;

    img {
        scale: 1.6;
        transition: scale 0.5s;
        filter: blur(2px);

        &:hover {
            scale: 1.4;
            filter: blur(0px)
        }
    }
}
</style>